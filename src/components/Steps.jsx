import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import jobSkills from  '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import  {addResumeAPI}  from '../api/allAPI';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Review & Submit'];

function Steps({ resumeData, setResumeData }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate=useNavigate() 


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //render the content corresponding to the array index (ie. for Step 1  2, 3,4)
  const viewStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: //Basic Information
        return (
          <div>
            <h3>Personal Details</h3>
            {/* fullname */}
            <div>
              <TextField value={resumeData.name} onChange={(e)=>setResumeData({...resumeData,name:e.target.value})} id="standard-fname" label="Full name" variant="standard" className='w-100' />
            </div>

            {/* job title -select box */}
            <div>
              <FormControl variant="standard" className='w-100'>
                <InputLabel id="demo-simple-select-standard-label"> Choose Job Title</InputLabel>

                <Select value={resumeData.jobTitle} onChange={(e)=>setResumeData({...resumeData,jobTitle:e.target.value})} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                 {
                  jobRole.jobRoles.map(job=>(
                     <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))
                }
                </Select>

              </FormControl>
            </div>

            {/* location */}
            <div>
              <TextField value={resumeData.location} onChange={(e)=>setResumeData({...resumeData,location:e.target.value})} id="standard-loc" label="Location" variant="standard" className='w-100' />
            </div>

          </div>
        )
       case 1: //Contact Details
        return (
          <div>
            <h3>Contact Details</h3>
            {/* email */}
            <div>
              <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})} id="standard-email" label="Email" variant="standard" className='w-100' />
            </div>

            {/* phone*/}
            <div>
              <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})} id="standard-phn" label="Phone" variant="standard" className='w-100' />
            </div>

            {/* github link */}
            <div>
              <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})} id="standard-git" label="GitHub Link" variant="standard" className='w-100' />
            </div>

            {/* linkedin link */}
            <div>
              <TextField value={resumeData.linkedin} onChange={(e)=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-link" label="LinkedIn Link" variant="standard" className='w-100' />
            </div>


          </div>
        )
      case 2: //Educational Details
        return (
          <div>
            <h3>Educational Details</h3>
            {/* degree */}
            <div>
              <TextField value={resumeData.degree} onChange={(e)=>setResumeData({...resumeData,degree:e.target.value})} id="standard-degree" label="Bachelor's Degree" variant="standard" className='w-100' />
            </div>

            {/* clg*/}
            <div>
              <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})} id="standard-clg" label="Collage/University" variant="standard" className='w-100' />
            </div>

            {/* passout */}
            <div>
              <TextField value={resumeData.passout} onChange={(e)=>setResumeData({...resumeData,passout:e.target.value})} id="standard-passout" label="Passout Year" variant="standard" className='w-100' />
            </div>

          </div>
        )
      case 3 ://Review & Submit
       return(
        <div>
          <h3>Skills</h3>
          <p>Our AI will generate skills & summary according to your job role. 
            Click the <strong>AI SKILL & SUMMARY</strong> button to proceed</p>
        </div>
       )
    }
  }

  //to generate skils and summary using jobSkills.json and summaries.json files , in which data taken respective to jobTitle
  const generateAI=()=>{
    setResumeData({...resumeData,
      skills:jobSkills[resumeData.jobTitle],
      summary:summaries[resumeData.jobTitle]  
    })
    handleNext()
  }

  const addResume=async()=>{
    const {name,jobTitle,location,email,phone,github,linkedin,degree,university,passout,skills,summary}=resumeData

    if(name&&jobTitle&&location&&email&&phone&&github&&linkedin&&degree&&university&&skills.length>0 &&summary){
      
      //api call
      const res=await addResumeAPI(resumeData)
      console.log(res);
      if(res.status==201){
        alert("Resume added successfully")
        navigate(`/resume/${res.data.id}/view`) // to redirect when resume is added
      }
    }
    else{
      alert("enter all the fields completely")
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={addResume}>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>

          {/* view each step */}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {/* for diplaying the corresponding ui */}
          <Box>{viewStepContent(activeStep)}</Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            
              {
              activeStep === steps.length - 1 ? 
              <Button onClick={generateAI}>Generate AI Skills & Summary</Button>:
              <Button onClick={handleNext}>Next</Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps



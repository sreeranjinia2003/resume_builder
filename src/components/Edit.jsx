import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import { editResumeAPI } from '../api/allAPI';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

function Edit({ resumeData, setResumeData }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const skillref=useRef()
    const addSkill=(skill)=>{
       // skill = skillRef.current.value ->stores the entered value in skill.
        if(skill){ // if a skill is entered
            if(resumeData.skills?.map(sk=>sk.toLowerCase()).includes(skill.toLowerCase())){//check already exist
                alert("skill already added")
            }
            else{
                setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
            }
            skillref.current.value=""//Get whatever the user has typed into the skill input
        }
        else{
            alert("enter a valid skill") 
        }
    }
    const removeSkill=(skill)=>{
        setResumeData({...resumeData,skills:resumeData.skills.filter(sk=>sk!=skill)})
    }
    const editResume=async()=>{
        const {name,jobTitle,location,email,phone,github,linkedin,degree,university,passout,skills,summary}=resumeData
    
        if(name&&jobTitle&&location&&email&&phone&&github&&linkedin&&degree&&university&&passout&&skills.length>0 &&summary){
          
          //api call
         const res  =await editResumeAPI(resumeData?.id,resumeData)
         console.log(res);
         if(res.status==200){
            handleClose()
         }
         
        }
        else{
          alert("enter all the fields completely")
        }
      }

    return (
        <>
            <button className='btn text-warning' onClick={handleOpen}>
                <i class="fa-solid fa-file-pen fa-2xl"></i>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* content */}
                        <div>
                            <h3>Personal Details</h3>
                            {/* fullname */}
                            <div>
                                <TextField value={resumeData.name} onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} id="standard-fname" label="Full name" variant="standard" className='w-100' />
                            </div>

                            {/* job title -select box */}
                            <div>
                                <FormControl variant="standard" className='w-100'>
                                    <InputLabel id="demo-simple-select-standard-label"> Choose Job Title</InputLabel>

                                    <Select value={resumeData.jobTitle} onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                        {
                                            jobRole.jobRoles.map(job => (
                                                <MenuItem key={job} value={job}>{job}</MenuItem>
                                            ))
                                        }
                                    </Select>

                                </FormControl>
                            </div>

                            {/* location */}
                            <div>
                                <TextField value={resumeData.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} id="standard-loc" label="Location" variant="standard" className='w-100' />
                            </div>

                        </div>

                        <div>
                            <h3>Contact Details</h3>
                            {/* email */}
                            <div>
                                <TextField value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} id="standard-email" label="Email" variant="standard" className='w-100'  />
                            </div>

                            {/* phone*/}
                            <div>
                                <TextField value={resumeData.phone} onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-phn" label="Phone" variant="standard" className='w-100' />
                            </div>

                            {/* github link */}
                            <div>
                                <TextField value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} id="standard-git" label="GitHub Link" variant="standard" className='w-100' />
                            </div>

                            {/* linkedin link */}
                            <div>
                                <TextField value={resumeData.linkedin} onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-link" label="LinkedIn Link" variant="standard" className='w-100' />
                            </div>


                        </div>

                        <div>
                            <h3>Educational Details</h3>
                            {/* degree */}
                            <div>
                                <TextField value={resumeData.degree} onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-degree" label="Bachelor's Degree" variant="standard" className='w-100' />
                            </div>

                            {/* clg*/}
                            <div>
                                <TextField value={resumeData.university} onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })} id="standard-clg" label="Collage/University" variant="standard" className='w-100' />
                            </div>

                            {/* passout */}
                            <div>
                                <TextField value={resumeData.passout} onChange={(e) => setResumeData({ ...resumeData, passout: e.target.value })} id="standard-passout" label="Passout Year" variant="standard" className='w-100' />
                            </div>

                        </div>

                        <div className='mt-3'>
                            <h3>Skills</h3>
                            <div className='d-flex align-items-center '>
                                <input ref={skillref} type="text" placeholder='enter skills' className='form-control' />
                                <button className='btn btn-primary' onClick={()=>addSkill(skillref.current.value)}>ADD</button>
                            </div>

                            <p className='fw-bold mt-3'>Added Skills:</p>
                            {
                                resumeData?.skills?.map(skill=>(
                                    <span className='btn btn-dark m-2'>{skill}<button className='btn text-white' onClick={()=>removeSkill(skill)}>X</button></span>
                                ))
                            }
                            
                        </div>

                        <div className='mt-3'>
                            <h3>Professional Summary</h3>
                            <TextField value={resumeData.summary} multiline id="standard-summary" label="summary" variant="standard" className='w-100' />

                        </div>
                        <button className='btn btn-primary w-100 mt-5' onClick={editResume}>UPDATE</button>


                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
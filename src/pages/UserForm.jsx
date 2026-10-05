
import React, { useState } from 'react'
import Preview from '../components/Preview'
import Steps from '../components/Steps'



function UserForm() {
  const[resumeData,setResumeData]=useState({
        name:"",
        jobTitle:"",
        location:"",
        email:"",
        phone:"",
        github:"",
        linkedin:"",
        degree:"",
        university:"",
        passout:"",
        skills:[],
        summary:""
       })
  return (
    <div className='row'>
      <div className='col-lg-6'>
        <Steps resumeData={resumeData} setResumeData={setResumeData} />
      </div>
      <div className='col-lg-6'>
        {/* conditional rendering(preview only shows when we type name) */}
       { 
        resumeData?.name && <Preview resumeData={resumeData} />
        }
      </div>
    </div>
  )
}

export default UserForm

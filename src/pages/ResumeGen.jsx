import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom"

function ResumeGen() {
  return (
  
      <div className='container-fluid'>
        <h2 className='mt-5 text-center'>Create a Job Winning Resume In Minutes</h2>
        <div style={{ height: '60vh' }} className='row align-items-center justify-content-center'>
          <div className='col-4 text-center border shadow p-5'>
            <h1><IoDocumentTextSharp style={{ color: 'blue' }} /></h1>
            <h4>Add Your Information</h4>
            <p>Add pre written examples to each section</p>
            <h5>Step 1</h5>
          </div>
          <div className='col-1'> </div>
          <div className='col-4 text-center border shadow p-5'>
            <h1><FaFileDownload className='text-danger' /></h1>
            <h4>Download Your Resume</h4>
            <p>Download And Start Applying</p>
            <h5>Step 2</h5>
          </div>
          

        </div>
       
       <div className='text-center mb-5'>

          <Link to={'/form'} className='btn text-light' style={{backgroundColor:'blue'}}>LET'S START</Link>

        </div>
     
      </div>

  

  )
}

export default ResumeGen

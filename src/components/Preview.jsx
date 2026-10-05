import { Box, Paper } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function Preview({ resumeData }) {

  console.log(resumeData);

  return (
    <Box>
      <Paper elevation={3} sx={{ textAlign: 'center', padding: '20px',height:'600px',width:'700px'}} >

        <h2>{resumeData?.name}</h2>

        <h3>{resumeData?.jobTitle}</h3>

        <p>
          <span>{resumeData?.location}</span> ||
          <span>{resumeData?.email}</span> ||
          <span>{resumeData?.phone}</span>
        </p>

        <p>
          <Link to={resumeData?.linkedin}>LinkedIn</Link> |
          <Link to={resumeData?.github}>Github</Link>
        </p>

        <h4 className="text-center">SUMMARY</h4>

        <Divider sx={{ borderColor: 'black' }} />

        <p>{resumeData?.summary}</p>

        <h4 className="text-center">SKILLS</h4>

        <Divider sx={{ borderColor: 'black' }} />

        <div>
          {resumeData?.skills?.map((skill, index) => (
            <button className="btn" key={index}>
              {skill}
            </button>
          ))}
        </div>

        <h4 className="text-center">EDUCATION</h4>

        <Divider sx={{ borderColor: 'black' }} />

        <h6>{resumeData?.degree}</h6>

        <p>
          {resumeData?.university} || {resumeData?.passout}
        </p>

      </Paper>
    </Box>
  )
}

export default Preview
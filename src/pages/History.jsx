import { Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dltResumeAPI, getHistoryAPI } from '../api/allAPI'

function History() {

  const [downloads, setDownloads] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const response = await getHistoryAPI()
    console.log(response)

    setDownloads(response.data)
  }
  const deleteHistory = async (id) => {
    const res = await dltResumeAPI(id)
    console.log(res);
    getHistory()


  }

  return (
    <div className='my-5'>

  <div className='d-flex text-align-center justify-content-center'>
          <h1  className='text-danger' > Downloaded Resumes</h1>
          <Link to={'/'} className='text-primary' style={{marginLeft:900}} > Back</Link>
  </div>

      <div className='row m-3'>

        {
          downloads?.length > 0 ?
            downloads.map((dwnld) => (

              <div className='col-lg-4'>

                <Paper elavation={3} sx={{ padding: '10px'}}>

                  <div className='d-flex align-items-center justify-content-between'>

                    <h4 className="text-center"> {dwnld?.timestamp}</h4>

                    <button className="btn btn-danger  ms-2" onClick={()=>deleteHistory(dwnld?.id)}><i className="fa-solid fa-trash"></i></button>
                  </div>

                  <div>
                    {/* resume img */}

                    <img src={dwnld?.resumeImg} alt="Resume" className='img-fluid' />

                  </div>

                </Paper>

              </div>

            ))
            :
            <p className='text-center text-danger'> No Resume Downloaded Yet</p>
        }

      </div>

    </div>
  )
}

export default History
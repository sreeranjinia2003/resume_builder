import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import Edit from '../components/Edit'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../api/allApi'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import jsPDF from 'jspdf'
import { resume } from 'react-dom/server'



function View() {
  let { id } = useParams()
  const [resumeData, setResumeData] = useState({})
  const previewRef = useState()
  //console.log(id) //zseADI2zP3A
  useEffect(() => {
    getResumeDetails()
  }, [])
  const getResumeDetails = async () => {
    const res = await getResumeAPI(id)
    // console.log(res)
    setResumeData(res.data)
  }

  const downloadResume = async () => {
    const previewtag = previewRef.current  //the element to be screen shoted
    const canvas = await html2canvas(previewtag)  //complete content is transformed to convas but we need image
    // const imgurl= canvas.toDataURL('image/png')  //image form is given as png
    // console.log(imgurl);
    //the url created is too lengthy.so we can't pass that directly (it cuases error)

    //we are not converting it to url instead using claudinary
    canvas.toBlob(async (blob) => {
      //api call
      let formData = new FormData()
      formData.append('file', blob)
      formData.append("upload_preset", "my_preset")
      let response = await fetch(
        "https://api.cloudinary.com/v1_1/mxewgsky/image/upload",
        {
          method: "POST",
          body: formData
        }
      );
      console.log(response);
      const res = await response.json()
      console.log(res);

      const shorturl = res.secure_url
      generatePDF(shorturl)


    })


  }

  const generatePDF = async (imgUrl) => {
    const today = new Date()
    console.log(today);
    let timestamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    console.log(timestamp);
    const pdf = new jsPDF()
    const imgWidth = pdf.internal.pageSize.getWidth()        //methods to find img height and width provided by jspdf() 
    const imgHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgUrl, 'PNG', 0, 0, imgWidth, imgHeight)        //0,o indicates left and top,then height and width


    const downloadDetails = { timestamp, resumeId: resumeData?.id, resumeImg: imgUrl, jobRole: resumeData?.jobTitle } //this id is the is generated for each user's pdf in history
    const res = await addHistoryAPI(downloadDetails)
    console.log(res);
    if (res.status == 201) {
      pdf.save(`${resumeData?.name}-resume.pdf`)
    }



  }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column m-5 p-5'>
      <div>
        <button className='btn text-danger' onClick={downloadResume}>
          <i className="fa-solid fa-file-arrow-down fa-2xl"></i>
        </button>
        {/* edit */}
        <Edit resumeData={resumeData} setResumeData={setResumeData} />
        <Link to={'/history'} className='text-success'><i className="fa-solid fa-clock-rotate-left fa-2xl"></i></Link>
        <Link to={'/form'} className='text-primary ms-3'><i className='fa-solid fa-backward fa-2xl'></i></Link>
      </div>
      <div ref={previewRef} className='m-5'>
        <Preview resumeData={resumeData} />
      </div>
    </div>
  )
}

export default View
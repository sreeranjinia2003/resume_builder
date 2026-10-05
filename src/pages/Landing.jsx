import { Link } from "react-router-dom"

Link

function Landing() {
  return (
    <>
     {/* part 1 */}
   <section id='part1'>
    <div className='row pt-5'>
      <div className='col-12 col-md-4'></div>
       <div className='col-12 col-md-4 box border py-5 rounded my-5 text-center'style={{backgroundColor:'rgb(255,255,255,0.4'}}>
        <h3>Designed to get hired.</h3>
        <h4>Your skills,Your story,Your next job-all in one</h4>
        <Link className='btn btn-dark text-light' to={'/resume'} >Make Your Resume</Link>
        <div className='col-12 col-md-4'></div>
       </div>

    </div>
   </section>

   {/* part 2 */}
  <section className="'p-5">
    <h1 className="text-center">Tools</h1>
    <div className="row m-4">
      <div className="col lg-6">
        <h3>Resume</h3>
        <p>Create unlimited new resumes and easily edit them afterwards.</p>
        <h3>Cover Letters</h3>
        <p>Easily write professional cover letters.</p>
        <h3>Jobs</h3>
        <p>Automatically recieve new and relevant job postings.</p>
        <h3>Application</h3>
        <p>Effortlessly manage and track your job application in an organized manner.</p>

      </div>
       <div className="col lg-6">
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-professional-resume-templates-that-you-can-customize-image_2974655.jpg" alt="tools" className="img-fluid"/>
       </div>

    </div>
    

  </section>
  {/* part 3 */}
  <section style={{height:'500px',backgroundImage:'URL(https://img.freepik.com/premium-photo/office-employees-working-computers-coworking-desk-with-monitors_926199-1981892.jpg?w=2000)',backgroundSize:'cover',backgroundPosition:'top',backgroundAttachment:'fixed'}}>
    
  </section>
  

  </>
   

   
  )
}

export default Landing
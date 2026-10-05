
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { purple } from '@mui/material/colors';
import { Tooltip } from '@mui/material';


function Header() {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'blue'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold',display:'flex',alignItems:'center' }}>
            <img src="https://img.freepik.com/premium-vector/creative-modern-elegant-letter-cv-logo-design-vector_618422-379.jpg" alt="" width={'50'}/>
            <span className='ms-2'>RBuilder</span>
          </Typography>
            
          <Tooltip title="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.">
            <Button color="inherit">About Us</Button>
            </Tooltip>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

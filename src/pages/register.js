import React, { useEffect, useState , useRef } from 'react'
import{Button} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons/'
import Header from '../components/header/Header'
function Register(){

    const [text , setText] = useState('what is on your mind?');
    const [openCam , setOpenCam] = useState(false);

    const videoRef = useRef(null);
    const photoRef = useRef(null);
    
    const getUserCamera = ()=>{
      setOpenCam(!openCam)
      navigator.mediaDevices.getUserMedia({
        video: true
      })

      .then((stream) => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()

      })

      .catch((error)=>{
        console.log(error)
      })
    }

    const takePicture = ()=>{

      let width = 500
      let height = width / (16 / 9)

      let photo = photoRef.current
      let video = videoRef.current

      photo.width = width
      photo.height = height
      let ctx = photo.getContext('2d')
      ctx.drawImage(video , 0,0,width,height);
      let image = photo.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
      var link = document.createElement('a');
      link.download = "my-image.png";
      link.href = image;
      setText(image);
      link.click();
    }
    
    return(

        <center>
           <Header /> 
           <Button style={{marginTop: '40px'}} variant="contained" href="#" color="primary" onClick={getUserCamera} >
              Webcam Capture Photo
           </Button> <br />
{
  openCam? (<div>

             <video ref={videoRef} style={{width: '400px',height: '300px'}}></video> <br />
             <PhotoCamera style={{marginTop: '40px'}} /> <br />
            <Button variant="contained" href="#" color="primary" onClick={takePicture} >
                    Take Picture
            </Button> <br />
            
            <p>{text}</p>
            <canvas ref={photoRef} style={{width: '400px',height: '300px', marginBottom: '24px'}}></canvas>      

     </div>) : ''
}

            
        </center>
         
    
    )
}

export default Register;
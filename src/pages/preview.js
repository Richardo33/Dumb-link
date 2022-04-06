import React from "react";
import Profile from "../Assets/Alvin.jpg"
import "../style/preview.css"
import {Stack, Button} from "react-bootstrap"




function Preview() {
  return (
    <div className="card">    
        <div className="main" >
            <div className="d-flex bg-warning align-items-center">

            <img src={Profile} alt=""/>
            </div>
            <div >
                   <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, totam? Dolores dignissimos libero accusamus quidem itaque illum nesciunt nihil ipsa provident nulla, animi laborum nam saepe, consequuntur cupiditate corrupti error.</p>
            </div>
        </div>
        <Stack gap={2} className="col-md-5 mx-auto">
         <Button variant="secondary">
             <img src="" alt="" /> Facebook</Button>
         <Button variant="secondary">Instagram</Button>
         <Button variant="secondary">Twitter</Button>
         <Button variant="secondary">Youtube</Button>
         <Button variant="secondary">WhatsApp</Button>
         
        </Stack>

    </div>
  );
}

export default Preview;

import React from "react"
import "../style/createLink.css"
import Sidebar from "../component/sidebar"
import Phone1 from "../Assets/Phone.png"
import Button from '@mui/material/Button';
import Chessboard from "../Assets/chessboard.png"
import TextField from '@mui/material/TextField';

function CreateLink() {
    const socialMedia=[
        {
        image:"",
        title: "Facebook",
        link:"www.facebook.com"
    },
        {
        image:"",
        title: "Instagram",
        link:"www.Instagram.com"
    },
        {
        image:"",
        title: "Twitter",
        link:"www.Twitter.com"
    },
        {
        image:"",
        title: "Youtube",
        link:"www.Youtube.com"
    },
        {
        image:"",
        title: "Whatsapp",
        link:"www.Whatsapp.com"
    },
]


    return(
        <div className="all">
            <div className="leftPart">
                <Sidebar/>
            </div>
            <div className="rightPart">
                <h3 className="px-5 py-4">Template</h3>
                <div className="main px-5">
                    <div className="d-flex">
                    <h3 className="py-3">Create link</h3>
                    <Button sx={{ bgcolor: 'warning.main' }} className="btn ms-5"><p>Contained</p></Button>
                    </div>
                    <div className="bottom">
                        <div className="leftCard" style={{overflow: "scroll", height: "500px", backgroundColor:"white", padding:"20px"}}>
                            <div className="ps-3">
                            <div>
                                <img src={Chessboard} alt="" />
                                <Button sx={{ bgcolor: 'warning.main' }} className="btn ms-5"><p>Upload</p></Button>
                            </div>
                            <div className='mb-4'>
                                <TextField id="standard-basic" label="Title" variant="standard"/>
                            </div>
                            <div className='mb-4'>
                                <TextField id="standard-basic" label="Description" variant="standard" />
                            </div>
                            </div>

                        {socialMedia.map((item)=>{
                            return(
                                <div className='mb-4 rounded d-flex p-3' style={{background:"#ececec"}}>
                                    <div>
                                        <img src={Chessboard} alt="foto link"/>
                                    </div>
                                    <div>
                                        <div className='ms-4'>
                                        <TextField id="standard-basic" label="title link" variant="standard"/>
                                        </div>
                                        <div className='ms-4'>
                                        <TextField id="standard-basic" label="link" variant="standard"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                            <div>
                                <Button sx={{ bgcolor: 'warning.main' }} className="w-100 h-25"><p>Add New Link</p></Button>
                            </div>
                        </div>

                        <div className="rightCard">
                            <img src={Phone1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default CreateLink
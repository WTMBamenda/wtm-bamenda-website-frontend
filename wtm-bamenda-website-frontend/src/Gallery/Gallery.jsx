import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../assets/events/Event-gallery/img1.jpg';
import Img2 from '../assets/events/Event-gallery/img2.jpg';
import Img3 from '../assets/events/Event-gallery/img3.jpg';
import Img4 from '../assets/events/Event-gallery/img4.jpg';
import Img5 from '../assets/events/Event-gallery/img5.jpg';
import Img6 from '../assets/events/Event-gallery/img6.jpg';
import Img7 from '../assets/events/Event-gallery/img7.jpg';
import Img8 from '../assets/events/Event-gallery/img8.jpg';
import Img9 from '../assets/events/Event-gallery/img9.jpg';
export default function Gallery () {
    let data = [
        {
        id : 1,
        ImgSrc: Img1,
    },
    {
        id : 2,
        ImgSrc: Img2,
    },
    {
        id : 3,
        ImgSrc: Img3,
    },
    {
        id : 4,
        ImgSrc: Img4,
    },
    {
        id : 5,
        ImgSrc: Img5,
    },
    {
        id : 6,
        ImgSrc: Img6,
    },
    {
        id : 7,
        ImgSrc: Img7,
    },
    {
        id : 8,
        ImgSrc: Img8,
    },
    {
        id : 9,
        ImgSrc: Img9,
    }
]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (ImgSrc) => {
        setTempImgSrc(ImgSrc);
        setModel(true);
    }
    return(
       <>
       <div className={model? "model open": "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick = {() => setModel(false)}/>
       </div>
         <h2 className='heading-text'>Gallery</h2>
         <div className='gallery'>
          {  
          data.map((item, index) => {
            return(
                <div className='pics ' key={index}>
                    <img src={item.ImgSrc} alt="gallery-image" style={{width:' 100%'}} onClick={() => getImg(item.ImgSrc)}/>
                </div>
            )
          })}
         </div>
       </>
        
    )
}
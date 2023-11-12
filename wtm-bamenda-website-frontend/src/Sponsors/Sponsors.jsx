import './Sponsors.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function carousel(){
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      <div className='sponsors-carousel-wrapper'>
      <h2>Sponsors</h2>
       <div className='sponsors-carousel'>
    <Slider {...settings}>
     <div className="sponsors-carousel-item">
        <img className="carousel-image" src={require('../assets/logos/GDG Bamenda Logo.png')} alt='GDG Bamenda Logo'/>
     </div>
     <div className="sponsors-carousel-item">
        <img className="carousel-image" src={require('../assets/logos/WhileSmart logo 2.png')} alt='WhileSmart Logo'/>
     </div>
      <div className="sponsors-carousel-item">
        <img className="carousel-image"src={require('../assets/logos/bitsvalley logo.png')} alt='Bitsvalley Logo'/>
     </div>
     <div className="csponsors-carousel-item">
        <img className="carousel-image" src={require('../assets/logos/Felix Fomengia.png')} alt='Felix Fomengia Logo'/>
     </div>
     <div className="sponsors-carousel-item">
        <img className="carousel-image" src={require('../assets/logos/datagirl logo.png')} alt='Datagirl Logo'/>
     </div>
  </Slider>
 </div>
 </div>
    );
}

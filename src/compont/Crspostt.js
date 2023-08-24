import Carousel from 'react-bootstrap/Carousel';
import img1 from "../compont/imges/44444444.jpg"
import img2 from "../compont/imges/8888.jpg"
import img3 from "../compont/imges/7777.jpg"
import "./carsoel.css"

function DarkVariantExample() {
  return (<div style={{display:"flex"}}>
    <div className='carsoel'>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    <div className='abouttt'>
    <h1 className='abouttt-tx'><span className='mofer'>موفِّر</span> متجر الكتروني </h1>
    <h3 className='abouttt-tx'> لك ولكل افراد عائلتك</h3>
    <h3 className='abouttt-tx'>نسعى لتقديم الأفضل بأسعار تنافسية</h3>

    
    </div>
    </div>
  );
}

export default DarkVariantExample;
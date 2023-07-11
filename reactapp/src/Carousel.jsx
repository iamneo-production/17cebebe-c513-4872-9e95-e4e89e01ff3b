import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-responsive"
                    src="/Images/car1.jpeg"
                    alt="First slide"
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3 style={{color:"black"}}>Be Safe</h3>
                    <p style={{color:"black"}}>Your Safety is Our First Priority.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default UncontrolledExample;
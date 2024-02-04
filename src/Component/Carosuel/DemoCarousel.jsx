
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgFirst from "../../assets/image1.png"
import imgSecond from "../../assets/image2.png"
const DemoCarousel = () => {


           return (
                      <div className="mt-8 ">
                                 <Carousel>
                                            <div>
                                                       <img src={imgFirst} />

                                            </div>
                                            <div>
                                                       <img src={imgSecond} />

                                            </div>
                                            <div>
                                                       <img src={imgFirst} />

                                            </div>
                                 </Carousel>
                      </div>
           );

}

export default DemoCarousel
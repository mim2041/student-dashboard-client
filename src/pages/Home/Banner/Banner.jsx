import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/images/home/banner1.jfif';
import img2 from '../../../assets/images/home/banner2.jpg';
import img3 from '../../../assets/images/home/banner3.jpg';
import img4 from '../../../assets/images/home/banner4.jfif';
import img5 from '../../../assets/images/home/banner5.jpg';
import img6 from '../../../assets/images/home/banner6.jpg';

const Banner = () => {

    const bannerText = 
    <div className="absolute h-full flex items-center text-white left-0 top-0 bg-gradient-to-r from-blue-500 rounded-xl">
        <div className='space-y-7  lg:w-1/2 pl-12 '>
            <h2 className='text-2xl lg:text-5xl font-bold title'>Welcome to <br /> Student Portal <br /> Of Jahangirnagar University</h2>
            <p className=''>We serve the way you like, the thing you want, the perfections you are looking for.  We are here to listen your </p>
            <div className='flex'>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Updates</button>
            </div>
        </div>

    </div>

    return (
        <div className="carousel w-full lg:h-[600px] mt-16 lg:mt-0">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full " />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
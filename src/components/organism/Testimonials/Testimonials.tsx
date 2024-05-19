import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

type TestimonialClasses = {
  sectionClasses?: string;
  sectionTitleClasses?: string;
}

type TestimonialData ={
  testimonialImageUrl :string;
  name: string;
  userTitle: string;
  userDesc: string;
}
interface TestimonialsProps{
  title: string;
  testimonialData : TestimonialData[];
  overAllClasses: TestimonialClasses;
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const Testimonials = ({title, testimonialData, overAllClasses}: TestimonialsProps) =>{
  return(
    <section className={`testimonials ${overAllClasses.sectionClasses}`}>
      <div className="container-lg">
        <h3 className={overAllClasses.sectionTitleClasses} dangerouslySetInnerHTML={{ __html: title }} />
        <div className="row">
        <div className="testimonials__sliders">
          <Slider {...settings}>
            {testimonialData.map((data, index)=>{
              return(
                <div className="testimonial__slider--container">
                  <div className="testimonial__slider bg-white p-4 mx-4 text-center">
                    <img src={data.testimonialImageUrl} alt="user image" className="mx-auto"/>
                    <h4 className="pt-3 text-primary" dangerouslySetInnerHTML={{ __html: data.name }} />
                    <p className="pt-2 mb-0">{data.userTitle}</p>
                    <p className="pt-3 mb-0">{data.userDesc}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
        </div>
      </div>
    </section>
  )
}
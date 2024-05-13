import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

const testimonialData: ProfileCardProps[] = [
  {
    imageSrc: "/assets/images/karan-desai.png",
    imageAlt: "Profile picture of Sachin Bagal",
    name: "Karan Desai",
    title: "Founder, Avykka LLC, New York, USA",
    description:
      "Rise India Foundation stands as a unique organization at the intersection of social development, women empowerment, education and disaster relief, taking a holistic grassroot approach. Their high-impact model includes organic empowerment, exemplifying authentic thought leadership for a sustainable future in disadvantaged communities.",
  },
  {
    imageSrc: "/assets/images/karan-desai.png",
    imageAlt: "Profile picture of Sachin Bagal",
    name: " Sameer Talware",
    title: "SR. Manager ER/IR, Reliance Retail Limited",
    description:
      "Rise India Foundation has actively promoted women's rights through informative sessions in Mumbai stores, raising awareness about relevant Indian laws. Additionally, their commendable pandemic relief efforts, including distributing sanitizers, masks, food, and providing water in drought-prone areas of Maharashtra, have garnered my admiration. Kudos to the Rise India Team!",
  },
  {
    imageSrc: "/assets/images/karan-desai.png",
    imageAlt: "Profile picture of Sachin Bagal",
    name: "Sachin Bagal",
    title:
      "Manager- Business Development and Project Manager MHPDS, Integra Micro Systems (P) Ltd.",
    description:
      "During the Covid-19 pandemic, Rise India Foundation brought smiles to the faces of struggling daily wagers and laborers across the country by providing essential food packets. Additionally, despite budget constraints, the foundation supplied vital precautionary products like sanitizers and masks to BEST workers and Police officials, demonstrating their commitment to safety.",
  },
];

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt }: ProfileImageProps) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="rounded-circle aspect-ratio-square"
    style={{ width: "67px" }}
  />
);

interface ProfileNameProps {
  name: string;
}

const ProfileName = ({ name }: ProfileNameProps) => (
  <h1 className="mt-4 fs-4 fw-bold card-profile-name">{name}</h1>
);

interface ProfileTitleProps {
  title: string;
}

const ProfileTitle = ({ title }: ProfileTitleProps) => (
  <p className="mt-2 fs-5-5 font-dark">{title}</p>
);

interface ProfileDescriptionProps {
  description: string;
}

const ProfileDescription = ({ description }: ProfileDescriptionProps) => (
  <p className="mt-3 fs-6 text-center font-dark">{description}</p>
);

interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  description: string;
}

const ProfileCard = ({
  imageSrc,
  imageAlt,
  name,
  title,
  description,
}: ProfileCardProps) => (
  <article className="d-flex flex-column align-items-center p-5 text-center bg-white testimonial-card">
    <ProfileImage src={imageSrc} alt={imageAlt} />
    <ProfileName name={name} />
    <ProfileTitle title={title} />
    <ProfileDescription description={description} />
  </article>
);

interface NextArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ className, onClick }: NextArrowProps) => {
  return (
    <div className={className} onClick={onClick}>
      <img src="/assets/images/left-arrow-indicator.svg" alt="Prev" />
    </div>
  );
};

interface PrevArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = ({ className, onClick }: PrevArrowProps) => {
  return (
    <div className={className} onClick={onClick}>
      <img src="/assets/images/right-arrow-indicator.svg" alt="Prev" />
    </div>
  );
};

export function Testimonials() {
  let settings = {
    dots: true,
    dotsClass: "slick-dots",
    className: "center",
    centerMode: true,
    infinite: testimonialData.length > 3,
    centerPadding: "510px",
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          className: "center",
          centerMode: true,
          infinite: testimonialData.length > 3,
          centerPadding: "340px",
          slidesToShow: 1,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          className: "center",
          centerMode: true,
          infinite: testimonialData.length > 3,
          centerPadding: "140px",
          slidesToShow: 1,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          prevArrow: undefined,
          nextArrow: undefined,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          className: "center",
          centerMode: true,
          infinite: testimonialData.length > 3,
          centerPadding: "100px",
          slidesToShow: 1,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          prevArrow: undefined,
          nextArrow: undefined,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          className: "center",
          centerMode: true,
          infinite: testimonialData.length > 3,
          centerPadding: "84px",
          slidesToShow: 1,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          prevArrow: undefined,
          nextArrow: undefined,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section py-5">
      <h1 className="testimonial-title text-center mb-5">
        <span className="text-color">“Testimonials of </span>
        <span className="font-dark-gray">Success and Excellence”</span>
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {!!testimonialData &&
            testimonialData.map((profile: ProfileCardProps, key: number) => (
              <ProfileCard
                key={key}
                imageSrc={profile.imageSrc}
                imageAlt={profile.imageAlt}
                name={profile.name}
                title={profile.title}
                description={profile.description}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
}

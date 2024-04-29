import { AboutUsCustomerCard } from '../../../components/atom/AboutUsCustomerCard/AboutUsCustomerCard';
import { OurCommitment } from './OurCommitment';

export function AboutUsDetailsSection() {
  const aboutRiseIndiaKeyFeature = [
    {
      backgroundColor: 'bg-light-gray',
      heading: 'Empowerment',
      headingColor: 'font-color-orange',
      description:
        'Empowering individuals and communities by providing tools, knowledge, and resources to take charge of their own destinies, foster self-reliance and sustainable growth. We aim to, through our programs and initiatives, create a platform where every person can rise above challenges, realize their potential, actively contributing to the betterment of society.',
    },
    {
      backgroundColor: 'bg-white',
      heading: 'Transparency',
      headingColor: 'font-dark-gray',
      description:
        'Transparency being the core of our operations, we pledge to uphold the highest standards of integrity, accountability, and openness in our interactions with stakeholders, partners, and beneficiaries. We are committed to providing clear, accurate, timely information about our activities, impact, and financials, ensuring that our stakeholders have full confidence in us.',
    },
    {
      backgroundColor: 'bg-light-gray',
      heading: 'Inclusivity',
      headingColor: 'font-color-orange',
      description:
        'Dedicated to creating long-lasting, sustainable solutions that address the root of social issues, striving to leave a positive, enduring impact on the communities we serve. Adopting environmentally conscious practices and promoting responsible resource management, to contribute to a more sustainable and resilient future for both people and the planet.',
    },
    {
      backgroundColor: 'bg-white',
      heading: 'Sustainability',
      headingColor: 'font-dark-gray',
      description:
        'Dedicated to creating long-lasting, sustainable solutions that address the root of social issues, striving to leave a positive, enduring impact on the communities we serve. Adopting environmentally conscious practices and promoting responsible resource management, to contribute to a more sustainable and resilient future for both people and the planet.',
    },
  ];

  const aboutUsParagraph = () => {
    return (
      <section>
        <div className='container py-5'>
          <h2 className='text-center fw-bold pb-4 jumbotron-heading'>
            <span className='font-color-orange'>About</span> Rise India
            Foundation
          </h2>
          <p>
            Rise India Foundation is a team of enthusiastic individuals from
            diverse backgrounds working towards conscientizing the
            underprivileged citizen and empowering the deprived and marginalized
            communities leading to improvement in their livelihoods through
            various programs and activities. Rise India Foundation is a team of
            enthusiastic individuals from diverse backgrounds working towards
            conscientizing the underprivileged citizen and empowering the
            deprived and marginalized communities leading to improvement in
            their livelihoods through various programs and activities.
          </p>
        </div>
      </section>
    );
  };
  const displayInfo = () => {
    return aboutRiseIndiaKeyFeature.map((keyFeature, index) => {
      return (
        <AboutUsCustomerCard
          key={index}
          heading={keyFeature.heading}
          description={keyFeature.description}
          headingColor={keyFeature.headingColor}
          backgroundColor={keyFeature.backgroundColor}
        />
      );
    });
  };
  return (
    <>
      {aboutUsParagraph()}
      {displayInfo()}
      <OurCommitment />
    </>
  );
}

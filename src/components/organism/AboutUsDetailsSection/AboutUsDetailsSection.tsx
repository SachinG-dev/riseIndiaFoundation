import { AboutUsCustomerCard } from '../../../components/atom/AboutUsCustomerCard/AboutUsCustomerCard';

export function AboutUsDetailsSection() {
  const aboutRiseIndiaKeyFeature = [
    {
      backgroundColor: 'grey',
      heading: 'Empowerment',
      headingColor: 'orange',
      description:
        'Empowering individuals and communities by providing tools, knowledge, and resources to take charge of their own destinies, foster self-reliance and sustainable growth. We aim to, through our programs and initiatives, create a platform where every person can rise above challenges, realize their potential, actively contributing to the betterment of society.',
    },
    {
      backgroundColor: 'white',
      heading: 'Transparency',
      headingColor: 'gray',
      description:
        'Transparency being the core of our operations, we pledge to uphold the highest standards of integrity, accountability, and openness in our interactions with stakeholders, partners, and beneficiaries. We are committed to providing clear, accurate, timely information about our activities, impact, and financials, ensuring that our stakeholders have full confidence in us.',
    },
    {
      backgroundColor: 'grey',
      heading: 'Inclusivity',
      headingColor: 'orange',
      description:
        'Dedicated to creating long-lasting, sustainable solutions that address the root of social issues, striving to leave a positive, enduring impact on the communities we serve. Adopting environmentally conscious practices and promoting responsible resource management, to contribute to a more sustainable and resilient future for both people and the planet.',
    },
    {
      backgroundColor: 'white',
      heading: 'Sustainability',
      headingColor: 'gray',
      description:
        'Dedicated to creating long-lasting, sustainable solutions that address the root of social issues, striving to leave a positive, enduring impact on the communities we serve. Adopting environmentally conscious practices and promoting responsible resource management, to contribute to a more sustainable and resilient future for both people and the planet.',
    },
  ];

  const CommitmentFeature = [
    {
      featureHeading: 'Empowering Communities Through Education:',
      featureDescription:
        'We are dedicated to providing quality education and skill-building opportunities to underprivileged communities,to break the cycle of poverty and realize their full potential.',
    },
    {
      featureHeading: 'Promoting Health and Well-being:',
      featureDescription:
        'We commit to improving the overall health and well-being of individuals and communities by conducting healthcare initiatives, awareness campaigns, along with providing access to essential medical resources.',
    },
    {
      featureHeading: 'Fostering Sustainable Livelihoods:',
      featureDescription:
        'We strive to create sustainable livelihoods for marginalized groups by offering vocational training, entrepreneurship development, and supporting micro-enterprises, ensuring long-term economic empowerment.',
    },
    {
      featureHeading: 'Advocating for Social Justice and Equality: ',
      featureDescription:
        'We actively work towards creating an inclusive society by advocating for the rights and dignity of all individuals, regardless of gender, caste, religion, or socio-economic background, fostering an environment of equality and justice.',
    },
  ];

  return (
    <>
      <section className='py-5'>
        <div className='container'>
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
      {aboutRiseIndiaKeyFeature.map((keyFeature) => {
        return (
          <AboutUsCustomerCard
            key={keyFeature.heading}
            heading={keyFeature.heading}
            description={keyFeature.description}
            headingColor={keyFeature.headingColor}
            backgroundColor={keyFeature.backgroundColor}
          />
        );
      })}
      <section className='bg-light-gray'>
        <div className='container py-5'>
          <h2 className='fw-bold pt-4 jumbotron-heading'>
            Our&nbsp;<span className='font-color-orange'>Commitment</span>
          </h2>
          <div>
            <ol className='mt-4'>
              {CommitmentFeature.map((keyFeature, index) => {
                return (
                  <li className='font-dark-gray py-4' key={index}>
                    <span className='fw-bold'>
                      {keyFeature.featureHeading}&nbsp;
                    </span>
                    <span>{keyFeature.featureDescription}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

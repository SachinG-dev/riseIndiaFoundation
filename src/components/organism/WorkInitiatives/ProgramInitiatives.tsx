import React from 'react';
import './ProgramInitiatives.css';
import ProgramCard from '../../../components/atom/ProgramCard/ProgramCard';

export function ProgramInitiatives() {
  const programCardsData = [
    {
      iconSrc: '/assets/svg/education-logo.svg',
      programName: 'Education',
      programDescription:
        'Illuminating Minds, Empowering Futures. Our education initiatives ensure access to quality education for underprivileged children, equipping them with knowledge and skills to break the cycle of poverty.',
      btnLink: '#',
    },
    {
      iconSrc: '/assets/svg/health-logo.svg',
      programName: 'Health',
      programDescription:
        'Nurturing Wellness, Saving Lives. Our healthcare programs provide essential medical services, promote preventive care, and raise awareness to improve the well-being of communities in need.',
      btnLink: '#',
    },
    {
      iconSrc: '/assets/svg/disaster-relief.svg',
      programName: 'Disaster Relief',
      programDescription:
        'Rebuilding Lives, Restoring Hope. We swiftly respond to natural disasters, offering immediate relief, shelter, and support to affected individuals and communities, aiding in their recovery and resilience.',
      btnLink: '#',
    },
    {
      iconSrc: '/assets/svg/advocacy-logo.svg',
      programName: 'Advocacy',
      programDescription:
        'Amplifying Voices, Driving Change. Through advocacy efforts, we strive to bring attention to social issues, drive policy changes, and create a platform for marginalized communities to be heard.',
      btnLink: '#',
    },
    {
      iconSrc: '/assets/svg/skill-development-logo.svg',
      programName: 'Skill Development',
      programDescription:
        'Unlocking Potential, Opening Doors. Our skill development programs provide vocational training and mentorship, empowering individuals with marketable skills to enhance employability and achieve self-sufficiency.',
      btnLink: '#',
    },
  ];

  return (
    <section className='program-initiatives-section py-5'>
      <div className='container'>
        <div className='pt-5'>
          <h2 className='jumbotron-heading text-lg-start text-center'>
            <span className='font-color-orange'>Our Work&nbsp;</span>
            <span className='font-dark-gray'>Initiatives and Programs</span>
          </h2>
        </div>
        <div className='d-flex flex-wrap gap-4 justify-content-center py-5'>
          {programCardsData.map((program, i) => (
            <ProgramCard
              key={i}
              iconSrc={program.iconSrc}
              programName={program.programName}
              programDescription={program.programDescription}
              btnText={'Learn more'}
              btnLink={program.btnLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

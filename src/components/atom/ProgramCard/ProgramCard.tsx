import React from 'react';
import './ProgramCard.css';

interface ProgramCardProps {
  iconSrc: string;
  programName: string;
  programDescription: string;
  btnText: string;
  btnLink: string;
}

const ProgramCard = ({
  iconSrc,
  programName,
  programDescription,
  btnText,
  btnLink,
}: ProgramCardProps) => {
  return (
    <div className='d-flex flex-column justify-content-center text-center align-items-center gap-2 p-4 program-card'>
      <img
        src={iconSrc}
        alt='initiative-program-icon'
        className='program-icon'
      />
      <h3 className='h2 program-name'>{programName}</h3>
      <p className='program-description'>{programDescription}</p>
      <a className='btn-secondary' href={btnLink}>
        {btnText}
      </a>
    </div>
  );
};

export default ProgramCard;

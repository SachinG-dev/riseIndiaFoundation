import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CustomCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}
const CustomCard = ({
  imageSrc,
  title,
  description,
  link,
}: CustomCardProps) => {
  return (
    <Card
      style={{
        borderRadius: '20px',
        backgroundColor: '#FFFFFF40',
        color: 'white',
      }}
      className='h-100 justify-content-center'
    >
      <div className='row g-0 align-items-center'>
        <div className='col-md-4'>
          <Card.Img src={imageSrc} alt='Card image' className='m-2' />
        </div>
        <div className='col-md-8 ps-4'>
          <Card.Body>
            <Card.Title className='fw-bold'>{title}</Card.Title>
            <Card.Text className='impactSectionDescription text-white'>
              {description}
            </Card.Text>
            <Link to={link} className='font-color-orange'>
              Learn More
            </Link>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;

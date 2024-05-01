import React from 'react';
import clsx from 'clsx';
interface AboutUsCustomerCardProps {
  heading: string;
  description: string;
  backgroundColor: string;
  headingColor: string;
}

export function AboutUsCustomerCard({
  heading,
  description,
  backgroundColor,
  headingColor,
}: AboutUsCustomerCardProps) {
  const backgroundClasses = clsx({
    'bg-white': backgroundColor === 'white',
    'bg-light-gray': backgroundColor === 'grey',
  });

  const headingClasses = clsx({
    'font-color-orange': headingColor === 'orange',
    'font-dark-gray': headingColor === 'gray',
  });

  return (
    <section className={backgroundClasses}>
      <div className='container py-5'>
        <h2 className={`fw-bold pb-4 jumbotron-heading ${headingClasses}`}>
          {heading}
        </h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

import React from 'react';
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
  return (
    <section className={`${backgroundColor}`}>
      <div className='container py-5'>
        <h2 className={`fw-bold pb-4 ${headingColor} jumbotron-heading`}>
          {heading}
        </h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

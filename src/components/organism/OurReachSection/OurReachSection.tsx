import React from 'react';
import './OurReachSection.css';

export function OurReachSection() {
  return (
    <section className='py-5'>
      <h2 className='py-lg-5 py-3 text-center jumbotron-heading'>
        <span className='font-dark-gray'>Our&nbsp;</span>
        <span className='font-color-orange'>Reach</span>
      </h2>
      <div className='d-flex justify-content-around flex-wrap text-center'>
        <div className='mb-4'>
          <div className='stats-circle'>
            <span className='font-color-orange jumbotron-heading fw-bold'>
              1
            </span>
          </div>
          <h5 className='pt-4 stats-titles'>States Covered</h5>
        </div>
        <div className='mb-4'>
          <div className='stats-circle'>
            <span className='font-color-orange jumbotron-heading fw-bold'>
              3
            </span>
            <span className='font-color-orange font-45 fw-bold'>Thousand</span>
          </div>
          <h5 className='pt-4 stats-titles'>Direct Beneficiaries</h5>
        </div>
        <div className='mb-4'>
          <div className='stats-circle'>
            <span className='font-color-orange jumbotron-heading fw-bold'>
              0.1
            </span>
            <span className='font-color-orange font-45 fw-bold'>Lakh</span>
          </div>
          <h5 className='pt-4 stats-titles text-black'>
            Indirect Beneficiaries
          </h5>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'NAT REYNOLDS',
      feedback:
        'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s'
    },
    {
      name: 'CELIA ALMEDA',
      feedback:
        'Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.',
      image: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'
    },
    {
      name: 'BOB ROBERTS',
      feedback:
        'Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCnTE2cv4oHxfI6bROQzqGKp5B1GYpvNBLA&s'
    }
  ];

  return (
    <section className="testimonials">
      <h2>We are committed expert partners</h2>
      <p>
        We place huge value on strong relationships and have seen the benefit
        they bring to our business. Customer feedback is vital in helping us to
        get it right.
      </p>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <blockquote>{testimonial.feedback}</blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

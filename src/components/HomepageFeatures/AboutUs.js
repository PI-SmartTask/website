import React from 'react';
import Heading from '@theme/Heading';

export default function AboutUs() {
  return (
    <section style={{ textAlign: 'center', padding: '50px 20px' }}>
      <Heading as="h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        About Us
      </Heading>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto', marginTop: '10px' }}>
        We are computer science students, and this project was developed as our Final Year Project for our degree program. 
        The concept was collaboratively conceived and inspired by the incredibly busy schedule of a student.
      </p>
    </section>
  );
}

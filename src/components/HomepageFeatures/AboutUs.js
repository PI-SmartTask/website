import React from 'react';
import Heading from '@theme/Heading';

export default function SobreNos() {
  return (
    <section style={{ textAlign: 'center', padding: '50px 20px' }}>
      <Heading 
        as="h2" 
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '20px' 
        }}
      >
        About Us
      </Heading>
      <p 
        style={{ 
          fontSize: '1.2rem', 
          maxWidth: '800px', 
          margin: 'auto', 
          marginTop: '10px',
          lineHeight: '1.6'  
        }}
      >
        We are Computer Engineering students, and this project was developed as our Final Year Project for our undergraduate program.
        The concept of SmarTask is an advanced system that uses AI and advanced algorithms to optimize the allocation of schedules in companies.
      </p>
    </section>
  );
}

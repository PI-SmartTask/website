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
        Sobre Nós
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
        Somos estudantes de eng. de informática, e este projeto foi desenvolvido como nosso Trabalho de Conclusão de Curso para o nosso programa de graduação. 
        O conceito do SmarTask é um sistema avançado que utiliza IA para otimizar a alocação de horários em empresas.
      </p>
    </section>
  );
}

import React from 'react';
import Nav from '../../../components/Nav'
import FormSignIn from '../../../components/Form';
import Footer from '../../../components/Footer'
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
    <Nav />
    <Container>
     <div>
       <section className="signup-section">
        <div className="signup-text">
          Textos
        </div>
        <div className="signup-form">
         < FormSignIn />
        </div>
       </section>
       <section className="cta-section">
         <div>
           CTA
         </div>
       </section>
     </div>
    </Container>
    <Footer />
    </>
  );
}

export default Home;
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {  
  return (
    <>
      <Header />
      <p> Get your best comic updates here</p>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <section className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna vel justo porttitor, 
        eu rutrum ante ultricies. Donec non efficitur nisi. Aenean convallis purus quis accumsan sodales. 
        Proin dictum orci eget elit vehicula varius. Fusce augue ante, bibendum ac dignissim vel, convallis 
        sit amet eros. Phasellus quam tortor, semper vitae scelerisque in, pellentesque eu erat. Aliquam 
        hendrerit quis ipsum ac viverra. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Curabitur dictum justo quis luctus tincidunt. Suspendisse tortor metus, 
        interdum vitae faucibus vel, ultrices quis eros. Quisque non risus libero. Morbi sed elit sem. Mauris
        quis elit non nunc volutpat blandit. Fusce consectetur justo quis diam hendrerit, eu faucibus elit 
        malesuada.
        <br />
        Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit
        mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus 
        euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac 
        maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis 
        dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque.
      </section>
      <br/>
      <section className="about">
        Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit
        mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus 
        euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac 
        maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis 
        dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque.
      </section>
      <Footer />
    </>
  );
};

export default About;

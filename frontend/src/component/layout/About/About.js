// AboutUsPage.js
import React from 'react';
import './About.css';

const peopleData = [
  { id: 2302101001, name: 'Aayush Agrawal', address: 'mt2302101001@iiti.ac.in' },
  { id: 2302101004, name: 'Aditya Chandle', address: 'mt2302101004@iiti.ac.in' },
  { id: 2302101008, name: 'Apoorv Ambade', address: 'mt2302101008@iiti.ac.in' },
  { id: 2302101009, name: 'Dhananjay Kansule', address: 'mt2302101009@iiti.ac.in' },
];

const About = () => {
  return (
    <div className="about-us-container">
      <h1 id='about'>About Us</h1>
      <div className="person-cards">
        {peopleData.map((person) => (
          <div className="person-card" key={person.id}>
            <h2 id='name'>{person.name}</h2>
            <p>ID: {person.id}</p>
            <p>Email-Address: {person.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

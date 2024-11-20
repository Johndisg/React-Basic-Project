import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="https://media.istockphoto.com/id/1191193169/photo/portrait-of-a-confident-young-woman-at-the-park.jpg?b=1&s=612x612&w=0&k=20&c=StRxOnMZGBl3714zvEc2vHKJStEkgIfAcpo3zZ8UZ08=" alt="Profile" className="profile-image" />
      <div className="header-info">
        <h1>Emmanuelle Smith</h1>
        <h2>Web Developer & UI-UX Designer</h2>
        <p>
          Experiencia en React con Bootstrap y Diseño de Mockups y prototipos Web para Front End React.
        </p>
      </div>
    </header>
  );
};

export default Header;

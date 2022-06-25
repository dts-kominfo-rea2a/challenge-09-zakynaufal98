// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="card">
      <div className="style-photo">
        <img className="profile-photo" alt={data.name} src={data.photo} />
      </div>
      <div className="profile-container">
        <div className="info">
          <h2 className="info-name">{data.name}</h2>
          <p className="info-phone">{data.phone}</p>
          <p className="info-email">{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

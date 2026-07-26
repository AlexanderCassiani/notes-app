import "./features.css";

const Features = ({ icon, title, description }) => {
  return (
    <div className="feature-container">
      <img src={icon} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Features;

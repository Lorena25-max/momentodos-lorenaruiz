import "./Card.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-img"></div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
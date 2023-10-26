function ActivityCard({ img = "", title, description, price }) {
  return (
    <div>
      <img src={img} alt={title + " example"} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ActivityCard;

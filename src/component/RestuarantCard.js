const RestuarantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
}) => {
  // const { restuarantInfo } = props; //destructing data from props passes through body component
  // console.log(name, cuisines, avgRating, cloudinaryImageId);
  return (
    <>
      <div className="card">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="resImg"
        />
        <div className="cardInfo">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <p>
            <span className="rating"> {avgRating} ⭐</span>
            <span>{costForTwo}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RestuarantCard;

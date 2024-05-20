import Profile from "./assets/photo.avif"

function Card() {
  return (
    <div className="card">
      <img
        src={Profile}
        alt="profile picture"
        className="card-image"
      />
      <h2 className="card-title">Bro Code</h2>
      <p className="card-text">レストランでコーヒーを飲んでITを勉強して</p>
    </div>
  );
}

export default Card;

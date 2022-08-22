function Card({ item, cartitem, handleAddToCart }) {
  return (
    <div className="col-lg-4 mb-2">
      <div className="card" style={{ width: "17rem" }}>
        <img
          src="https://picsum.photos/200/300"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.price}</p>
          <button
            disabled={cartitem.some((obj) => obj.id === item.id)}
            onClick={() => {
              handleAddToCart(item);
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;

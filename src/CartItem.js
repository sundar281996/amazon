function CartItem({ cartitem, removeCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{cartitem.title}</div>
        {cartitem.price}
      </div>
      <button
        onClick={() => {
          removeCart(cartitem);
        }}
        className="badge bg-primary rounded-pill"
      >
        X
      </button>
    </li>
  );
}
export default CartItem;

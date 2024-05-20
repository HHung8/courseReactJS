import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("学ぶ");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShiping] = useState("");

  function handleSubmit(e) {
    setName(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleSetComment(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShiping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleSubmit} />
      <p>Name: {name} </p>
      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>Number: {quantity}</p>
      <textarea
        value={comment}
        placeholder="Enter check your Textarea"
        onChange={handleSetComment}
      />
      <p>Comment: {comment} </p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">MasterCard</option>
        <option value="GiftCard">GiftCar</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        PickUp
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;

// import styles from "./Buttom.module.css"

function Button() {
  const button = {
    backgroundColor: " hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={button}>Click me</button>
    </div>
  );
}

export default Button;

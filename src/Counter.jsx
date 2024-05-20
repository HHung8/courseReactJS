import { useState } from "react";
import { sculptureList } from "./CounterData";

function Counter() {
  const [name, setName] = useState("YushingDev");
  const [age, setAge] = useState(0);
  const [isPloyment, setIsPloyment] = useState(false);
  const [showed, setShowed] = useState(false);
  const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const result = () => {
  //     setCount(0);
  //   };

  //   const updateName = () => {
  //     setName("グエンフーフン");
  //   };
  //   const updateAge = () => {
  //     setAge(age + 1);
  //   };
  //   const updateDeployment = () => {
  //     setIsPloyment(!isPloyment);
  //   };
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  function handleClick() {
    setIndex((prevIndex) => (prevIndex >= 4 ? 0 : prevIndex + 1));
  }
  function handleShowMore() {
    setShow(!show);
  }
  let scuplture = sculptureList[index];
  return (
    <div>
      {/* <>
        <p>Name: {name}</p>
        <button onClick={updateName}>SetName</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Update age</button>
        <p>Is employed: {isPloyment ? "Correct" : "Error"}</p>
        <button onClick={updateDeployment}>Increment Age</button>
      </>
      <>
        <div className="counter-container">
          <p className="counter-display">{count}</p>
          <button className="counter-button" onClick={decrement}>
            Decrement
          </button>
          <button className="counter-button" onClick={result}>
            Reset
          </button>
          <button className="counter-button" onClick={increment}>
            Increment
          </button>
        </div>
      </> */}
      <>
        <button onClick={handleClick}>Next</button>
        <h2>
          <i> {scuplture.name} </i>
          by {scuplture.artist}
        </h2>
        <h3>
          {index + 1} of {sculptureList.length}{" "}
        </h3>
        <button onClick={handleShowMore}>{show ? "Hide" : "Show"}</button>
        {show && <p>{scuplture.description}</p>}
        <img src={scuplture.url} alt={scuplture.alt} />
      </>
    </div>
  );
}

export default Counter;

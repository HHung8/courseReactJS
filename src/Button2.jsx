// const Button2 = () => {
//   //   const handleClick = () => alert("You look smile so pretty");
//   //   const handleClick2 = (name) => console.log(`${name} you look so beautify`);
//   //   let count = 0;
//   //   const handleClick3 = (name) => {
//   //     if (count < 3) {
//   //       count++;
//   //       console.log(`${name} you click me ${count} / times`);
//   //     } else {
//   //       console.log(`Hey ${name} stopping click me was max count!`);
//   //     }
//   //   };

// //   const handleClick = (e) => (e.target.textContent = "ITを勉強てる 📚");
//     // const handleClick = (e) => e.target.display = 'none';
//   return (
//     <div>
//       {/* <button onClick={(e) => handleClick   (e)}>OnClick Me 😄</button> */}
//     </div>
//   );
// };

// export default Button2;


function Button2() {
    const handleClick = (e) => e.target.style.display = 'none'
    const imageUrl =
    "https://images.unsplash.com/photo-1459245330819-1b6d75fbaa35?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return <img src={imageUrl} alt="imgPhoto" width="160px" height="160px" onClick={(e) => handleClick(e)} />;
}

export default Button2;

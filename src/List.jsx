import PropTypes from "prop-types";
function List(props) {
  //   const fruits = [
  //     { id: 0, name: "Apple", calories: 95 },
  //     { id: 1, name: "Banana", calories: 160 },
  //     { id: 2, name: "Mango", calories: 80 },
  //     { id: 3, name: "Coconut", calories: 190 },
  //     { id: 4, name: "Pinesap", calories: 200 },
  //   ];
  //   fruits.sort((a,b) => a.name.localeCompare(b.name)) // dùng để so sánh hai chuỗi // Theo bảo chữ cái
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Đảo ngược bảng chữ cái
  //   fruits.sort((a, b) => a.calories - b.calories); // Sắp xếp theo thứ tự tăng dần
  //   fruits.sort((a, b) => b.calories - a.calories); // Sắp xếp theo thứ tự giảm dần

  //   const localFruits = fruits.filter((nameFruits) => nameFruits.calories < 100);
  //   const hightFruits = fruits.filter((nameFruits) => nameFruits.calories >= 100)
  //   const listName = fruits.map((fruit) => {
  //     return (
  //       <li key={fruit.id}>
  //         {fruit.name}: &nbsp; <b>{fruit.calories}</b>
  //       </li>
  //     );
  //   });
  //   const localFruitsName = hightFruits.map((fruit) => {
  //     return (
  //       <li key={fruit.id}>
  //         {fruit.name}: &nbsp: <b>{fruit.calories}</b>
  //       </li>
  //     );
  //   });

  const idealist = props.items;
  const category = props.category;

  const lisItems = idealist.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      {/* <h3>All Fruits</h3>
      <ol>{listName}</ol>
      <h3>Local Fruits</h3>
      <ol>{localFruitsName}</ol> */}
      <h2 className="list-category"> Welcome: {category}</h2>
      <ol className="list-item">{lisItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "ITを勉強してる頑張りましょう",
  items: [],
};

export default List;

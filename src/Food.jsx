function Food() {
  const food1 = "Orate1";
  const food2 = "Banana1";
  const people = [
    {
      id: 0,
      name: "Creole Katherine Johnson",
      profession: "chemist",
    },
    {
      id: 1,
      name: "あのに日本語を勉強してる頑張りましょう",
      profession: "赤ちゃん",
    },
    {
      id: 2,
      name: "I'm studying English and IT and Japanese",
      profession: "Hung",
    },
  ];
  const listItem = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));
  return (
    <ul>
      <li>{food1}</li>
      <li>{food2}</li>
      <li>{listItem}</li>
    </ul>
  );
}

export default Food;

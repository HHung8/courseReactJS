// import Footer from "./Footer";
// import Header from "./Header";
// import Food from "./Food";
// import Card from "./Card";
// import Button from "./Button/Button";
// import List from "./Profile/Name";
// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  const fruits = [
    { id: 0, name: "Apple", calories: 95 },
    { id: 1, name: "Banana", calories: 160 },
    { id: 2, name: "Mango", calories: 80 },
    { id: 3, name: "Coconut", calories: 190 },
    { id: 4, name: "Pinesap", calories: 200 },
  ];
  const it = [
    { id: 0, name: "NextJS", calories: "900$" },
    { id: 1, name: "ReactJS", calories: "900$" },
    { id: 2, name: "ReactNative", calories: "1000$" },
    { id: 3, name: "Postgres", calories: "800$" },
    { id: 4, name: "PHP", calories: "700$" },
  ];
  return (
    <>
      {/* <Header />
      <Food />
      <Button />
      <List />
      <Card />
      <Footer /> */}
      {/* <Student name="グエンフーふん" age={22} isStudent={true} />
      <Student name="赤ちゃん" age={24} isStudent={false} />
      <Student name="おかね" age={23} isStudent={true} />
      <Student name="あかね" age={21} isStudent={true} />
      <Student name="NameSpace" /> */}
      {/* <UserGreeting isLoggedIn={false} username="Brocode YushingDev" />
      <UserGreeting /> */}

      {/* <List items={fruits} category = "Fruits" />
      <List items={it} category="Course IT Full" /> */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {it.length > 0 && <List items={it} category="ItCourse" />}
      <List />
    </>
  );
}

export default App;

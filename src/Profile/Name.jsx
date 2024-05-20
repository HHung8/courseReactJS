import { people } from "./data";
import styles from "./name.module.css"

export default function ListName() {
  const lisItems = people.map((person) => (
    <li key={person.id}>
      <img src={person.imageId} alt={person.name} className={styles.peopleImage} />
      <p>
        <b>{person.name}</b> {" " + person.profession + ""} know for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <div>
      <ul>{lisItems}</ul>
    </div>
  );
}

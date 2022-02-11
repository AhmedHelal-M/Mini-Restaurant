import list from "../data";
import Cards from "./card";
import "../styles/restaurant.css";

const Restaurant = ({ handleClick, dark }) => {
  return (
    <div className={`${dark ? "dark" : ""} `}>
      <section>
        {list.map((item) => (
          <Cards dark={dark} key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
};

export default Restaurant;

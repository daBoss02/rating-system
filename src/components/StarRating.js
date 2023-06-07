import Star from "./Star";
import { useState } from "react";

function StarRating () {
  const [rating, setRating] = useState(0);
  const [index, setIndex] = useState(1);

  const arr = [...Array(5)];
  const words = ['Terrible', 'Not Great', 'Meh', 'Okay', 'Excellent'];

  function ClickHandler(event) {
    let id = event.currentTarget.id;
    setRating(id);
    let num = parseInt(id) - 1;
    setIndex(num);
  }
  

  return (
    <section className="ratingBox">
      <h1 className="stars flex">
        {arr.map((star, index) => {
          index += 1;
          return (
            <Star
            id={index}
            class={index <= (rating) ? "yellow" : null}
            clickHandler={ClickHandler}
          />
          )
        })}
      </h1>
      <h2 className="descr">{words[index]}</h2>
    </section>
  );
}

export default StarRating;
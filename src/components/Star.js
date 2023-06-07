import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <FaStar className={`${props.class} star`} id={props.id} onClick={props.clickHandler}/>
  )
}

export default Star;
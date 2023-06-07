import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <div className="star">
      <FaStar className="yellowStar" onClick={props.select}/>
    </div>
  )
}

export default Star;
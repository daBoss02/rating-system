
function Button(props) {
  return (
    <button onClick={props.click} className="openDialog">
      {props.text}
    </button>
  )
}

export default Button;
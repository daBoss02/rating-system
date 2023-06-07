

function Dialog(props) {
    return (
    <dialog open={props.open}>
      <h3>This is a Dialog box</h3>
      <p>It has a lot of interesting text. Trust me it's very interesting.
        Just kidding it's random text that just needs to be closed.
      </p>
      <button onClick={props.click}>Close</button>
    </dialog>)
}

export default Dialog;
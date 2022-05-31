window.SampleButton = function SampleButton(props) {
  return (
    <button className='sample-button' onClick={props.onClick}>
      {props.text}
    </button>
  );
}

const CounterControls = (props) => {
  return (
    <>
      <button className="btn btn-light btn-lg mr-2" onClick={props.change}>
        {props.value}
      </button>
    </>
  );
};

export default CounterControls;

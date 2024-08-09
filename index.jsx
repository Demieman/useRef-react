import { useEffect, useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef(null);
  const inputRefElement = useRef(null);

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    if (divElementRef.current && inputRefElement.current) {
      divElementRef.current.style.color = "red";
      inputRefElement.current.focus();

      setTimeout(() => {
        divElementRef.current.style.color = "green";

        setTimeout(() => {
          divElementRef.current.style.color = "blue";
        }, 1000);
      }, 2000);

      console.log(divElementRef.current);
    }
  }, []);

  return (
    <div>
      <h3>use ref, use callback and use memo hook</h3>
      <div ref={divElementRef}>some random text</div>
      <input
        name="name"
        placeholder="Enter your name"
        ref={inputRefElement}
      />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default Hooks;
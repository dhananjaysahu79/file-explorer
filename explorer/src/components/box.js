import { useState } from "react";

const Box = (props) => {
  const [isHover, setHover] = useState(false);
  let value = props.data.toString()
  let arr = value.split('')
  let newString = arr.slice(10, arr.length - 1).join('')

  return (
    <div
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
      style={{
        width: "300px",
        height: "40px",
        background: "#f5f5f5",
        borderRadius: "5px",
        margin: "15px",
        padding: "8px",
        display: "flex",
        fontWeight: "450",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: 'pointer'
      }}
    >
      <p>{props.data}</p>
      <div
        className="square-box"
        style={{
          height: "35px",
          width: "35px",
          borderRadius: "3px",
          background: "blue",
          cursor: "pointer",
          transform: isHover 
            ? newString
            : '',
          transition: "all 0.5s ease-out"
        }}
      ></div>
    </div>
  );
};
export default Box;
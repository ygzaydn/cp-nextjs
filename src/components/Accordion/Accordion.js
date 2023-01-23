import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "25px",
        lineHeight: "30px",
        boxShadow: "0px 7px 29px 0px rgba(209, 213, 219, 0.5)",
        border: "0px solid rgba(209, 213, 219, 0.5)",
        borderRadius: "10px"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "30px 25px 10px",
          border: "none",
          borderRadius: "10px",
          background: "white",
          outline: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "0px 25px 30px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
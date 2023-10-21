const Error = ({ children }) => {
  return (
    <div
      style={{
        color: "#ff0000",
        backgroundColor: "#ffe6e6",
        border: "1px solid #ff0000",
        padding: "10px",
        // margin: "10px 0",
        width: "60%",
        textAlign: "center",
        fontSize: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default Error;

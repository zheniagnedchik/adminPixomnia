import React from "react";
import { useRecordContext } from "react-admin";
import "./style.css";

const PurpleTextField = ({ field, label }) => {
  const record = useRecordContext();
  console.log(record);
  return (
    <div className="container">
      <div className="textId">{record[field]}</div>
      <div className="idBlock">
        <div
          style={{
            color: "#000",
            fontWeight: "bold",
            fontSize: 8,
            textAlign: "center",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default PurpleTextField;

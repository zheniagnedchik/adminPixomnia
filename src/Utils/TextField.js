import React from "react";
import { useRecordContext } from "react-admin";
import "./style.css";

const PurpleTextField = ({ field, label }) => {
  const record = useRecordContext();

  console.log(record);
  return (
    <div className="container">
      <div>{record.imageRects.length}</div>
    </div>
  );
};

export default PurpleTextField;

import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useRecordContext } from "ra-core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const test = [];
const Links = (props) => {
  const record = useRecordContext();
  console.log(record);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    document.location.href = event.target.value;
  };
  return (
    <div style={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Table web links</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Table web links"
          onChange={handleChange}
        >
          {record.tablesInfo.map((item, index) => (
            <MenuItem value={item.value}>{item.key}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Links;

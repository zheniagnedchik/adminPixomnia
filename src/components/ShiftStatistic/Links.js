import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useRecordContext } from "ra-core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
const test = [];
const Links = (props) => {
  const record = useRecordContext();
  const [age, setAge] = React.useState("");
  const handleChange = async (event) => {
    console.log(event.target.value);
    props.setUrls(event.target.value);

    // document.location.href = event.target.value;
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
            <MenuItem value={item.imageUrls}>
              {item.timeCaption}({item.numberOfPhotos})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Links;

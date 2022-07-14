import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  SingleFieldList,
  ChipField,
  ReferenceArrayField,
  ArrayField,
  FilterButton,
  TextInput,
  FilterForm,
  CreateButton,
  FilterList,
  FilterListItem,
  SelectInput,
  SimpleForm,
  SaveButton,
} from "react-admin";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import axios from "axios";
import { URI } from "../URLS";

const FilterShifts = (props) => {
  const [regions, setRegions] = useState([]);
  const [places, setPlaces] = useState(false);
  const [place, setPlace] = useState("");
  console.log("regions", regions);
  useEffect(() => {
    axios
      .get(`${URI}/getRegions?employeeId=admin@pixomnia.com`)
      .then((data) => {
        console.log(data);
        const reg = data.data.map((item) => {
          return { id: item.regionId, name: item.regionId };
        });
        setRegions(reg);
      });
  }, [setRegions]);

  const RegionFilter = () => {
    return (
      <FilterList label="Places" defaultValue={{ region: "TX" }}>
        {places.map((item) => (
          <FilterListItem
            label={item.placeId}
            value={{ place: item.placeId }}
          />
        ))}
      </FilterList>
    );
  };
  const getPlaces = (item) => {
    console.log(item);
    setPlace(item);
    axios
      .get(
        `${URI}/getPlacesWithInfo?employeeId=admin@pixomnia&regionId=${item}`
      )
      .then((data) => setPlaces(data.data));
  };
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        order: -1, // display on the left rather than on the right of the list
        width: "15em",
        marginRight: "1em",
        marginTop: "4em",
      }}
    >
      <Card>
        <CardContent>
          {/* <SelectInput
              source="regionId"
              choices={regions}
              onChange={(i) => getPlaces(i.target.value)}
            /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Places</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={place}
              label="Places"
              onChange={(i) => getPlaces(i.target.value)}
            >
              {regions.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {places && <RegionFilter />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilterShifts;

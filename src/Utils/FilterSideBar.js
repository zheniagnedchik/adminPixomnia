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
} from "react-admin";
import { Box, Card, CardContent, styled } from "@mui/material";
import axios from "axios";
import { URI } from "../URLS";
const RegionFilter = () => {
  const [region, setRegion] = useState([]);
  useEffect(() => {
    axios
      .get(`${URI}/getRegions?employeeId=admin@pixomnia.com`)
      .then((data) => {
        setRegion(data.data);
      });
  }, [setRegion]);
  console.log(region);
  return (
    <FilterList label="Regions" defaultValue={{ region: "TX" }}>
      {region.map((item, index) => (
        <FilterListItem
          label={item.regionId}
          value={{ region: item.regionId }}
          key={index}
        />
      ))}
    </FilterList>
  );
};

const FilterSideBar = (props) => {
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
          <RegionFilter />
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilterSideBar;

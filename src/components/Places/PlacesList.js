import React from "react";
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
import FilterSideBar from "../../Utils/FilterSideBar";

const PlacesList = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid rowClick="edit" width={"80%"} rowClick="show">
        <TextField source="regionId" label="Region" />
        <TextField source="placeId" label="Place" />
        <TextField source="name" label="Place name" />
        <TextField source="tierId" label="Tier" />
        <TextField source="hourTarget" label="Hour target" />
        <ArrayField source="newList" label="Printers">
          <SingleFieldList>
            <ChipField source="item" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="employee" label="Employees">
          <SingleFieldList>
            <ChipField source="item" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="timeZoneId" label="Time zone " />
        <TextField source="latitude" label="Latitude" />
        <TextField source="longitude" label="Longitude" />
        <TextField source="radius" label="Radius" />
        <EditButton />
        {/* <EditButton basePath="/printers" />
        <DeleteButton basePath="/printers" /> */}
      </Datagrid>
    </List>
  );
};

export default PlacesList;

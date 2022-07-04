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
} from "react-admin";

const PlacesList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="regionid" label="Region" />
        <TextField source="placeId" label="Place id" />
        <TextField source="name" label="Place name" />
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

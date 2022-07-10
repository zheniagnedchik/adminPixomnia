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

const OnePrintInventoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="firmware" label="firmware" />
        <TextField source="lifeCounter" label="lifeCounter" />
        <TextField source="logTime" label="logTime" />
        <TextField source="mediaRemaining" label="mediaRemaining" />
        <TextField source="printerName" label="printerName" />
        <TextField source="serialNumber" label="serialNumber" />
        <TextField source="status" label="status" />
      </Datagrid>
    </List>
  );
};

export default OnePrintInventoryList;

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";
import OnePrintInventoryList from "../Inventory/OnePrintInventoryList";

const PrinterList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="printerId" label="Printer name" />
        <TextField source="regionId" label="Region Name" />
      </Datagrid>
    </List>
  );
};

export default PrinterList;

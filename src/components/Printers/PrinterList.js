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
import FilterSideBar from "../../Utils/FilterSideBar";

const PrinterList = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid rowClick="show">
        <TextField source="printerId" label="Printer name" />
        <TextField source="regionId" label="Region Name" />
      </Datagrid>
    </List>
  );
};

export default PrinterList;

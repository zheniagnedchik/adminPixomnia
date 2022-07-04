import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

const PrinterList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <TextField source="printerId" label="Printer name" />
        <TextField source="regionId" label="Region Name" />
        {/* <EditButton basePath="/printers" />
        <DeleteButton basePath="/printers" /> */}
      </Datagrid>
    </List>
  );
};

export default PrinterList;

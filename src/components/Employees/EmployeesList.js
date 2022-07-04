import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

const EmployeesListList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <TextField source="regionId" label="Region" />
        <TextField source="email" label="Email" />
        <TextField source="firstName" label="First Name" />
        <TextField source="lastName" label="Last Name" />

        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export default EmployeesListList;

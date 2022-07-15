import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";

const EmployeesListList = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid rowClick="edit">
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

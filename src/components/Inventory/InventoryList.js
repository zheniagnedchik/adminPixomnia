import React from "react";
import { List, TextField, Datagrid, DateField } from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";

const InventoryList = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid>
        <TextField source="employeeId" />
        <TextField source="placeId" />
        <TextField source="printerId" />
        <TextField source="printerLifeCounter" />
        <TextField source="printerMediaCounter" />
        <TextField source="blackFrames" />
        <TextField source="printerMediaInRolls" />
        <TextField source="reportType" />
        <DateField source="timeLog" showTime locales="en-US" />
      </Datagrid>
    </List>
  );
};

export default InventoryList;

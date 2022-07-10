import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

const ShiftScheduleListList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="shiftScheduleId" label="Shift Schedule Id" /> */}
        <TextField source="placeId" label="Place Id" />
        <TextField source="employeeId" label="Employee Id" />
        <DateField
          source="startTime"
          label="Start Time"
          showTime
          locales="en-US"
        />
        <DateField source="endTime" label="End Time" showTime locales="en-US" />
        <TextField source="softStartInMinutes" label="Soft Start In Minutes" />
        <TextField source="softEndInMinutes" label="Soft End In Minutes" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ShiftScheduleListList;

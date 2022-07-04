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
        <TextField source="shiftScheduleId" label="Shift Schedule Id" />
        <TextField source="placeId" label="Place Id" />
        <TextField source="employeeId" label="Employee Id" />
        <TextField source="startTime" label="Start Time" />
        <TextField source="endTime" label="End Time" />
        <TextField source="softStartInMinutes" label="Soft Start In Minutes" />
        <TextField source="softEndInMinutes" label="Soft End In Minutes" />
      </Datagrid>
    </List>
  );
};

export default ShiftScheduleListList;

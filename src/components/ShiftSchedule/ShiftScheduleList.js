import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  WrapperField,
} from "react-admin";
import FilterShifts from "../../Utils/FilterShifts";
import PurpleTextField from "../../Utils/TextField";

const ShiftScheduleListList = (props) => {
  return (
    <List {...props} aside={<FilterShifts />}>
      <Datagrid>
        <PurpleTextField field={"shiftScheduleId"} label={"Schedule id"} />

        {/* <TextField source="shiftScheduleId" label="Shift Schedule Id" /> */}
        <TextField source="placeId" label="Place" />
        <TextField source="employeeId" label="Employee" />
        <DateField
          source="startTime"
          label="Start time"
          showTime
          locales="en-US"
        />
        <DateField source="endTime" label="End Time" showTime locales="en-US" />
        <TextField source="softStartInMinutes" label="Soft start in minutes" />
        <TextField source="softEndInMinutes" label="Soft end in minutes" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ShiftScheduleListList;

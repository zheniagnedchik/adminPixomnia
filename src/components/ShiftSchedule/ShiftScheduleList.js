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
  TextInput,
  DateTimeInput,
  SimpleForm,
  useRecordContext,
} from "react-admin";
import { Calendar, CompleteCalendar } from "@react-admin/ra-calendar";
import FilterShifts from "../../Utils/FilterShifts";
import PurpleTextField from "../../Utils/TextField";
import { Tooltip } from "@mui/material";

const EventContent = (event) => {
  console.log("event", event);
};
const converter = (event) => ({
  id: String(event.id),
  title: event.employeeId,
  start: event.startTime,
  end: event.endTime,
});
const ShiftScheduleListList = (props) => {
  const Tool = () => {
    const record = useRecordContext();
    return (
      <Tooltip title={record.shiftScheduleId}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 100,
            backgroundColor: "#3a95e8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          i
        </div>
      </Tooltip>
    );
  };
  return (
    <List
      {...props}
      aside={<FilterShifts />}
      queryOptions={{ meta: { type: "list" } }}
    >
      {/* <Calendar convertToEvent={converter} /> */}

      <Datagrid>
        <Tool />
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

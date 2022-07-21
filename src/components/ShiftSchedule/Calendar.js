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
} from "react-admin";
import { Calendar, CompleteCalendar } from "@react-admin/ra-calendar";
import FilterShifts from "../../Utils/FilterShifts";
import PurpleTextField from "../../Utils/TextField";

const EventContent = (event) => {
  console.log("event", event);
};
const converter = (event) => ({
  id: String(event.id),
  title: event.employeeId,
  start: event.startTime,
  end: event.endTime,
});
const CalendarShift = (props) => {
  return (
    <List {...props} aside={<FilterShifts />} resource="getShiftSchedule">
      <Calendar convertToEvent={converter} />
    </List>
  );
};

export default CalendarShift;

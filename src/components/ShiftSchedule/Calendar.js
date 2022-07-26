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
import esLocale from "@fullcalendar/core/locales/es";

const EventContent = (event) => {
  console.log("event", event);
};
const getColor = (event) => {
  const time = new Date(event.startTime).getHours();
  if (time > 15) {
    return "#e8cc3a";
  } else {
    return "#3a95e8";
  }
};
const getTextColor = (event) => {
  const time = new Date(event.startTime).getHours();
  if (time > 15) {
    return "black";
  } else {
    return "#fff";
  }
};
const converter = (event) => ({
  id: String(event.id),
  title: event.employeeId,
  start: event.startTime,
  end: event.endTime,
  display: "block",
  backgroundColor: getColor(event),
  color: "black",
  textColor: getTextColor(event),
  description: { start: event.startTime, end: event.endTime },
});
const getStart = (date) => {
  const time = new Date(date).toLocaleTimeString("en-US");
  console.log(time);
  return time;
};
const CalendarShift = (props) => {
  return (
    <List
      {...props}
      aside={<FilterShifts />}
      resource="getShiftSchedule"
      queryOptions={{ meta: { type: "calendar" } }}
      perPage={1000}
      pagination={false}
    >
      <Calendar
        select={false}
        convertToEvent={converter}
        eventClick={(e) => console.log(e)}
        eventContent={(eventContent) => {
          console.log(eventContent);
          return (
            <>
              <div style={{ fontSize: 12 }}>
                <b>
                  {getStart(
                    eventContent.event._def.extendedProps.description.start
                  )}
                  -
                  {getStart(
                    eventContent.event._def.extendedProps.description.end
                  )}
                </b>
              </div>
              <div style={{ fontSize: 12 }}>{eventContent.event.title}</div>
            </>
          );
        }}
      />
    </List>
  );
};

export default CalendarShift;

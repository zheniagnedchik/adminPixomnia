import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  SelectInput,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";
import axios from "axios";
import { URI } from "../../URLS";

const ShiftScheduleListCreate = (props) => {
  const [placeId, setPlace] = useState([]);
  const [employeeId, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get(`${URI}/getPlacesWithInfo?employeeId=reload&regionId=TX`)
      .then((data) => {
        console.log(data);
        const place = data.data.map((item) => {
          return { id: item.placeId, name: item.placeId };
        });
        setPlace(place);
      });
  }, [setPlace]);
  useEffect(() => {
    axios
      .get(`${URI}/getEmployees?employeeId=reload&regionId=TX`)
      .then((data) => {
        console.log(data);
        const employee = data.data.map((item) => {
          return { id: item.email, name: item.email };
        });
        setEmployee(employee);
      });
  }, [setPlace]);
  console.log("knjbvgfcghj", placeId);
  const shiftManager = [
    { id: true, name: true },
    { id: false, name: false },
  ];
  return (
    <Create
      title="Create a shift"
      {...props}
      resource="addShiftSchedule"
      redirect="/getShiftSchedule"
    >
      <SimpleForm>
        <SelectInput source="placeId" choices={placeId} label="PlaceId" />

        <SelectInput
          source="employeeId"
          choices={employeeId}
          label="EmployeeId"
        />

        <DateTimeInput source="startTime" label="Start shift" />
        <DateTimeInput source="endTime" label="End shift" />
        <NumberInput
          source="softStartInMinutes"
          label="Soft Start In Minutes"
        />
        <NumberInput source="softEndInMinutes" label="Soft End In Minutes" />
        <SelectInput
          source="shiftManager"
          choices={shiftManager}
          label="shiftManager"
        />
      </SimpleForm>
    </Create>
  );
};

export default ShiftScheduleListCreate;

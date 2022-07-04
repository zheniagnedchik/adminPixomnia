import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  NumberInput,
  Edit,
} from "react-admin";

const EmployeesEdit = (props) => {
  const [regions, setRegions] = useState([]);
  console.log("regions", regions);
  useEffect(() => {
    axios
      .get(
        "http://dev-api-v1.pixomnia.com:8087/getPlacesWithInfo?employeeId=reload&regionId=TX"
      )
      .then((data) => {
        const reg = data.data.map((item) => {
          return { id: item.placeId, name: item.placeId };
        });
        setRegions(reg);
      });
  }, [setRegions]);
  return (
    <Edit
      title="Create a place"
      //   resource="linkEmployeeAndPlace"
      {...props}
      //   resource="addEmployee"
      //   redirect="/getEmployees"
    >
      <SimpleForm>
        <TextInput source="email" label="Email" disabled />
        <TextInput source="firstName" label="First Name" disabled />
        <TextInput source="lastName" label="Last Name" disabled />
        <SelectInput source="placeId" choices={regions} label="Place id" />
      </SimpleForm>
    </Edit>
  );
};

export default EmployeesEdit;

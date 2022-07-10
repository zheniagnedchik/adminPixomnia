import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { URI } from "../../URLS";
const EmployeesCreate = (props) => {
  const [regions, setRegions] = useState([]);
  console.log("regions", regions);
  useEffect(() => {
    axios
      .get(`${URI}/getRegions?employeeId=admin@pixomnia.com`)
      .then((data) => {
        const reg = data.data.map((item) => {
          return { id: item.regionId, name: item.regionId };
        });
        setRegions(reg);
      });
  }, [setRegions]);
  return (
    <Create
      title="Create a employee"
      {...props}
      resource="addEmployee"
      redirect="/getEmployees"
    >
      <SimpleForm>
        <SelectInput source="regionId" choices={regions} label="Region id" />
        <TextInput source="email" label="Email" />
        <TextInput source="firstName" label="First Name" />
        <TextInput source="lastName" label="Last Name" />
      </SimpleForm>
    </Create>
  );
};

export default EmployeesCreate;

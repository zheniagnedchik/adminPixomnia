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
import { URI } from "../../URLS";

const EmployeesEdit = (props) => {
  const [regions, setRegions] = useState([]);
  console.log("regions", regions);
  useEffect(() => {
    axios
      .get(`${URI}/getPlacesWithInfo?employeeId=admin@pixomnia&regionId=TX`)
      .then((data) => {
        const reg = data.data.map((item) => {
          return { id: item.placeId, name: item.placeId };
        });
        setRegions(reg);
      });
  }, [setRegions]);
  const useImport = [
    { id: true, name: true },
    { id: false, name: false },
  ];
  const categories = [
    { name: "Tech", id: "tech" },
    { name: "Lifestyle", id: "lifestyle" },
  ];
  return (
    <Edit
      title="Create a place"
      //   resource="linkEmployeeAndPlace"
      {...props}

      //   redirect="/getEmployees"
    >
      <SimpleForm>
        <TextInput source="email" label="Email" disabled />
        <TextInput source="firstName" label="First Name" disabled />
        <TextInput source="lastName" label="Last Name" disabled />

        <SelectInput
          source="canUseImport"
          choices={useImport}
          label="Can use import"
        />
      </SimpleForm>
    </Edit>
  );
};

export default EmployeesEdit;

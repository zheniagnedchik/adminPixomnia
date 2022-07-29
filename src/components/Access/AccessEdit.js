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
  SelectArrayInput,
} from "react-admin";
import { URI } from "../../URLS";

const AccessEdit = (props) => {
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
    <Edit
      title="Create a place"
      //   resource="linkEmployeeAndPlace"
      {...props}
      //   resource="addEmployee"
      //   redirect="/getEmployees"
    >
      <SimpleForm>
        <SelectArrayInput source="regions" choices={regions} />
        <TextInput source="email" title="Email" />
        <TextInput source="role" title="Role" disabled />
        <TextInput source="note" title="Note" />
        <TextInput source="active" label="Active" />
      </SimpleForm>
    </Edit>
  );
};

export default AccessEdit;

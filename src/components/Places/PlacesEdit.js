import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SimpleForm,
  SelectInput,
  ArrayInput,
  Edit,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import { URI } from "../../URLS";

const PlacesEdit = (props) => {
  const [printerId, setPrinterId] = useState([]);
  const [employeeId, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get(`${URI}/getPrinters?employeeId=reload&regionId=TX`)
      .then((data) => {
        console.log(data);
        const printer = data.data.map((item) => {
          return { id: item.printerId, name: item.printerId };
        });
        setPrinterId(printer);
      });
  }, [setPrinterId]);
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
  }, [setEmployee]);

  return (
    <Edit
      title="Create a place"
      //   resource="linkEmployeeAndPlace"
      {...props}
      //   resource="addEmployee"
      //   redirect="/getEmployees"
    >
      <SimpleForm>
        <ArrayInput source="newList" label="Linled printer">
          <SimpleFormIterator>
            <SelectInput source="item" choices={printerId} label="PrinterId" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="employee" label="Linked employee">
          <SimpleFormIterator>
            <SelectInput
              source="item"
              choices={employeeId}
              label="EmployeeId"
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default PlacesEdit;

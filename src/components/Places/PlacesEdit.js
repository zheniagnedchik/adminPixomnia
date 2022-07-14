import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SimpleForm,
  SelectInput,
  ArrayInput,
  Edit,
  SimpleFormIterator,
  TextInput,
  useRecordContext,
} from "react-admin";
import { useSelector } from "react-redux";
import { URI } from "../../URLS";

const PlacesEdit = (props) => {
  const [printerId, setPrinterId] = useState([]);
  const [employeeId, setEmployee] = useState([]);
  const record = useRecordContext();
  console.log(record);
  const { region } = useSelector((state) => state.region);

  useEffect(() => {
    const link = document.URL.split("-")[0];
    const id = link.substr(link.length - 2);

    axios
      .get(`${URI}/getPrinters?employeeId=reload&regionId=${id}`)
      .then((data) => {
        console.log(data);
        const printer = data.data.map((item) => {
          return { id: item.printerId, name: item.printerId };
        });
        setPrinterId(printer);
      });
  }, [setPrinterId]);
  useEffect(() => {
    const link = document.URL.split("-")[0];
    const id = link.substr(link.length - 2);
    axios
      .get(`${URI}/getEmployees?employeeId=reload&regionId=${id}`)
      .then((data) => {
        console.log(data);
        const employee = data.data.map((item) => {
          return { id: item.email, name: item.email };
        });
        setEmployee(employee);
      });
  }, [setEmployee]);
  console.log("props", props);

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

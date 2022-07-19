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

const PlacesShow = (props) => {
  const [printerId, setPrinterId] = useState([]);
  const [employeeId, setEmployee] = useState([]);
  const record = useRecordContext();
  const [tier, setTier] = useState([]);
  const { region } = useSelector((state) => state.region);

  useEffect(() => {
    const id = document.URL.substring(
      document.URL.indexOf("regid") + 5,
      document.URL.lastIndexOf("regid-")
    );

    axios
      .get(`${URI}/getPrinters?employeeId=admin@pixomnia&regionId=${id}`)
      .then((data) => {
        console.log(data);
        const printer = data.data.map((item) => {
          return { id: item.printerId, name: item.printerId };
        });
        setPrinterId(printer);
      });
  }, [setPrinterId]);
  useEffect(() => {
    const id = document.URL.substring(
      document.URL.indexOf("regid") + 5,
      document.URL.lastIndexOf("regid-")
    );
    axios
      .get(`${URI}/getEmployees?employeeId=admin@pixomnia&regionId=${id}`)
      .then((data) => {
        console.log(data);
        const employee = data.data.map((item) => {
          return { id: item.email, name: item.email };
        });
        setEmployee(employee);
      });
  }, [setEmployee]);

  useEffect(() => {
    axios
      .get(`${URI}/getTierInfo?employeeId=admin@pixomnia.com`)
      .then((data) => {
        console.log(typeof data.data);
        const list = Object.entries(data.data).map((e) => ({ [e[0]]: e[1] }));
        console.log(list);
        const tier = list.map((item) => {
          var key = Object.keys(item);
          return { id: key[0], name: key[0] };
        });

        console.log(tier);

        setTier(tier);
      });
  }, [setTier]);

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

export default PlacesShow;

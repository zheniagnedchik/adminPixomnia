import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";
import { URI } from "../../URLS";

const PrinterCreate = (props) => {
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
      title="Create a printer"
      {...props}
      resource="addPrinter"
      redirect="/getPrinters"
    >
      <SimpleForm>
        <TextInput source="printerId" title="Printer Name" />
        <SelectInput source="regionId" choices={regions} />
      </SimpleForm>
    </Create>
  );
};

export default PrinterCreate;

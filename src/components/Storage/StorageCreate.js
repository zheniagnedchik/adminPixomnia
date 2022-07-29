import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { timeZones } from "../../timeZones";
import { URI } from "../../URLS";

const StorageCreate = (props) => {
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
  const action = [{ id: "Transfer", name: "Transfer" }];
  const type = [
    { id: "Shipper", name: "Shipper" },
    { id: "Storage", name: "Storage" },
    { id: "Place", name: "Place" },
  ];
  return (
    <Create
      title="Create a printer"
      {...props}
      resource="addStorage"
      redirect="/getStorages"
    >
      <SimpleForm>
        <TextInput source="storageId" title="storageId" />
        <SelectInput source="regionId" choices={regions} />
        <SelectInput source="type" choices={type} />
        <SelectInput
          source="timeZoneId"
          choices={timeZones}
          label="Time zone"
        />
        <TextInput source="note" title="Note" />
        <NumberInput source="blackFrames" title="blackFrames" />
        <NumberInput source="media" title="media" />
      </SimpleForm>
    </Create>
  );
};

export default StorageCreate;

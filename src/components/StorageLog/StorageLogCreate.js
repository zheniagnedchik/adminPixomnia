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
import { StorageUri, URI } from "../../URLS";

const StorageLogCreate = (props) => {
  const [regions, setRegions] = useState([]);
  const [storageId, setStorageId] = useState([]);
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
  useEffect(() => {
    axios.get(`${StorageUri}/getStorages`).then((data) => {
      const stor = data.data.map((item) => {
        return { id: item.storageId, name: item.storageId };
      });
      setStorageId(stor);
    });
  }, [setStorageId]);
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
      resource="addStorageLog"
      redirect="/getStorageLogs"
    >
      <SimpleForm>
        <SelectInput source="action" choices={action} />
        <SelectInput source="source" choices={storageId} title="source" />
        <SelectInput
          source="destination"
          choices={storageId}
          title="destination"
        />

        <TextInput source="note" title="note" />
        <NumberInput source="blackFrames" title="blackFrames" />
        <NumberInput source="media" title="media" />
      </SimpleForm>
    </Create>
  );
};

export default StorageLogCreate;

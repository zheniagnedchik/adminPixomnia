import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { StorageUri, URI } from "../../URLS";

const StorageLogCreate = (props) => {
  const [regions, setRegions] = useState([]);
  const [storageId, setStorageId] = useState([]);
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

  const getStorages = (e) => {
    axios
      .get(`${StorageUri}/getStorages?regionId=${e.target.value}`)
      .then((data) => {
        const stor = data.data.map((item) => {
          return { id: item.storageId, name: item.storageId };
        });
        setStorageId(stor);
      });
  };

  const action = [
    { id: "Transfer", name: "Transfer" },
    { id: "Init", name: "Init" },
  ];

  return (
    <Create
      title="Create a printer"
      {...props}
      resource="addStorageLog"
      redirect="/getStorageLogs"
    >
      <SimpleForm>
        <SelectInput
          source="region"
          choices={regions}
          onChange={(e) => getStorages(e)}
        />
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

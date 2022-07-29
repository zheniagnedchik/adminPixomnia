import axios from "axios";
import React, { useEffect, useState } from "react";
import { Create, SimpleForm, TextInput, SelectArrayInput } from "react-admin";
import { URI } from "../../URLS";

const AccessCreate = (props) => {
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
      resource="addAccess"
      redirect="/getAccess"
    >
      <SimpleForm>
        <SelectArrayInput source="regions" choices={regions} />
        <TextInput source="email" title="Email" />
        <TextInput source="role" title="Role" />
        <TextInput source="note" title="Note" />
      </SimpleForm>
    </Create>
  );
};

export default AccessCreate;

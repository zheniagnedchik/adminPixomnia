import axios from "axios";
import React, { useEffect } from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const RegionCreate = (props) => {
  return (
    <Create
      title="create a post"
      {...props}
      resource="addRegion"
      redirect="/getRegions"
    >
      <SimpleForm>
        <TextInput source="regionId" title="Region Name" />
        <TextInput source="note" title="Note" />
      </SimpleForm>
    </Create>
  );
};

export default RegionCreate;

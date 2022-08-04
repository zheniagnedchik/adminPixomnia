import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";

const StorageList = (props) => {
  return (
    <List
      {...props}
      aside={<FilterSideBar />}
      perPage={1000}
      pagination={false}
    >
      <Datagrid rowClick="show">
        <TextField source="regionId" />
        <TextField source="storageId" />
        <TextField source="type" />
        <TextField source="note" />
        <TextField source="blackFrames" />
        <TextField source="media" />
        <TextField source="timeZone" />
      </Datagrid>
    </List>
  );
};

export default StorageList;

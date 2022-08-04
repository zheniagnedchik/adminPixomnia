import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";
const StorageLogList = (props) => {
  return (
    <List
      {...props}
      aside={<FilterSideBar />}
      perPage={1000}
      pagination={false}
    >
      <Datagrid rowClick="edit">
        <TextField source="action" />
        <TextField source="source" />
        <TextField source="destination" />
        <TextField source="blackFrames" />
        <TextField source="media" />
        <DateField source="timeLog" showTime locales="en-US" />
        <TextField source="note" />
      </Datagrid>
    </List>
  );
};

export default StorageLogList;

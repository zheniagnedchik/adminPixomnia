import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  useRecordContext,
} from "react-admin";

// const ListRegion = () => {
//   const record = useRecordContext();
//   console.log(record);
//   return record.regions.map((item, index) => <div key={index}>{item}</div>);
// };
const StorageLogList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="action" label="action" />
        <TextField source="blackFrames" label="blackFrames" />
        <TextField source="media" label="media" />
        <TextField source="destination" label="destination" />

        <TextField source="note" label="note" />
        <TextField source="source" label="source" />
        <TextField source="timeLog" label="timeLog" />
        {/* <ListRegion label={"Regions"} /> */}
      </Datagrid>
    </List>
  );
};

export default StorageLogList;

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
const StorageList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="storageId" label="storageId" />
        <TextField source="regionId" label="regionId" />
        <TextField source="type" label="type" />
        <TextField source="note" label="note" />
        <TextField source="blackFrames" label="blackFrames" />
        <TextField source="media" label="media" />
        <TextField source="timeZone" label="timeZone" />
        {/* <ListRegion label={"Regions"} /> */}
      </Datagrid>
    </List>
  );
};

export default StorageList;

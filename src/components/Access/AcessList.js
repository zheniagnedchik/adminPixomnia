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

const ListRegion = () => {
  const record = useRecordContext();
  console.log(record);
  return record.regions.map((item, index) => <div key={index}>{item}</div>);
};
const AccessList = (props) => {
  return (
    <List {...props} perPage={1000} pagination={false}>
      <Datagrid rowClick="edit">
        <TextField source="email" label="Email" />
        <TextField source="role" label="Role" />
        <TextField source="note" label="Note" />
        <TextField source="active" label="Active" />
        <ListRegion label={"Regions"} />
      </Datagrid>
    </List>
  );
};

export default AccessList;

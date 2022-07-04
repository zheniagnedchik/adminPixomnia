import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  useRecordContext,
  DeleteWithConfirmButton,
} from "react-admin";

const RegionList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <TextField source="regionId" label="Region name" />
        <TextField source="note" label="Note" />
        {/* <DeleteButton label="Delete" /> */}
      </Datagrid>
    </List>
  );
};

export default RegionList;

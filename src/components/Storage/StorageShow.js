import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SimpleForm,
  SelectInput,
  ArrayInput,
  Edit,
  SimpleFormIterator,
  TextInput,
  useRecordContext,
  Show,
  List,
  TextField,
  Datagrid,
} from "react-admin";
import { useSelector } from "react-redux";
import { URI } from "../../URLS";

const StorageShow = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="blackFrames" />
        <TextField source="media" />
        <TextField source="note" />
        <TextField source="regionId" />
        <TextField source="storageId" />
        <TextField source="timeZone" />
        <TextField source="type" />
        {/* <ListRegion label={"Regions"} /> */}
      </Datagrid>
    </List>
  );
};

export default StorageShow;

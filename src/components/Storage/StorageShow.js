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
    <Show>
      <List {...props} perPage={1000} pagination={false}>
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
    </Show>
  );
};

export default StorageShow;

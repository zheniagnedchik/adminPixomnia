import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  ImageField,
} from "react-admin";
import OnePrintInventoryList from "../Inventory/OnePrintInventoryList";
import FilterSideBar from "../../Utils/FilterSideBar";
import PurpleTextField from "../../Utils/TextField";
import FilterShifts from "../../Utils/FilterShifts";

const PostcardList = (props) => {
  return (
    <List {...props} aside={<FilterShifts />}>
      <Datagrid rowClick="edit">
        <ImageField source="url" label="Image" />
        <TextField source="placeId" label="Place" />
        <TextField source="status" label="Status" />
        <TextField source="note" label="Note" />
        <PurpleTextField label="Image rects" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PostcardList;

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  useRecordContext,
} from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";

const WidthField = () => {
  const record = useRecordContext();
  return (
    <div style={{ width: 130 }}>
      <div>{record.note}</div>
    </div>
  );
};

const StorageReport = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid>
        <TextField source="storageId" />
        <TextField source="type" />
        <TextField source="blackFramesStart" />
        <TextField source="blackFramesDelta" />
        <TextField source="blackFramesEnd" />
        <TextField source="mediaStart" />
        <TextField source="mediaDelta" />
        <TextField source="mediaEnd" />

        <TextField source="sold" />
        <NumberField
          source="soldInUsd"
          label="Sold"
          locales="en-US"
          options={{ style: "currency", currency: "USD" }}
        />
        <TextField source="printed" />
        <TextField source="printRequest" />
        <TextField source="blackFramesInventory" />
        <TextField source="mediaInventory" />
        <TextField source="mediaRemaining" />
        <DateField source="timeEnd" showTime locales="en-US" />
        <DateField source="timeStart" showTime locales="en-US" />
        <WidthField label={"Note"} />
      </Datagrid>
    </List>
  );
};

export default StorageReport;

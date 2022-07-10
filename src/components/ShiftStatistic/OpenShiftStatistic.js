import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";
import Label from "../../Utils/Label";

const OpenShiftStatistic = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField
          source="employeeId"
          label={<Label label="Employee Id" />}
          fontSize={11}
        />
        <TextField
          source="printedPhotos"
          label={<Label label="Printed Photos" />}
          fontSize={11}
        />
        <TextField
          source="printedPostcards"
          label={<Label label="Printed Postcards" />}
          fontSize={11}
        />
        <TextField
          source="soldByCard"
          label={<Label label="Sold by card" />}
          fontSize={11}
        />
        <TextField
          source="soldByCash"
          label={<Label label="Sold by cash" />}
          fontSize={11}
        />
        <TextField
          source="soldItems"
          label={<Label label="Sold items" />}
          fontSize={11}
        />
        <TextField
          source="soldItemsSquare"
          label={<Label label="Sold items square" />}
          fontSize={11}
        />
        <TextField
          source="takenPhotos"
          label={<Label label="Taken photos" />}
          fontSize={11}
        />
        <TextField
          source="totalMinutes"
          label={<Label label="Total minutes" />}
          fontSize={11}
        />
        <TextField
          source="totalSoldInUsd"
          label={<Label label="Total sold in usd" />}
          fontSize={11}
        />
        <TextField
          source="totalSoldSquareInUsd"
          label={<Label label="Total sold square in usd" />}
          fontSize={11}
        />
        <TextField
          source="totalTables"
          label={<Label label="Total tables" />}
          fontSize={11}
        />
        <TextField
          source="uploadedFiles"
          label={<Label label="Uploaded Files" />}
          fontSize={11}
        />
        <DateField
          source="clockOutTime"
          label={<Label label="Clock Out Time" />}
          fontSize={11}
          showTime
          locales="en-US"
        />
        <DateField
          source="clockInTime"
          label={<Label label="Clock In Time" />}
          fontSize={11}
          showTime
          locales="en-US"
        />
      </Datagrid>
    </List>
  );
};

export default OpenShiftStatistic;

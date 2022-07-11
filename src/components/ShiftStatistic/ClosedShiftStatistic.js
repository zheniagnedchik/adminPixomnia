import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";
import Label from "../../Utils/Label";

const ClosedShiftStatistic = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="employeeId" label={<Label label="Employee Id" />} />
        <TextField
          source="printedPhotos"
          label={<Label label="Printed Photos" />}
        />
        <TextField
          source="printedPostcards"
          label={<Label label="Printed Postcards" />}
        />
        <TextField source="soldByCard" label={<Label label="Sold by card" />} />
        <TextField source="soldByCash" label={<Label label="Sold by cash" />} />
        <TextField source="soldItems" label={<Label label="Sold items" />} />
        <TextField
          source="soldItemsSquare"
          label={<Label label="Sold items square" />}
        />
        <TextField
          source="takenPhotos"
          label={<Label label="Taken photos" />}
        />
        <TextField
          source="totalMinutes"
          label={<Label label="Total minutes" />}
        />
        <TextField
          source="totalSoldInUsd"
          label={<Label label="Total sold in usd" />}
        />
        <TextField
          source="totalSoldSquareInUsd"
          label={<Label label="Total sold square in usd" />}
        />
        <TextField
          source="totalTables"
          label={<Label label="Total tables" />}
        />
        <TextField
          source="uploadedFiles"
          label={<Label label="Uploaded Files" />}
        />
        <DateField
          source="clockInTime"
          label={<Label label="Clock In Time" />}
          showTime
          locales="en-US"
        />
        <DateField
          source="clockOutTime"
          label={<Label label="Clock Out Time" />}
          showTime
          locales="en-US"
        />
      </Datagrid>
    </List>
  );
};

export default ClosedShiftStatistic;

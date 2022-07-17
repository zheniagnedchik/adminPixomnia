import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";
import Label from "../../Utils/Label";

const OpenShiftStatistic = (props) => {
  return (
    <List {...props} aside={<FilterSideBar />}>
      <Datagrid>
        <TextField source="employeeId" label={<Label label="Employee" />} />
        <TextField source="placeId" label={<Label label="Place" />} />
        <DateField
          source="clockInTime"
          label={<Label label="Clock in time" />}
          showTime
          locales="en-US"
        />
        <TextField
          source="totalMinutes"
          label={<Label label="Total minutes" />}
        />
        <TextField
          source="totalTables"
          label={<Label label="Total tables" />}
        />

        <TextField
          source="takenPhotos"
          label={<Label label="Taken photos" />}
        />
        <TextField
          source="uploadedFiles"
          label={<Label label="Uploaded files" />}
        />
        <TextField
          source="printedPhotos"
          label={<Label label="Printed photos" />}
        />
        <TextField
          source="printedPostcards"
          label={<Label label="Printed postcards" />}
        />
        <TextField source="soldItems" label={<Label label="Sold items" />} />
        <TextField
          source="totalSoldInUsd"
          label={<Label label="Total sold $" />}
        />
        <TextField
          source="soldItemsSquare"
          label={<Label label="Sold items square" />}
        />
        <TextField
          source="totalSoldSquareInUsd"
          label={<Label label="Total sold square $" />}
        />
        <TextField source="soldByCard" label={<Label label="Sold by card" />} />
        <TextField source="soldByCash" label={<Label label="Sold by cash" />} />
      </Datagrid>
    </List>
  );
};

export default OpenShiftStatistic;

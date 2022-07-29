import React, { useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ArrayField,
  SingleFieldList,
} from "react-admin";
import FilterSideBar from "../../Utils/FilterSideBar";
import Label from "../../Utils/Label";
import PurpleTextField from "../../Utils/TextField";
import ImageGalery from "./ImageGalery";
import Links from "./Links";

const OpenShiftStatistic = (props) => {
  const [urls, setUrls] = useState(false);
  return (
    <>
      {urls ? (
        <ImageGalery urls={urls} setUrls={setUrls} />
      ) : (
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
              source="importPhotos"
              label={<Label label="Imported Photo" />}
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
            <TextField
              source="soldItems"
              label={<Label label="Sale requests" />}
            />

            <NumberField
              source="totalSoldInUsd"
              label="Total sold"
              locales="en-US"
              options={{ style: "currency", currency: "USD" }}
            />
            <TextField
              source="soldItemsSquare"
              label={<Label label="Sold items square" />}
            />

            <NumberField
              source="totalSoldSquareInUsd"
              label="Total sold square"
              locales="en-US"
              options={{ style: "currency", currency: "USD" }}
            />
            <TextField
              source="soldByCard"
              label={<Label label="Sold by card" />}
            />
            <TextField
              source="soldByCash"
              label={<Label label="Sold by cash" />}
            />

            <Links setUrls={setUrls} />
          </Datagrid>
        </List>
      )}
    </>
  );
};

export default OpenShiftStatistic;

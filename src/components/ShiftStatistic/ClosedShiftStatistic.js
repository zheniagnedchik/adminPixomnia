import React, { useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ArrayField,
  SingleFieldList,
  ChipField,
  downloadCSV,
} from "react-admin";
import FilterCloseShift from "../../Utils/FilterCloseShift";
import FilterSideBar from "../../Utils/FilterSideBar";
import Label from "../../Utils/Label";
import PurpleTextField from "../../Utils/TextField";
import Links from "./Links";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import ImageGalery from "./ImageGalery";

const ClosedShiftStatistic = (props) => {
  const [urls, setUrls] = useState(false);
  const exporter = (post) => {
    const csv = convertToCSV({
      data: post,
      // select and order fields in the export
      fields: [
        "employeeId",
        "placeId",
        "shiftScheduleId",
        "clockInTime",
        "clockOutTime",
        "totalMinutes",
        "totalTables",
        "takenPhotos",
        "importPhotos",
        "uploadedFiles",
        "printedPhotos",
        "printedPostcards",
        "soldItems",
        "totalSoldInUsd",
        "soldItemsSquare",
        "totalSoldSquareInUsd",
        "soldByCard",
        "soldByCash",
      ],
    });
    downloadCSV(csv, "posts");
  };
  if (urls) {
    urls.map((item) => {
      return { src: item, height: 1, width: 1 };
    });
  }
  return (
    <>
      {urls ? (
        <ImageGalery urls={urls} setUrls={setUrls} />
      ) : (
        <List {...props} aside={<FilterCloseShift />} exporter={exporter}>
          <Datagrid style={{ margin: 0 }}>
            <TextField source="employeeId" label={<Label label="Employee" />} />
            <TextField source="placeId" label={<Label label="Place" />} />
            <DateField
              source="clockInTime"
              label={<Label label="Clock in time" />}
              showTime
              locales="en-US"
            />
            <DateField
              source="clockOutTime"
              label={<Label label="Clock out time" />}
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
              label={<Label label="Imported photo" />}
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

export default ClosedShiftStatistic;

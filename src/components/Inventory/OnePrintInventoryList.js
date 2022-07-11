import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  ArrayField,
  DateField,
} from "react-admin";

const OnePrintInventoryList = (props) => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Printer info logs">
          <ArrayField source="printer" label="">
            <Datagrid>
              <TextField source="printerId" />
              <TextField source="firmware" label="firmware" />
              <TextField source="mediaRemaining" label="mediaRemaining" />
              <TextField source="lifeCounter" label="lifeCounter" />
              <DateField
                source="logTime"
                label="logTime"
                showTime
                locales={"en-US"}
              />
              <TextField source="printerName" label="printerName" />
              <TextField source="serialNumber" label="serialNumber" />
              <TextField source="status" label="status" />
            </Datagrid>
          </ArrayField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default OnePrintInventoryList;

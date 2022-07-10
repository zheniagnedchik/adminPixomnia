import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { timeZones } from "../../timeZones";
import { URI } from "../../URLS";

const PlaceCreate = (props) => {
  const [regions, setRegions] = useState([]);
  console.log("regions", regions);
  useEffect(() => {
    axios
      .get(`${URI}/getRegions?employeeId=admin@pixomnia.com`)
      .then((data) => {
        const reg = data.data.map((item) => {
          return { id: item.regionId, name: item.regionId };
        });
        setRegions(reg);
      });
  }, [setRegions]);

  return (
    <Create
      title="Create a place"
      {...props}
      resource="addPlace"
      redirect="/getPlacesWithInfo"
    >
      <SimpleForm>
        <SelectInput source="regionId" choices={regions} label="Region id" />
        {/* <TextInput source="placeId" label="Place Id" /> */}
        <TextInput source="placeId" label="Place Id" />
        <TextInput source="name" label="Place Name" />
        <NumberInput source="latitude" label="Latitude" />
        <NumberInput source="longitude" label="Longitude" />
        <NumberInput source="radius" label="Radius" />
        <SelectInput source="timeZoneId" choices={timeZones} label="timeZone" />
      </SimpleForm>
    </Create>
  );
};

export default PlaceCreate;

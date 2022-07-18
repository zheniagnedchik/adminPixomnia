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
  const [tier, setTier] = useState([]);
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

  useEffect(() => {
    axios
      .get(`${URI}/getTierInfo?employeeId=admin@pixomnia.com`)
      .then((data) => {
        console.log(typeof data.data);
        const list = Object.entries(data.data).map((e) => ({ [e[0]]: e[1] }));
        console.log(list);
        const tier = list.map((item) => {
          var key = Object.keys(item);
          return { id: key[0], name: key[0] };
        });

        console.log(tier);

        setTier(tier);
      });
  }, [setTier]);
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
        <SelectInput source="tierId" choices={tier} label="Tier" />
        <NumberInput source="hourTarget" label="Hour target" />
        <NumberInput source="latitude" label="Latitude" />
        <NumberInput source="longitude" label="Longitude" />
        <NumberInput source="radius" label="Radius" />
        <SelectInput source="timeZoneId" choices={timeZones} label="timeZone" />
      </SimpleForm>
    </Create>
  );
};

export default PlaceCreate;

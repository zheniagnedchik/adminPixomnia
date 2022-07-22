import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  SelectInput,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  ImageInput,
  ImageField,
  Edit,
} from "react-admin";
import axios from "axios";
import { URI } from "../../URLS";
import { da } from "date-fns/locale";
import { TextField } from "@material-ui/core";

const PostCardEdit = (props) => {
  const [placeId, setPlace] = useState([]);
  const [employeeId, setEmployee] = useState([]);
  const [region, setRegion] = useState(false);
  const [regions, setRegions] = useState([]);
  console.log("regions", region);
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
  const getPlaces = (region) => {
    setRegion(region);
    axios
      .get(
        `${URI}/getPlacesWithInfo?employeeId=admin@pixomnia&regionId=${region}`
      )
      .then((data) => {
        console.log(data);
        const place = data.data.map((item) => {
          return { id: item.placeId, name: item.placeId };
        });
        setPlace(place);
      });
  };

  const getEmployeeId = async (placeId) => {
    const data = await axios.get(
      `${URI}/getPlacesWithInfo?employeeId=admin@pixomnia&regionId=${region}`
    );
    const place = data.data.filter((el) => el.placeId === placeId);
    const employee = place[0].employeeIds.map((item) => {
      return { id: item, name: item };
    });
    setEmployee(employee);
  };

  const shiftManager = [
    { id: true, name: true },
    { id: false, name: false },
  ];
  const activity = [
    { id: "active", name: "active" },
    { id: "inactive", name: "inactive" },
  ];
  const categories = [
    { name: "Tech", id: "tech" },
    { name: "Lifestyle", id: "lifestyle" },
  ];
  return (
    <Edit
      title="Edit postcard"
      {...props}
      mutationOptions={{ meta: { foo: "bar" } }}
    >
      <SimpleForm>
        <SelectInput source="status" choices={activity} label="Status" />
        <TextInput source="placeId" disabled />
        <TextInput source="employeeId" disabled />
        <TextInput source="note" label="Note" fullWidth multiline />
        <ImageField source="url" title="title" />
      </SimpleForm>
    </Edit>
  );
};

export default PostCardEdit;

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
} from "react-admin";
import axios from "axios";
import { URI } from "../../URLS";
import { da } from "date-fns/locale";
import { useCanAccess } from "@react-admin/ra-rbac";

const ShiftScheduleListCreate = (props) => {
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
  const categories = [
    { name: "Tech", id: "tech" },
    { name: "Lifestyle", id: "lifestyle" },
  ];
  return (
    <Create
      title="Create a shift"
      {...props}
      resource="addShiftSchedule"
      redirect="/getShiftSchedule"
    >
      <SimpleForm>
        <SelectInput
          source="regionId"
          choices={regions}
          label="RegionId"
          onChange={(e) => getPlaces(e.target.value)}
        />
        <SelectInput
          source="placeId"
          choices={placeId}
          label="PlaceId"
          onChange={(e) => getEmployeeId(e.target.value)}
        />

        <SelectInput
          source="employeeId"
          choices={employeeId}
          label="EmployeeId"
        />

        <DateTimeInput source="startTime" label="Start shift" />
        <DateTimeInput source="endTime" label="End shift" />
        <NumberInput
          source="softStartInMinutes"
          label="Soft Start In Minutes"
        />
        <NumberInput source="softEndInMinutes" label="Soft End In Minutes" />
        <SelectInput
          source="shiftManager"
          choices={shiftManager}
          label="shiftManager"
        />
      </SimpleForm>
    </Create>
  );
};

export default ShiftScheduleListCreate;

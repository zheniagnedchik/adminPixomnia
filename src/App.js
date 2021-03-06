import React, { useEffect, useState } from "react";
import {
  Admin,
  fetchUtils,
  GET_LIST,
  CREATE,
  GET_ONE,
  UPDATE,
  defaultTheme,
  useTheme,
  DELETE,
} from "react-admin";
import { Resource } from "@react-admin/ra-rbac";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import RegionList from "./components/RegionList";
import RegionCreate from "./components/RegionCreate";
import axios from "axios";
import PrinterList from "./components/Printers/PrinterList";
import PrinterCreate from "./components/Printers/PrinterCreate";
import PlacesList from "./components/Places/PlacesList";
import PlaceCreate from "./components/Places/PlacesCreate";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmployeesListList from "./components/Employees/EmployeesList";
import EmployeesCreate from "./components/Employees/EmployeesCreate";
import EmployeesEdit from "./components/Employees/EmployeesEdit";
import PrintersEdit from "./components/Printers/PrintersEdit";
import ShiftScheduleListList from "./components/ShiftSchedule/ShiftScheduleList";
import ShiftScheduleListCreate from "./components/ShiftSchedule/ShiftScheduleCreate";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PlacesShow from "./components/Places/PlacesShow";
import InventoryIcon from "@mui/icons-material/Inventory";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { StorageUri, URI } from "./URLS";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { Button } from "@mui/material";
import MyLayout from "./components/MyLayout/Layout";
import { getCurrentDate } from "./getDate";
import InventoryList from "./components/Inventory/InventoryList";
import OnePrintInventoryList from "./components/Inventory/OnePrintInventoryList";
import ClosedShiftStatistic from "./components/ShiftStatistic/ClosedShiftStatistic";
import EmployeeGrid from "./components/ShiftStatistic/EmployeeGrid";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import OpenShiftStatistic from "./components/ShiftStatistic/OpenShiftStatistic";
import { sort } from "./Utils/sort";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "./reducers/regionReducer";
import PlacesEdit from "./components/Places/PlacesEdit";
import CalendarShift from "./components/ShiftSchedule/Calendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PostcardList from "./components/Postcards/PostcardsList";
import PostcardCreate from "./components/Postcards/PostcardCreate";
import PostCardEdit from "./components/Postcards/PostCardEdit";
import ImageIcon from "@mui/icons-material/Image";
import MyLogin from "./components/Login/Login";
import authProvider from "./Utils/authProvider";
import AccessList from "./components/Access/AcessList";
import AccessCreate from "./components/Access/AccessCreate";
import AccessEdit from "./components/Access/AccessEdit";
import StorageList from "./components/Storage/StorageList";
import StorageCreate from "./components/Storage/StorageCreate";
import StorageLogList from "./components/StorageLog/StorageLogList";
import StorageLogCreate from "./components/StorageLog/StorageLogCreate";
import StorageShow from "./components/Storage/StorageShow";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import StorageReport from "./components/StorageReport/StorageReportList";
import StorageReportCreate from "./components/StorageReport/StorageReportCreate";
import AssessmentIcon from "@mui/icons-material/Assessment";

function App() {
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state.region);

  const setBody = (resource, params) => {
    switch (resource) {
      case "addPlace":
        return { place: { ...params.data, printerIds: [], employeeIds: [] } };
      case "addEmployee":
        return { employee: { ...params.data } };
      case "addShiftSchedule":
        const param = {
          placeId: params.data.placeId,
          employeeId: params.data.employeeId,
          startTime: getCurrentDate(params.data.startTime),
          endTime: getCurrentDate(params.data.endTime),
          softStartInMinutes: params.data.softStartInMinutes,
          softEndInMinutes: params.data.softEndInMinutes,
          shiftManager: params.data.shiftManager,
        };
        return param;
      case "uploadPostcard":
        var data = new FormData();
        data.append("employeeId", "admin@pixomnia");
        data.append("placeId", params.data.placeId);
        data.append("note", params.data.note);
        data.append("file", params.data.pictures.rawFile);
        return data;
      case "addStorage":
        return {
          storage: {
            storageId: params.data.storageId,
            regionId: params.data.regionId,
            type: params.data.type,
            timeZone: params.data.timeZoneId,
            note: params.data.note,
            blackFrames: params.data.blackFrames,
            media: params.data.media,
          },
        };
      default:
        return params.data;
    }
  };

  const getLink = (resource, params, body) => {
    let dateInventoryLogs;
    const date = getCurrentDate(new Date());
    const curDate = new Date();
    if (params.filter.day) {
      dateInventoryLogs = curDate.setDate(
        curDate.getDate() - params.filter.day
      );
    } else {
      dateInventoryLogs = curDate.setDate(curDate.getDate() - 1);
    }
    const dateCalendar = curDate.setMonth(curDate.getMonth() - 1);
    const start = new Date();
    const newStart = new Date(start.setUTCHours(0, 0, 0, 0)).toISOString(
      "en-US"
    );

    switch (resource) {
      case "getShiftSchedule":
        if (params.meta.type === "calendar") {
          return `${URI}/${resource}?employeeId=admin@pixomnia.com&placeId=${
            params.filter.place
          }&fromTime=${new Date(dateCalendar).toISOString()}`;
        } else {
          return `${URI}/${resource}?employeeId=admin@pixomnia.com&placeId=${params.filter.place}&fromTime=${newStart}`;
        }

      case "getRegions":
        return `${URI}/getRegions?employeeId=admin@pixomnia.com`;
      case "getInventoryLogs":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com&regionId=${
          params.filter.region
        }&fromTime=${new Date(dateInventoryLogs).toISOString()}`;
      case "getPrinterInfoLogs":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com&printerId=rePrinter01&fromTime=${new Date(
          dateInventoryLogs
        ).toISOString()}`;
      case "getCloseShiftStatistics":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com&regionId=${
          params.filter.region
        }&fromTime=${new Date(dateInventoryLogs).toISOString()}`;
      case "getOpenShiftStatistics":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com&regionId=${params.filter.region}`;
      case "getPostcards":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com&placeId=${params.filter.place}`;
      case "getAccess":
        return `${URI}/${resource}?employeeId=admin@pixomnia.com`;
      case "getStorages":
        return `${StorageUri}/${resource}?regionId=${params.filter.region}`;
      case "getStorageLogs":
        return `${StorageUri}/${resource}?regionId=${params.filter.region}`;
      case "getStorageReports":
        return `${StorageUri}/${resource}?regionId=${params.filter.region}`;
      default:
        return `${URI}/${resource}?employeeId=admin@pixomnia&regionId=${params.filter.region}`;
    }
  };
  const getNewData = (resource, getListData, params) => {
    let new_data;
    switch (resource) {
      case "getPlacesWithInfo":
        new_data = getListData.data.map((i, index) => {
          let printer = i.printerIds.map((it) => {
            return { item: it };
          });
          let employee = i.employeeIds.map((it) => {
            return { item: it };
          });
          const printFilter = printer.filter((el) => el.item.length > 0);
          const employeeFilter = employee.filter((el) => el.item.length > 0);

          return {
            ...i,
            newList: printFilter,
            id: i.regionId ? `regid${i.regionId}regid-id${index}` : index,
            employee: employeeFilter,
          };
        });

        return new_data;
      case "getPostcards":
        new_data = getListData.data.map((i, index) => {
          return {
            ...i,
            id: i.placeId ? `regid${i.placeId}regid-id${index}` : index,
          };
        });

        return new_data;

      default:
        new_data = getListData.data.map((i, index) => {
          return {
            ...i,
            id: i.regionId ? `regid${i.regionId}regid-id${index}` : index,
          };
        });

        return new_data;
    }
  };
  const createPost = async (resource, createBody) => {
    switch (resource) {
      case "uploadPostcard":
        const headers = {
          headers: { "content-type": "multipart/form-data" },
        };
        return await axios.post(`${URI}/${resource}`, createBody, headers);
      case "addStorage":
        return axios.post(`${StorageUri}/${resource}`, createBody);
      case "addStorageLog":
        return await axios.post(`${StorageUri}/${resource}`, createBody);
      case "generateStorageReport":
        return await axios.post(`${StorageUri}/${resource}`, createBody);
      default:
        return await axios.post(`${URI}/${resource}`, createBody);
    }
  };
  const test = async (type, resource, params) => {
    console.log(type);
    const body = "employeeId=admin@pixomnia&regionId=TX";

    switch (type) {
      case GET_LIST:
        const link = getLink(resource, params, body);
        const getListData = await axios.get(link);
        console.log(getListData);
        const newData = getNewData(resource, getListData, params);
        console.log(newData);
        let test;
        if (params.pagination.perPage <= newData.length) {
          test = newData.splice(
            (params.pagination.page - 1) * params.pagination.perPage,
            params.pagination.perPage
          );
        } else {
          test = [...newData];
        }

        const sortedList = sort(params.sort.field, params.sort.order, test);
        console.log(sortedList);
        return { data: sortedList, total: getListData.data.length };
      case CREATE:
        const createBody = setBody(resource, params);
        const create = await createPost(resource, createBody);
        console.log(create);
        let jsonParse;
        if (resource === "addStorage" || resource === "addStorageLog") {
          jsonParse = create.data;
        } else {
          jsonParse = JSON.parse(create.data.responseJson);
        }
        const createData = { id: 9, ...jsonParse };
        return { data: createData };
      case GET_ONE:
        console.log(params);
        if (resource === "getStorages") {
          const listStorages = await axios.get(`${StorageUri}/${resource}`);
          const newListStorage = listStorages.data.map((item, index) => {
            return { ...item, id: `regidLAregid-id${index}` };
          });
          const filterAccess = newListStorage.filter(
            (el) => el.id === params.id
          );
          console.log("dfojkdhv");
          console.log(filterAccess);
          const storage = await axios.get(
            `${StorageUri}/getStorage?storageId=${filterAccess[0].storageId}`
          );

          if (storage) {
            console.log("storage", storage);
            return { data: { ...storage, id: params.id } };
          }
        }
        if (resource === "getAccess") {
          console.log("kjhgfdghjkl");
          const listAccess = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia`
          );

          const newListAccess = listAccess.data.map((item, index) => {
            return { ...item, id: index };
          });
          console.log(newListAccess);
          console.log(params);
          const filterAccess = newListAccess.filter(
            (el) => el.id === Number(params.id)
          );
          console.log(filterAccess);
          return { data: filterAccess[0] };
        }
        if (resource === "getPostcards") {
          const regionStr = params.id.substring(
            params.id.indexOf("regid") + 5,
            params.id.lastIndexOf("regid-")
          );

          const list = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia&placeId=${regionStr}`
          );
          const newList = list.data.map((item, index) => {
            return { ...item, id: `regid${item.placeId}regid-id${index}` };
          });
          const filter = newList.filter((el) => el.id === params.id);

          return { data: filter[0] };
        }
        if (resource === "getPlacesWithInfo") {
          const regionStr = params.id.substring(
            params.id.indexOf("regid") + 5,
            params.id.lastIndexOf("regid-")
          );
          await dispatch(setRegion(regionStr));
          const list = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia&regionId=${regionStr}`
          );
          let g = list.data.map((i, index) => {
            let printer = i.printerIds.map((it) => {
              return { item: it };
            });

            let employee = i.employeeIds.map((it) => {
              return { item: it };
            });
            const printFilter = printer.filter((el) => el.item.length > 0);
            const employeeFilter = employee.filter((el) => el.item.length > 0);

            return {
              ...i,
              newList: printFilter,
              id: `regid${i.regionId}regid-id${index}`,
              employee: employeeFilter,
            };
          });
          const filter = g.filter((item) => item.id == params.id);

          return await { data: filter[0] };
        }
        if (resource === "getPrinters") {
          const regionStr = params.id.substring(
            params.id.indexOf("regid") + 5,
            params.id.lastIndexOf("regid-")
          );

          const curDate = new Date();
          const dateInventoryLogs = curDate.setDate(curDate.getDate() - 1);
          const printerList = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia&regionId=${regionStr}`
          );

          const newArray = printerList.data.map((item, index) => {
            return { ...item, id: `regid${item.regionId}regid-id${index}` };
          });

          const printer = newArray.filter((el) => String(el.id) === params.id);

          const printerLog = await axios.get(
            `${URI}/getPrinterInfoLogs?employeeId=admin@pixomnia.com&printerId=${
              printer[0].printerId
            }&fromTime=${new Date(dateInventoryLogs).toISOString()}`
          );
          let id = printerLog.data.map((item, index) => {
            return { ...item, id: index };
          });
          const printers = { id: 0, printer: id };
          return { data: printers };
        }
        if (resource === "getEmployees") {
          const regionStr = params.id.substring(
            params.id.indexOf("regid") + 5,
            params.id.lastIndexOf("regid-")
          );
          const employee = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia&regionId=${regionStr}`
          );
          const newArray = employee.data.map((item, index) => {
            return { ...item, id: `regid${item.regionId}regid-id${index}` };
          });

          const filterArray = newArray.filter((el) => el.id == params.id);
          return { data: filterArray[0] };
        }

      case UPDATE:
        if (resource === "getAccess") {
          axios.post(`${URI}/updateAccess`, params.data);
        }
        if (resource === "getPostcards") {
          axios.post(`${URI}/updatePostcard`, {
            placeId: params.data.placeId,
            status: params.data.status,
            postcardId: params.data.postcardId,
            note: params.data.note,
          });
        }
        if (resource == "getEmployees") {
          axios.post(`${URI}/updateEmployee`, {
            employee: {
              canUseImport: params.data.canUseImport,
              email: params.data.email,
              firstName: params.data.firstName,
              lastName: params.data.lastName,
              regionId: params.data.regionId,
            },
          });
        }
        if (resource === "getPlacesWithInfo") {
          if (params.meta) {
            axios.post(`${URI}/updatePlace`, {
              place: {
                placeId: params.data.placeId,
                name: params.data.name,
                tierId: params.data.tierId,
                hourTarget: params.data.hourTarget,
                latitude: params.data.latitude,
                longitude: params.data.longitude,
                radius: params.data.radius,
                timeZoneId: params.data.timeZoneId,
                printerIds: params.data.printerIds,
                employeeIds: params.data.employeeIds,
              },
            });
          }
          const regionStr = params.id.substring(
            params.id.indexOf("regid") + 5,
            params.id.lastIndexOf("regid-")
          );
          const udpList = await axios.get(
            `${URI}/${resource}?employeeId=admin@pixomnia&regionId=${regionStr}`
          );
          let udp = udpList.data.map((i, index) => {
            let printer = i.printerIds.map((it) => {
              return { item: it };
            });

            let employee = i.employeeIds.map((it) => {
              return { item: it };
            });
            const printFilters = printer.filter((el) => el.item.length > 0);
            const employeeFilters = employee.filter((el) => el.item.length > 0);

            return {
              ...i,
              newList: printFilters,
              id: `regid${i.regionId}regid-id${index}`,
              employee: employeeFilters,
            };
          });

          const filters = udp.filter((item) => item.id == params.id);

          const newPrinters = params.data.newList.filter(
            (e) => filters[0].newList.findIndex((i) => i.item == e.item) === -1
          );
          const delPrinters = filters[0].newList.filter(
            (e) => params.data.newList.findIndex((i) => i.item == e.item) === -1
          );
          const newEmployee = params.data.employee.filter(
            (e) => filters[0].employee.findIndex((i) => i.item == e.item) === -1
          );
          const delEmployee = filters[0].employee.filter(
            (e) =>
              params.data.employee.findIndex((i) => i.item == e.item) === -1
          );
          if (newPrinters.length > 0) {
            for (const item of newPrinters) {
              await axios
                .post(`${URI}/linkPrinterAndPlace`, {
                  placeId: params.data.placeId,
                  printerId: item.item,
                })
                .then((data) => console.log(data));
            }
          }
          if (delPrinters.length > 0) {
            for (const item of delPrinters) {
              await axios
                .post(`${URI}/unlinkPrinterFromPlace`, {
                  placeId: params.data.placeId,
                  printerId: item.item,
                })
                .then((data) => console.log(data));
            }
          }
          if (newEmployee.length > 0) {
            for (const item of newEmployee) {
              await axios
                .post(`${URI}/linkEmployeeAndPlace`, {
                  placeId: params.data.placeId,
                  employeeId: item.item,
                })
                .then((data) => console.log(data));
            }
          }
          if (delEmployee.length > 0) {
            for (const item of delEmployee) {
              await axios
                .post(`${URI}/unlinkEmployeeFromPlace`, {
                  placeId: params.data.placeId,
                  employeeId: item.item,
                })
                .then((data) => console.log(data));
            }
          }
        }
        return { data: params.previousData };

      case DELETE:
        if (resource === "getPostcards") {
          axios.get(
            `${URI}/deletePostcard?placeId=${params.previousData.placeId}&postcardId=${params.previousData.postcardId}`
          );
        } else {
          axios.get(
            `${URI}/deleteShift?shiftScheduleId=${params.previousData.shiftScheduleId}`
          );
        }

        return { data: params.data };
    }
  };
  const testProvider = (type, resource, params) => {
    console.log(type);
    console.log(resource);
    console.log(params);
  };
  return (
    <div>
      <Admin
        dataProvider={test}
        layout={MyLayout}
        loginPage={MyLogin}
        authProvider={authProvider}
        requireAuth
      >
        <Resource
          name="getRegions"
          list={RegionList}
          create={RegionCreate}
          icon={SouthAmericaIcon}
          options={{ label: "Regions" }}
        />
        <Resource
          name="getPrinters"
          list={PrinterList}
          create={PrinterCreate}
          icon={LocalPrintshopIcon}
          options={{ label: "Printers" }}
          show={OnePrintInventoryList}
        />
        <Resource
          name="getPlacesWithInfo"
          list={PlacesList}
          create={PlaceCreate}
          show={PlacesShow}
          icon={StorefrontIcon}
          edit={PlacesEdit}
          options={{ label: "Places" }}
        />
        <Resource
          name="getEmployees"
          list={EmployeesListList}
          create={EmployeesCreate}
          edit={EmployeesEdit}
          icon={PeopleAltIcon}
          options={{ label: "Employees" }}
        />
        <Resource
          name="getShiftSchedule"
          list={ShiftScheduleListList}
          create={ShiftScheduleListCreate}
          icon={WorkHistoryIcon}
          options={{ label: "Schedule" }}
        />
        <Resource
          name="getInventoryLogs"
          list={InventoryList}
          icon={InventoryIcon}
          options={{ label: "Inventory" }}
        />
        <Resource
          name="getCloseShiftStatistics"
          list={ClosedShiftStatistic}
          icon={AcUnitIcon}
          options={{ label: "Closed shift statistic" }}
          show={EmployeeGrid}
        />
        <Resource
          name="getOpenShiftStatistics"
          list={OpenShiftStatistic}
          icon={AddReactionIcon}
          options={{ label: "Open shift statistic" }}
        />
        <Resource
          name="Schedulecalendar"
          list={CalendarShift}
          options={{ label: "Schedule calendar" }}
          icon={CalendarMonthIcon}
        />
        <Resource
          name="getPostcards"
          list={PostcardList}
          edit={PostCardEdit}
          options={{ label: "Postcards" }}
          create={PostcardCreate}
          icon={ImageIcon}
        />
        <Resource
          name="getAccess"
          list={AccessList}
          create={AccessCreate}
          edit={AccessEdit}
          options={{ label: "Access" }}
          icon={AccessibilityIcon}
        />
        <Resource
          name="getStorages"
          list={StorageList}
          create={StorageCreate}
          show={StorageShow}
          options={{ label: "Storage" }}
          icon={WarehouseIcon}
        />
        <Resource
          name="getStorageLogs"
          list={StorageLogList}
          create={StorageLogCreate}
          options={{ label: "Storage log" }}
          icon={LocalShippingIcon}
        />
        <Resource
          name="getStorageReports"
          list={StorageReport}
          create={StorageReportCreate}
          options={{ label: "Storage report" }}
          icon={AssessmentIcon}
        />
      </Admin>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  GET_LIST,
  CREATE,
  GET_ONE,
  UPDATE,
} from "react-admin";
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
import PlacesEdit from "./components/Places/PlacesEdit";

function App() {
  const setBody = (resource, params) => {
    switch (resource) {
      case "addPlace":
        return { place: { ...params.data, printerIds: [], employeeIds: [] } };
      case "addEmployee":
        return { employee: { ...params.data } };
      default:
        return params.data;
    }
  };

  const getLink = (resource, params, body) => {
    const date = new Date().toISOString();
    console.log(date);
    switch (resource) {
      case "getShiftSchedule":
        return `http://dev-api-v1.pixomnia.com:8087/${resource}?employeeId=admin@pixomnia.com&placeId=malroze&fromTime=${date}`;
      case "getRegions":
        return "http://dev-api-v1.pixomnia.com:8087/getRegions?employeeId=admin@pixomnia.com";
      default:
        return `http://dev-api-v1.pixomnia.com:8087/${resource}?${body}`;
    }
  };

  const test = async (type, resource, params) => {
    const body = "employeeId=reload&regionId=TX";
    console.log("type", type);
    console.log("resource", resource);
    console.log("params", params);
    switch (type) {
      case GET_LIST:
        let new_data;
        const link = getLink(resource, params, body);
        const getListData = await axios.get(link);
        if (resource === "getPlacesWithInfo") {
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
              id: index,
              employee: employeeFilter,
            };
          });
          console.log("tes", new_data);
        } else {
          new_data = getListData.data.map((i, index) => {
            return { ...i, id: index };
          });
        }

        let test;
        if (params.pagination.perPage <= new_data.length) {
          test = new_data.splice(
            (params.pagination.page - 1) * params.pagination.perPage,
            params.pagination.perPage
          );
        } else {
          test = [...new_data];
        }
        console.log(new_data);
        console.log(test);

        return { data: test, total: getListData.data.length };
      case CREATE:
        const createBody = setBody(resource, params);
        const create = await axios.post(
          `http://dev-api-v1.pixomnia.com:8087/${resource}`,
          createBody
        );
        const jsonParse = JSON.parse(create.data.responseJson);
        const createData = { id: 9, ...jsonParse };
        return { data: createData };
      case GET_ONE:
        const list = await axios.get(
          `http://dev-api-v1.pixomnia.com:8087/${resource}?${body}`
        );

        // const list_data = list.data.map((i, index) => {
        //   return { ...i, id: index };
        // });
        let g = list.data.map((i, index) => {
          let printer = i.printerIds.map((it) => {
            return { item: it };
          });

          let employee = i.employeeIds.map((it) => {
            return { item: it };
          });
          const printFilter = printer.filter((el) => el.item.length > 0);
          const employeeFilter = employee.filter((el) => el.item.length > 0);
          console.log(printFilter);
          return {
            ...i,
            newList: printFilter,
            id: index,
            employee: employeeFilter,
          };
        });
        const filter = g.filter((item) => item.id == params.id);
        console.log("filter", filter);
        return { data: filter[0] };
      case UPDATE:
        console.log("paramfdfd", params);
        const udpList = await axios.get(
          `http://dev-api-v1.pixomnia.com:8087/${resource}?${body}`
        );

        // const list_data = list.data.map((i, index) => {
        //   return { ...i, id: index };
        // });
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
            id: index,
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
          (e) => params.data.employee.findIndex((i) => i.item == e.item) === -1
        );
        if (newPrinters.length > 0) {
          for (const item of newPrinters) {
            await axios
              .post(`http://dev-api-v1.pixomnia.com:8087/linkPrinterAndPlace`, {
                placeId: params.data.placeId,
                printerId: item.item,
              })
              .then((data) => console.log(data));
          }
        }
        if (delPrinters.length > 0) {
          for (const item of delPrinters) {
            await axios
              .post(
                `http://dev-api-v1.pixomnia.com:8087/unlinkPrinterFromPlace`,
                {
                  placeId: params.data.placeId,
                  printerId: item.item,
                }
              )
              .then((data) => console.log(data));
          }
        }
        if (newEmployee.length > 0) {
          for (const item of newEmployee) {
            await axios
              .post(
                `http://dev-api-v1.pixomnia.com:8087/linkEmployeeAndPlace`,
                {
                  placeId: params.data.placeId,
                  employeeId: item.item,
                }
              )
              .then((data) => console.log(data));
          }
        }
        if (delEmployee.length > 0) {
          for (const item of delEmployee) {
            await axios
              .post(
                `http://dev-api-v1.pixomnia.com:8087/unlinkEmployeeFromPlace`,
                {
                  placeId: params.data.placeId,
                  employeeId: item.item,
                }
              )
              .then((data) => console.log(data));
          }
        }

        // newPrinters.map(async (item) => {
        //   await axios
        //     .post(`http://dev-api-v1.pixomnia.com:8087/linkPrinterAndPlace`, {
        //       placeId: params.data.placeId,
        //       printerId: item.item,
        //     })
        //     .then((data) => console.log(data));
        // });

        // delPrinters.map(async (item) => {
        //   await axios
        //     .post(
        //       `http://dev-api-v1.pixomnia.com:8087/unlinkPrinterFromPlace`,
        //       {
        //         placeId: params.data.placeId,
        //         printerId: item.item,
        //       }
        //     )
        //     .then((data) => console.log(data));
        // });
        // return { data: filter[0] };
        // let update;
        // if (resource === "getEmployees") {
        //   update = await axios.post(
        //     `http://dev-api-v1.pixomnia.com:8087/linkEmployeeAndPlace`,
        //     { placeId: params.data.placeId, employeeId: params.data.email }
        //   );
        // }
        // if (resource === "getPrinters") {
        //   update = await axios.post(
        //     `http://dev-api-v1.pixomnia.com:8087/linkPrinterAndPlace`,
        //     { placeId: params.data.placeId, printerId: params.data.printerId }
        //   );
        // }

        // const jsonParseUpd = JSON.parse(update.data.responseJson);
        // const updData = { id: 9, ...jsonParseUpd };
        return { data: params.data };
    }
  };
  return (
    <Admin dataProvider={test}>
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
        edit={PrintersEdit}
        icon={LocalPrintshopIcon}
        options={{ label: "Printers" }}
      />
      <Resource
        name="getPlacesWithInfo"
        list={PlacesList}
        create={PlaceCreate}
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
        options={{ label: "Shift" }}
      />
    </Admin>
  );
}

export default App;

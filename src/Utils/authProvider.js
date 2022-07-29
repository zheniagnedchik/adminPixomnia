import { getPermissionsFromRoles } from "@react-admin/ra-rbac";
import axios from "axios";
const roles = {
  regionManager: [
    { action: ["list", "show"], resource: "getRegions" },
    { action: ["list", "show"], resource: "getPrinters" },
    { action: ["list", "show"], resource: "getPlacesWithInfo" },
    { action: ["list", "show"], resource: "getEmployees" },
    { action: ["list", "show"], resource: "getShiftSchedule" },
    { action: ["list", "show"], resource: "getInventoryLogs" },
    { action: ["list", "show"], resource: "getCloseShiftStatistics" },
    { action: ["list", "show"], resource: "getOpenShiftStatistics" },
    { action: ["list", "show"], resource: "Schedulecalendar" },
    { action: ["list", "show"], resource: "getPostcards" },
  ],
  superAdmin: [{ action: "*", resource: "*" }],
};

const authProvider = {
  checkAuth: () => {
    const role = localStorage.getItem("role");
    return role ? Promise.resolve() : Promise.reject();
  },
  login: ({ role }) => {
    localStorage.setItem("role", role);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("role");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  getIdentity: () => {
    const role = localStorage.getItem("role");
    return Promise.resolve({
      id: role,
      fullName: {
        regionManager: "Region manager",
        superAdmin: "Super admin",
        stockManager: "Stock manager",
        administrator: "Administrator",
      }[role],
    });
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    console.log(role);
    return Promise.resolve(
      getPermissionsFromRoles({
        roleDefinitions: roles,
        userRoles: [role],
      })
    );
  },
  getRoles: () => Promise.resolve(roles),
};

export default authProvider;

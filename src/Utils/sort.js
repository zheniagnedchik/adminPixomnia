export const sort = (field, order, array) => {
  switch (field) {
    case "clockInTime":
      if (order === "ASC") {
        return array.sort((a, b) => new Date(a[field]) - new Date(b[field]));
      } else {
        return array.sort((a, b) => new Date(b[field]) - new Date(a[field]));
      }
    case "clockOutTime":
      if (order === "ASC") {
        return array.sort((a, b) => new Date(a[field]) - new Date(b[field]));
      } else {
        return array.sort((a, b) => new Date(b[field]) - new Date(a[field]));
      }
    case "startTime":
      if (order === "ASC") {
        return array.sort((a, b) => new Date(a[field]) - new Date(b[field]));
      } else {
        return array.sort((a, b) => new Date(b[field]) - new Date(a[field]));
      }
    case "endTime":
      if (order === "ASC") {
        return array.sort((a, b) => new Date(a[field]) - new Date(b[field]));
      } else {
        return array.sort((a, b) => new Date(b[field]) - new Date(a[field]));
      }

    default:
      if (order === "ASC") {
        return array.sort((a, b) => {
          if (typeof a[field] === "string") {
            return a[field].localeCompare(b[field]);
          } else {
            return a[field] - b[field];
          }
        });
      } else {
        return array.sort((a, b) => {
          if (typeof a[field] === "string") {
            return b[field].localeCompare(a[field]);
          } else {
            return b[field] - a[field];
          }
        });
      }
  }
};

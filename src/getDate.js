import { format } from "date-fns";

export const getCurrentDate = (newDate) => {
  const date = format(newDate, "yyyy-MM-dd");
  const time = format(newDate, "HH:mm:ss");
  const current = date + "T" + time;
  return current;
};

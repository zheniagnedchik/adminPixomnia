import { List, TextField, Datagrid, Pagination } from "react-admin";
import EmployeeGrid from "./EmployeeGrid";

const StatisticGrid = (props) => {
  const list = Object.entries(props.record.value);
  const filter = list.map((item) => {
    return { key: item[0], value: item[1] };
  });
  console.log(filter);
  return (
    <List
      //   {...props}
      resource="getCloseShiftStatistics"
      filter={{ employee: filter }}
      //   exporter={false}
      //   pagination={false}
    >
      <Datagrid expand={<EmployeeGrid />}>
        <TextField source="key" label="EmployeeId"></TextField>
      </Datagrid>
    </List>
  );
};

export default StatisticGrid;

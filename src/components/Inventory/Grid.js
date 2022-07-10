import { List, TextField, Datagrid, Pagination } from "react-admin";
const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

const GridAllPrinters = (props) => {
  return (
    <List
      resource="getInventoryLogs"
      filter={props.record}
      exporter={false}
      perPage={100}
      title=" "
      pagination={<PostPagination />}
    >
      <Datagrid isRowSelectable={(record) => record.id === 300}>
        <TextField source="employeeId" />
        <TextField source="placeId" />
        <TextField source="printerId" />
        <TextField source="printerLifeCounter" />
        <TextField source="printerMediaCounter" />
        <TextField source="blackFrames" />
        <TextField source="printerMediaInRolls" />
        <TextField source="reportType" />
        <TextField source="timeLog" />
      </Datagrid>
    </List>
  );
};

export default GridAllPrinters;

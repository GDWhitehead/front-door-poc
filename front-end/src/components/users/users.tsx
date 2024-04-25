import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Alert } from "@mui/material";
import useUsers from "./use-users";

const UsersList = () => {
  const { users, serverName, isLoading, error } = useUsers();

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First name",
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 250,
    },
    {
      field: "telephoneNumber",
      headerName: "Telephone",
      width: 250,
    },
    {
      field: "emailAddress",
      headerName: "Email",
      width: 250,
    },
  ];

  if (isLoading) {
    return <h1>Loading users. Please stand by...</h1>;
  }
  if (error) {
    return <Alert severity="error">Unable to load users.</Alert>;
  }

  return (
    <>
      <p>Data served by: {serverName}</p>
      <DataGrid
        autoHeight
        density="compact"
        columnBuffer={5}
        rows={users ?? []}
        columns={columns}
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </>
  );
};

export default UsersList;

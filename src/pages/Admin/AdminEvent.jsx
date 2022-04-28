import React, { useState } from "react";

import "./AdminEvent.scss";

import { DataGrid } from "@mui/x-data-grid";

export default function AdminHome() {
  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerAlign: "center",

      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "year",
      headerName: "Year",
      width: 150,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "dept",
      headerName: "Dept",
      width: 150,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "sec",
      headerName: "Section",
      width: 150,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className="description"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];

  const dummyData = [
    {
      id: 1,
      name: "Snow",
      year: "3",
      dept: "CSE",
      sec: "A",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "Jamie Lannister",
      year: "3",
      dept: "CSE",
      sec: "A",
      phone: "1234567890",
    },
    {
      id: 3,
      name: "Lannister",
      year: "3",
      dept: "CSE",
      sec: "A",
      phone: "1234567890",
    },
    {
      id: 4,
      name: "Stark",
      year: "3",
      dept: "CSE",
      sec: "A",
      phone: "1234567890",
    },
  ];

  const [eventName, seteventName] = useState("EventName");
  const [data, setData] = useState(dummyData);

  const datagridSx = {
    boxShadow: 2,
    border: 2,
    color: "white",
    borderColor: "rgb(241, 196, 15)",
    "& .MuiDataGrid-columnHeaders": {
      color: "rgb(241, 196, 15)",
      fontSize: 16,
    },
  };

  return (
    <div className="center-align">
      <div className="datatable">
        <div className="description name">{eventName}</div>

        <DataGrid
          rows={data}
          columns={userColumns}
          pageSize={9}
          sx={datagridSx}
        />
      </div>
    </div>
  );
}

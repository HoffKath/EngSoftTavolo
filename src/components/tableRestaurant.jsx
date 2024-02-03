import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import "../styles/table.css"

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Consumidor", accessor: "name" },
      { Header: "Telefone", accessor: "phone" },
      { Header: "Email", accessor: "email" },
      { Header: "Quantidade", accessor: "peopleAmount" },
      { Header: "Data", accessor: "data" },
      { Header: "Pedido especial", accessor: "special" }
    ],
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
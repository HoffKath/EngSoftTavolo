import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import "../styles/table.css"

const TableCustomer = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Restaurante", accessor: "restaurantName" },
      { Header: "Telefone", accessor: "cellphone" },
      { Header: "Endereço", accessor: "address" },
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

export default TableCustomer;
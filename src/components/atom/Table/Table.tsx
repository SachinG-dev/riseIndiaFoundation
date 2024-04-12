import { useState } from "react";

interface RowData {
  [key: string]: any;
}

interface TableProps {
  className: string;
  data: RowData[];
  headers: Record<string, string>;
  onRowClick?: (rowData: RowData) => void;
  enableEditAction?: (rowData: RowData) => void;
  enableDeleteAction?: (rowData: RowData) => void;
  hyperlinkField?: string;
  sortingFunction?: (fieldName: string, sortOrder: string) => void;
  sortingHeaderMap?: Record<string, string>;
}

function Table({
  data,
  headers,
  className,
  onRowClick,
  enableEditAction,
  enableDeleteAction,
  hyperlinkField,
  sortingFunction,
  sortingHeaderMap,
}: TableProps) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteRowData, setDeleteRowData] = useState<RowData | null>(null);
  const [sortingField, setSortingField] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>("asc");

  const toggleSortingOrder = () => {
    setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
  };

  const handleHeaderClick = (fieldName: string) => {
    if (fieldName === "action") {
      return;
    }
    if (sortingFunction) {
      setSortingField(fieldName);
      if (sortingField === fieldName) {
        toggleSortingOrder();
      }

      if (sortingHeaderMap) {
        sortingFunction(sortingHeaderMap[fieldName], sortingOrder);
      }
    }
  };

  const displayIconForSortingOrder = () => {
    if (sortingOrder === "asc") {
      return <i className="mdi mdi-arrow-up ms-1" />;
    }
    return <i className="mdi mdi-arrow-down ms-1" />;
  };

  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            {Object.entries(headers).map(([key, value]) => (
              <th onClick={() => handleHeaderClick(key)} key={key}>
                {value}
                {key === sortingField ? displayIconForSortingOrder() : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id}>
                {Object.entries(headers).map(([key]) => {
                  if (
                    key === "action" &&
                    (enableEditAction || enableDeleteAction)
                  ) {
                    return (
                      <td key={key}>
                        {enableEditAction && (
                          <span
                            role="presentation"
                            className="btn btn-sm btn-secondary ms-1 "
                            onClick={() => enableEditAction(row)}
                          >
                            <i className="mdi mdi-pencil fs-6" />
                          </span>
                        )}
                        {enableDeleteAction && (
                          <span
                            role="presentation"
                            className="btn btn-sm btn-danger ms-1 "
                            onClick={() => {
                              setDeleteRowData(row);
                              setShowDeletePopup(true);
                            }}
                          >
                            <i className="mdi mdi-delete fs-6" />
                          </span>
                        )}
                      </td>
                    );
                  }
                  if (onRowClick && key === hyperlinkField) {
                    return (
                      <td
                        key={key}
                        onClick={() => onRowClick(row)}
                        className={
                          key === hyperlinkField
                            ? "text-primary text-decoration-underline cursor-pointer"
                            : ""
                        }
                      >
                        {row[key]}
                      </td>
                    );
                  }
                  return <td key={key}>{row[key]}</td>;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={Object.keys(headers).length + 1}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;

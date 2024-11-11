import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { InvoiceTable } from "@src/components/Table/InvoiceTable";
import { InvoiceDataType } from "../SettingsHome/SettingsTabs/SubscriptionsAndBillingsTab/InvoiceTableSection";
import { createColumnHelper } from "@tanstack/react-table";
import { getTime } from "@src/utils/time";
import Tag from "@src/components/Tag";
import clsx from "clsx";
import EyeIcon from "@assets/images/icons/Eye.svg?react";
import DownloadIcon from "@assets/images/icons/Download.svg?react";
import { invoiceData } from "@src/constants/invoices";

const InvoicesPage: React.FC = () => {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper<InvoiceDataType>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        id: "title",
        header: "Invoice",
        cell: (props) => (
          <span className="font-medium text-sm">{props.getValue()}</span>
        ),
      }),
      columnHelper.accessor("amount", {
        id: "amount",
        header: "Amount",
        cell: (props) => <span className="text-xs">${props.getValue()}</span>,
      }),
      columnHelper.accessor("date", {
        id: "date",
        header: "Date",
        cell: (props) => (
          <span className="text-xs">{getTime(props.getValue())}</span>
        ),
      }),
      columnHelper.accessor("status", {
        id: "status",
        header: "Status",
        cell: (props) => (
          <Tag
            color="#15803D"
            backgroundColor="#F0FDF4"
            borderColor="#BBF7D0"
            className="text-xs !font-normal flex gap-1 items-center"
          >
            <span
              className={clsx([
                "w-1 h-1 rounded-full",
                props.getValue() === "Paid"
                  ? "bg-[#22C55E]"
                  : props.getValue() === "Paid"
                  ? "bg-yellow-500"
                  : "bg-red-500",
              ])}
            />
            {props.getValue()}
          </Tag>
        ),
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: (props) => (
          <div className="flex items-center gap-4 ">
            <EyeIcon />
            <a
              target="_blank"
              href={props.row.original.url}
              download={props?.row?.original?.title}
            >
              <DownloadIcon />
            </a>
          </div>
        ),
      }),
    ],
    []
  );
  return (
    <div className="flex flex-col gap-4">
      <button className="w-fit" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <InvoiceTable
        data={invoiceData}
        columns={columns}
        tableName="Invoices"
        showPagination={true}
        pageSize={10}
      />
    </div>
  );
};

export default InvoicesPage;

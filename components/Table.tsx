import React from "react";
import contactMessageData from "@/public/data/mockContactMessages";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type TableProps = {
  caption?: string;
  header?: string;
};

const ContactMessagesTable = ({ caption, header }: TableProps) => {
  return (
    <Table className="rounded-lg shadow-white shadow-lg dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800 outline-none border-none">
      {/* // Row 1: Column Titles */}
      <TableHeader>
        <TableRow className="border-b border-b-gray-500 border-opacity-20 rounded-tl-xl rounded-tr-xl">
          <TableHead className="w-[100px] text-fontDark dark:text-fontLight">
            id
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Name
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Email
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Message
          </TableHead>
        </TableRow>
      </TableHeader>
      {/* // Row 2: Data */}
      <TableBody className="border-l-0 border-r-0">
        {contactMessageData.map((item) => {
          const { id, name, email, message } = item;
          return (
            <TableRow
              key={id}
              className="border-1 border-b-gray-500 border-b-opacity-10"
            >
              <TableCell className="font-medium h-[3rem]">{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell className="">{message}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ContactMessagesTable;

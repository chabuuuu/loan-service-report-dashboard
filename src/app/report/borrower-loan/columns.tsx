"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Borrower = {
  borrower_id: string
  total_contract_amount: number
  total_payed_amount: number
  total_remain_amount: number
}

export const columns: ColumnDef<Borrower>[] = [
  {
    accessorKey: "borrower_id",
    header: "Borrower id",
  },
  {
    accessorKey: "total_contract_amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total contract amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },  
  },
  {
    accessorKey: "total_remain_amount",
    header: "Total remail amount",
  },
  {
    accessorKey: "total_payed_amount",
    header: "Total paid amount",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const borrower = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(borrower.borrower_id)}
            >
              Copy borrower ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={
                ()=> window.open(`localhost:3000/report/borrower-loan/detail?filter=thisYear&borrowerId=${borrower.borrower_id}`)
            }>View borrower detail</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

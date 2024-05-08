"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Borrower_Detail = {
  contract_id: string
  borrower_id: string
  lender_id: string
  contract_amount: string
  payed_ammount: string
  remain_amount: string
}

export const columns: ColumnDef<Borrower_Detail>[] = [
  {
    accessorKey: "contract_id",
    header: "Contract id",
  },
  {
    accessorKey: "lender_id",
    header: "Lender id",
  },
  {
    accessorKey: "contract_amount",
    header: "Contract amount",
  },
  {
    accessorKey: "payed_ammount",
    header: "Paied amount",
  },
  {
    accessorKey: "remain_amount",
    header: "Remain amount",
  }
]

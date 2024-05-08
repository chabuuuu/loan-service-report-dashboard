'use client'
import { useSearchParams } from 'next/navigation'
import { DataTable } from "@/components/ui/data-table"
import { Borrower_Detail, columns } from "./columns"
import { useEffect } from 'react'
import axios from 'axios'
async function getData(filter: any, borrowerId: any): Promise<Borrower_Detail[]> {
  // Fetch data from your API here.
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/report/borrower-loan-detail?filter=${filter}&borrowerId=${borrowerId}`);  
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
//   return [
//     {
//         "contract_id": "96dbfbf8-eea4-4bf9-a8c1-181e81d196ba",
//         "borrower_id": "20577d3e-7106-4843-a323-7f00402ec4af",
//         "lender_id": "45b881db-0dde-40d1-a7fc-1f7af3f45f6f",
//         "contract_amount": "500000000",
//         "payed_ammount": "52083333",
//         "remain_amount": "447916667"
//     }
// ]
}


export default async function DemoPage() {
  const query = useSearchParams()
 
  const borrowerId = query.get('borrowerId')
  const filter = query.get('filter')

  const data = await getData(filter, borrowerId)
  console.log('data:::', data);
  
  return (
    <div className="container mx-auto py-10">
      <h1 className='text-center text-2xl'>CONTRACT DETAIL</h1>
      <DataTable columns={columns} data={data} />
    </div>

  )
}

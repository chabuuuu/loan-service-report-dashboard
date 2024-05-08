import { DataTable } from "@/components/ui/data-table"
import { Borrower, columns } from "./columns"
import axios from "axios";

async function getData(): Promise<Borrower[]> {
  // Fetch data from your API here.
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/report/borrower-total?filter=thisYear`);  
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

//   return [
//     {
//         "borrower_id": "20577d3e-7106-4843-a323-7f00402ec4af",
//         "total_contract_amount": 500000000,
//         "total_payed_amount": 52083333,
//         "total_remain_amount": 447916667
//     }
// ]
}

export default async function DemoPage() {
  const data = await getData()  
  return (
    <div className="container mx-auto py-10">
      <h1 className='text-center text-2xl'>LOAN CONTRACT OF BORROWER REPORT</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

"use client";

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Button } from '@/components/ui/button';
import axios from 'axios';
const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
const ReportPage = () => {
  const [data, setData] = useState([]);
  const [filterDate, setFilterDate] = useState('day');

  useEffect(() => {
    fetchData();
  }, []); // Gọi fetchData ngay sau khi component được render lần đầu tiên

  // Function to fetch data based on filter
  const fetchData = async () => {
    try {
      //const response = await axios.get(`/api/data?date=${filterDate}`);
      let exampleData : any = [
        {
          customerId: 'xahsad-asdhsad',
          contractId: 1000000,
            payed: 500000,
            bad: 500000
            },
            {
            customerName: 'Nguyễn Văn B',
            loaned: 2000000,
            payed: 500000,
            bad: 500000
        }
      ]
      console.log(exampleData);
      
      setData(exampleData)
      console.log(data);
      
      //setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle filter change
  const handleFilterChange = (value : any) => {
    setFilterDate(value);
  };

  // Function to handle filter submit
  const handleFilterSubmit = () => {
    fetchData();
  };

//   return (
//     <div>
//       <h1>Report Page</h1>
//       <div>
//         <Select>
//             <SelectTrigger>
//                 <SelectValue>{filterDate}</SelectValue>
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectGroup>
//                 <SelectLabel>Thời gian</SelectLabel>
//                 <SelectItem value="day">Ngày</SelectItem>
//                 <SelectItem value="month">Tháng</SelectItem>
//                 <SelectItem value="year">Năm</SelectItem>
//                 </SelectGroup>
//             </SelectContent>
//         </Select>
//         <Button onClick={handleFilterSubmit}>Lọc</Button>
//       </div>
//       <Table>
//         <TableHeader>
//             <TableRow>
//                 <TableHead>Khách hàng</TableHead>
//                 <TableHead>Số tiền vay</TableHead>
//             </TableRow>
//         </TableHeader>
//       </Table>
//       <TableBody>
//         {data.map((item : any) => (            
//           <TableRow key={item.customerName}>
//             <TableCell className="font-medium">{item.customerName}</TableCell>
//             <TableCell>{item.loanAmount}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </div>
//   );
// };
return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id khách hàng</TableHead>
          <TableHead>Mã hợp đồng</TableHead>
          <TableHead>Người cho vay</TableHead>
          <TableHead>Số tiền vay</TableHead>
          <TableHead>Tiền đã giải ngân</TableHead>
          <TableHead>Số tiền đã trả</TableHead>
          <TableHead>Còn lại</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: any) => (
          <TableRow key={item.customerId}>
            <TableCell>{item.customerId}</TableCell>
            <TableCell>{item.contractId}</TableCell>
            <TableCell>{item.lenderName}</TableCell>
            <TableCell>{item.loanAmount}</TableCell>
            <TableCell>{item.disbursementAmount}</TableCell>
            <TableCell>{item.payedAmount}</TableCell>
            <TableCell>{item.remainAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}

export default ReportPage;

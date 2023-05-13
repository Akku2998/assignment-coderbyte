import { getRequestApi } from "./api"
import { useEffect, useState } from 'react';
import BasicTable from "./Table";
import CustomPieChart from "./PieChart";
import "./App.css"

function App() {
  const [tableData, setTableData] = useState([])

  const fetchApiData = async () => {
    
    const data = await getRequestApi()
    setTableData(data)
  }
  useEffect(() => {
    fetchApiData()
  },[])

  const diffMinutes = (dt2, dt1) =>  {
 
   let diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= 60;
   return Math.abs(Math.round(diff));
   
  }
  const exployeeDataWithTotalTimeWorked = tableData.map((employee) => ({ ...employee, totalTimeWorkedInMs: diffMinutes(new Date(employee.EndTimeUtc), new Date(employee.StarTimeUtc))})) 
  const [pagination,setPagination] = useState({ next: 15, prev: 0, page: 1 })
 
  const sortedEmployeeWithTimeWorked = exployeeDataWithTotalTimeWorked.sort((a,b) => a.totalTimeWorkedInMs - b.totalTimeWorkedInMs)
  const paginatedData = sortedEmployeeWithTimeWorked.slice(pagination.prev,pagination.next)

  const handlePagination = (event) => {
    const name = event.target.name
    if(name === "next" && pagination.next < sortedEmployeeWithTimeWorked.length) {
      setPagination({ next: pagination.next + 15, prev: pagination.prev + 15, page: pagination.page + 1})
    }

    if(name === "prev" && pagination.prev > 0) {
      setPagination({ next: pagination.next - 15, prev: pagination.prev - 15, page: pagination.page - 1})
    } 
  }
  return (
    <div className="flexBox">
      <div>
      <BasicTable employeeData={paginatedData} onPagination={handlePagination} pagination={pagination} />
      </div>
      <div>
      <CustomPieChart employeeData={paginatedData} />
      </div>
    </div>
  );
}

export default App;

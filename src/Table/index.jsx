import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BasicTable({ employeeData, pagination, onPagination }) {

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return { hours, minutes };
  }

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Total Time Worked</th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map((employee) => <tr key={employee.Id}>
          <td>{employee.EmployeeName}</td>
          <td>{`${toHoursAndMinutes(employee.totalTimeWorkedInMs).hours} hrs ${toHoursAndMinutes(employee.totalTimeWorkedInMs).minutes} min`}</td>
        </tr>)}
      </tbody>
    </Table>
    <Button variant="secondary" name="prev" onClick={onPagination}>Prev</Button>{' '}
    <Button variant="primary" name="next" onClick={onPagination}>Next</Button>{'  '}
    Page:: {pagination.page}
    </>
  );
}

export default BasicTable;
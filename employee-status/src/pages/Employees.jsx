import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import {
  Container,
  Form,
  Table,
  Alert
} from "react-bootstrap";

import employees from "../data/employees";



function Employees() {

  // URL query read karna
  const [searchParams] =
    useSearchParams();



  // Navigation function
  const navigate =
    useNavigate();




  // Current status read
  const status =
    searchParams.get("status") || "";





  // Dropdown change function
  function handleFilter(event) {

    // Selected value
    const selectedStatus =
      event.target.value;



    // URL update
    navigate(
      `/?status=${selectedStatus}`
    );
  }






  // Employee filtering
  let filteredEmployees =
    employees;



  // Agar status selected hai
  if (status) {

    filteredEmployees =
      employees.filter(

        (employee) =>
          employee.status === status
      );
  }







  return (

    <Container className="main-container">

      {/* Heading */}
      <h1 className="heading">
        Employee Dashboard
      </h1>






      {/* Dropdown */}
      <Form.Group
        className="filter-box"
      >

        <Form.Label>
          Filter Employees
        </Form.Label>


        <Form.Select

          value={status}

          onChange={handleFilter}
        >

          <option value="">
            All Employees
          </option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>

          <option value="leave">
            On Leave
          </option>

        </Form.Select>

      </Form.Group>








      {/* Alert */}
      <Alert
        variant="success"
        className="mt-4"
      >

        Current Filter:
        {status || " All"}

      </Alert>








      {/* Bootstrap Table */}
      <Table
        striped
        bordered
        hover
        responsive
        className="mt-4"
      >

        {/* Table head */}
        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Department</th>

            <th>Status</th>

          </tr>

        </thead>







        {/* Table body */}
        <tbody>

          {

            filteredEmployees.map(
              (employee) => (

                <tr
                  key={employee.id}
                >

                  <td>
                    {employee.id}
                  </td>

                  <td>
                    {employee.name}
                  </td>

                  <td>
                    {employee.department}
                  </td>

                  <td>
                    {employee.status}
                  </td>

                </tr>
              )
            )
          }

        </tbody>

      </Table>

    </Container>
  );
}

export default Employees;
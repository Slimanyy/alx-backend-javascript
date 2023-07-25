export function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
      getNumberOfDepartments: function (employees) {
        return Object.keys(employees).length;
      },
    };
  }
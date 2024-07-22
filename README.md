# employees-list-component

Explanation:
Imports: The code starts by importing the EmployeesListItem component and the CSS styles for the EmployeesList component. This keeps the component modular and maintainable.

EmployeesList Component: The EmployeesList component is a functional component that receives four props: data, onDelete, onToggleProp, and onSalaryChange.

Mapping Data: The component maps over the data array to generate a list of EmployeesListItem components. For each element in data, it destructures the id and spreads the rest of the properties into elemProps.

Returning EmployeesListItem: For each element, it returns an EmployeesListItem component with:

A unique key prop using the id.
Spread elemProps to pass down the employee's properties.
onDelete function, which binds the current id.
onToggleProp function, which binds the current id and the toggle property fetched from the event's target attribute.
onSalaryChange function, which binds the current id and the new salary.
Rendering the List: The component returns an unordered list (ul) with a class for styling, containing the array of EmployeesListItem components.

Export: Finally, the component is exported as the default export, making it available for import in other files.

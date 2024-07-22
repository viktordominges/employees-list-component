import EmployeesListItem from '../employees-list-item/employees-list-item'; // Import the EmployeesListItem component
import './employees-list.css'; // Import CSS styles for the EmployeesList component

// Define the EmployeesList functional component, accepting props: data, onDelete, onToggleProp, and onSalaryChange
const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    // Map over the data array to generate an array of EmployeesListItem components
    const elementsArr = data.map(elem => {

        // Destructure id from elem and spread the remaining properties into elemProps
        const {id, ...elemProps} = elem;

        return (
            // Render an EmployeesListItem component for each employee
            <EmployeesListItem 
                key={id} // Use id as the unique key for each item
                {...elemProps} // Spread the remaining properties as props to EmployeesListItem
                onDelete={() => {onDelete(id)}} // Pass a function to handle delete, binding the current id
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} // Pass a function to handle property toggle, binding the current id and the toggle property
                onSalaryChange={(newSalary) => onSalaryChange(id, newSalary)} // Pass a function to handle salary change, binding the current id and the new salary
            />
        )
    });

    return (
        // Render a list of EmployeesListItem components inside an unordered list with a specific class for styling
        <ul className="app-list list-group">
            {elementsArr}
        </ul>
    );
}

export default EmployeesList; // Export the EmployeesList component as the default export

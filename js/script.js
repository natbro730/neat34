// Get form and table elements
const userForm = document.getElementById('user-form');
const userTable = document.querySelector('table tbody');

// Event listener for form submission
userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = new Date().toLocaleString();

    // Create a new row in the table
    const newRow = userTable.insertRow();
    const cellNo = newRow.insertCell;
    const cellName = newRow.insertCell(1);
    const cellPhone = newRow.insertCell(2);
    const cellEmail = newRow.insertCell(3);
    const cellDate = newRow.insertCell(4);
    const cellActions = newRow.insertCell(5);

    cellNo.textContent = userTable.rows.length - 1;
    cellName.textContent = name;
    cellPhone.textContent = phone;
    cellEmail.textContent = email;
    cellDate.textContent = date;

    // Create edit and delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    cellActions.appendChild(editButton);
    cellActions.appendChild(deleteButton);

    // Clear form fields
    userForm.reset();
});

// Event delegation for edit and delete buttons
userTable.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        // Handle edit button click
        // You can implement edit functionality here
        console.log('Edit button clicked');
    }

    if (event.target.classList.contains('delete-btn')) {
        // Handle delete button click
        // You can implement delete functionality here
        console.log('Delete button clicked');
        
        // Remove the entire row when delete button is clicked
        event.target.closest('tr').remove();
    }
});

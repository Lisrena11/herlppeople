document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const task = document.getElementById('task').value;
    const assignee = document.getElementById('assignee').value;
    const status = document.getElementById('status').value;

    const ordersTable = document.getElementById('orders-table').getElementsByTagName('tbody')[0];
    const newRow = ordersTable.insertRow();

    const cellTask = newRow.insertCell(0);
    const cellAssignee = newRow.insertCell(1);
    const cellStatus = newRow.insertCell(2);

    cellTask.textContent = task;
    cellAssignee.textContent = assignee;
    cellStatus.textContent = status;

    document.getElementById('order-form').reset();
});

export default class TodoTable {
  constructor(eventManager) {
    this.container = document.getElementById('todo-table-container')
    this.eventManager = eventManager
    this.headers = {
      title: 'Title',
      description: 'Description',
      dueDate: 'Due date',
      createdAt: 'Created at',
    }

    this._intialize()
  }

  _intialize() {
    this.table = document.createElement('table')
    this.tableHead = document.createElement('thead')
    this.tableBody = document.createElement('tbody')

    const tableHeadRow = document.createElement('tr')
    for (const key in this.headers) {
      const tableHeadData = document.createElement('th')
      tableHeadData.textContent = this.headers[key]
      tableHeadRow.appendChild(tableHeadData)
    }

    this.tableHead.appendChild(tableHeadRow)

    this.table.append(this.tableHead, this.tableBody)
    this.container.appendChild(this.table)
  }

  render(todos) {
    this.tableBody.innerHTML = ''

    if (!todos || todos.length === 0) return

    for (const todo of todos) {
      const tableRow = document.createElement('tr')
      for (const key in this.headers) {
        const tableData = document.createElement('td')
        tableData.textContent = todo[key] ?? '-'
        tableRow.appendChild(tableData)
      }

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', () => {
        this.eventManager.publish('delete-todo', todo.id)
      })

      tableRow.appendChild(deleteButton)
      this.tableBody.appendChild(tableRow)
    }
  }
}

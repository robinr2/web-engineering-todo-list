export default class TodoController {
  constructor(eventManager) {
    this.todos = []
    this.eventManager = eventManager
  }

  addTodo(todo) {
    this.todos.push(todo)
    this.eventManager.publish('todos-updated', this.todos)
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.eventManager.publish('todos-updated', this.todos)
  }

  // _generateAddTodoForm() {
  //   const addTodoForm = document.createElement('form')
  //   addTodoForm.classList.add('add-todo')

  //   addTodoForm.innerHTML = `
  //   <label for="title">Title: </label>
  //   <input id="title" name="title" />
  //   <br>
  //   <label for="description">Description: </label>
  //   <input id="description" name="description" />
  //   <br>
  //   <label for="due-date">Due date: </label>
  //   <input id="due-date" type="date" name="due-date" />
  //   <br>
  //   <button value="submit">Add</button>
  //   <button>Clear</button>`

  //   return addTodoForm
  // }

  // _setListeners() {
  //   this.addTodoForm.addEventListener('submit', (event) => {
  //     event.preventDefault()

  //     const addTodoFormSubmit = this.addTodoForm.querySelector('button[value=submit]')
  //     const addTodoFormData = new FormData(this.addTodoForm, addTodoFormSubmit)

  //     const title = addTodoFormData.get('title')
  //     const description = addTodoFormData.get('description')
  //     const dueDate = addTodoFormData.get('due-date')

  //     this._addTodo(title, description, dueDate)
  //     this._render()
  //   })
  // }
}

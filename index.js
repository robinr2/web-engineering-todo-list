import Todo from './models/todo-model.js'
import TodoController from './controllers/todo-controller.js'
import TodoTable from './components/todo-table.js'
import EventManager from './services/event-manager.js'

function onLoad() {
  const todo1 = new Todo('bathroom', 'clean it', '2022-10-20')
  const todo2 = new Todo('living room', 'clean it', '2023-10-23')
  const todo3 = new Todo('kitchen', 'cook', '2024-12-12')

  const eventManager = new EventManager()
  const todoManager = new TodoController(eventManager)
  const todoTable = new TodoTable(eventManager)

  eventManager.subscribe('delete-todo', (id) => {
    todoManager.deleteTodo(id)
  })

  eventManager.subscribe('todos-updated', (todos) => {
    todoTable.render(todos)
  })

  todoManager.addTodo(todo1)
  todoManager.addTodo(todo2)
  todoManager.addTodo(todo3)
}

window.addEventListener('load', onLoad)

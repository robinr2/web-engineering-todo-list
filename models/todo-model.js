export default class Todo {
  constructor(title, description, dueDate) {
    this.id = crypto.randomUUID()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.createdAt = null
  }
}

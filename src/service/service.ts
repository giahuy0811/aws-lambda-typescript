import Todo from 'src/model/Todo';

export class TodoService {

  private readonly todos :Todo[] = [{todosId : '1231',title : 'Study English',description:'5 Hours',status : false,createdAt: '21321'}]

  createTodo(todo : Todo){
    this.todos.push(todo)
    return todo
  }


  getAllTodos(){
    return this.todos
  }

}

const todoService  = new TodoService();

export default todoService
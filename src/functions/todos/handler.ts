import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import todosService from '../../service/service'

export const getAllTodos = middyfy(() => {
  const todos = todosService.getAllTodos()

  return formatJSONResponse({
    todos
  })
})
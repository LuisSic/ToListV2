import { TASK_API } from "./constants";
import {
  DeleteTodo,
  EditTodo,
  PostTodo,
  ResultApi,
  Todo,
} from "./todo.interfaces";

interface FetchTodosParams {
  token: string;
}

export const createTodo = async (data: PostTodo): Promise<ResultApi<Todo>> => {
  try {
    const response = await fetch(`${TASK_API}/task`, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
        Authorization: data.token,
      },
      body: JSON.stringify(data.todo),
    });

    if (!response.ok) {
      return {
        type: "error",
        error: `API error: ${response.status}`,
      };
    }

    const todoData: Todo = await response.json();

    return {
      type: "success",
      data: todoData,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        error: `API error: ${error.message}`,
      };
    } else {
      return {
        type: "error",
        error: "An unknown error occurred",
      };
    }
  }
};

export const fetchTodos = async (
  params: FetchTodosParams
): Promise<ResultApi<Todo[]>> => {
  const response = await fetch(`${TASK_API}/tasks`, {
    headers: {
      Authorization: params.token,
    },
  });

  if (!response.ok) {
    return {
      type: "error",
      error: "Failed to fetch todos",
    };
  }

  const todosData: Todo[] = await response.json();

  return {
    type: "success",
    data: todosData,
  };
};

export const updateTodo = async (data: EditTodo): Promise<ResultApi<Todo>> => {
  try {
    const response = await fetch(`${TASK_API}/task/${data.todo.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: data.token,
      },
      body: JSON.stringify(data.todo),
    });

    if (!response.ok) {
      return {
        type: "error",
        error: `API error: ${response.status}`,
      };
    }

    const todoData: Todo = await response.json();
    return {
      type: "success",
      data: todoData,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        error: `API error: ${error.message}`,
      };
    } else {
      return {
        type: "error",
        error: "An unknown error occurred",
      };
    }
  }
};

export const deleteTodo = async (
  params: DeleteTodo
): Promise<ResultApi<string>> => {
  try {
    const response = await fetch(`${TASK_API}/task/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: params.token,
      },
    });

    if (!response.ok) {
      return {
        type: "error",
        error: `API error: ${response.status}`,
      };
    }
    return {
      type: "success",
      data: params.id,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        error: `API error: ${error.message}`,
      };
    } else {
      return {
        type: "error",
        error: "An unknown error occurred",
      };
    }
  }
};

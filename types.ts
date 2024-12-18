export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
};

export type RootStackParamList = {
  SignUp: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  SignIn: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  HomeScreen: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  AddTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  DetailTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;todoId: number;  };
  EditTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  ProfilScreen: undefined;
  ForgotPassword:  { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
};
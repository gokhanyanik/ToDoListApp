export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
};

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  HomeScreen: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  AddTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  DetailTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  EditTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  ProfilScreen: undefined;
  ForgotPassword: undefined;
};
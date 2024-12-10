export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
};

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  HomeScreen: { todos: Todo[] };
  AddTodo: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };
  DetailTodo: { todo: Todo };
  EditTodo: { todo: Todo };
  ProfilScreen: undefined;
  ForgotPassword: undefined;
};
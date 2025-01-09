/*
export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
};
*/

export type RootStackParamList = {

  SignUp: undefined;
  SignIn: undefined;
  HomeScreen: undefined;
  AddTodo: undefined;
  DetailTodo: { todoId: number };
  EditTodo: { todoId: number };
  ProfilScreen: undefined;
  ForgotPassword: undefined;
};
export enum Screens {
  Home = "HomeScreen",
  Add = "AddTodo",
  Profile = "ProfilScreen",
  Details = "DetailTodo",
  SignIn ="SignIn",
  SignUp="SignUp",
  Edit="EditTodo",
  Forgot="ForgotPassword"
}


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
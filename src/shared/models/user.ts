import { Task } from './task'

export class User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  registrationDate: Date;
  admin: boolean;
  createdTasks: Array<Task>;
  assignedTasks: Array<Task>;
}
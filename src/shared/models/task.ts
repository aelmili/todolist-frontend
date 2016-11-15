import { User } from './user'

export class Task{
  id: number;
  title: string;
  description: string;
  status: string;
  assignee: User = null;
  creator: User;
  creationDate: Date;
  closingDate: Date;
  deadline: Date;
}
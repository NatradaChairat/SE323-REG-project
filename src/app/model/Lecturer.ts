import { User } from './user';
import { Course } from './course';
export class Lecturer extends User {
  firstname: string;
  lastname: string;
  courses: Courses[];
}

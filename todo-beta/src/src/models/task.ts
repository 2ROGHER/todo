import { LEVELS } from "./levels";

export class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  levels: LEVELS;
  time: string;

  constructor(
    id: string,
    title: string,
    description: string,
    completed: boolean,
    levels: LEVELS,
    time: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.levels = levels;
    this.time = time;
  };
}

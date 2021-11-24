
export class TodoItem {
  task: string;
  complete: boolean;

  constructor(task: string, complete: boolean = false) {
    this.task = task;
    this.complete = complete;
  }
}

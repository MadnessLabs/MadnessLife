/**
 * A service for adding, editing, and deleting todos from your todo list
 */
import { DatabaseService } from "../services/Database";

export class TodoService {
  private db: DatabaseService = new DatabaseService();

  /**
   * This adds a todo to your todo list
   * @param payload Object of todo data
   */
  async add(payload: { task: string }) {
    const task = await this.db.add("todos", payload);

    return task;
  }
}

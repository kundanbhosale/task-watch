import Dexie, { TransactionMode } from 'dexie'
import { TaskBoard } from './taskboard'
import { TaskItem } from './taskitems'
import { TaskColumn } from './taskcolumns'
import { Page } from './pages'
import { Trash } from './trash'

export class LocalDB extends Dexie {
  taskBoards: Dexie.Table<TaskBoard, string>
  taskItems: Dexie.Table<TaskItem, string>
  taskColumns: Dexie.Table<TaskColumn, string>
  pages: Dexie.Table<Page, string>
  trash: Dexie.Table<Trash, string>
  constructor() {
    super('Kanban')
    this.version(1).stores({
      task_boards: 'id, title, owner, updated_at, created_at',
      task_columns: 'id, title, color, board_id, rank, updated_at, created_at',
      task_items:
        'id, title, status, board_id, page_id, rank, updated_at, created_at',
      pages: 'id, content, updated_at, created_at',
      trash: 'id, table, delete_it, data, created_at, updated_at',
    })
    this.taskBoards = this.table('task_boards')
    this.taskItems = this.table('task_items')
    this.taskColumns = this.table('task_columns')
    this.pages = this.table('pages')
    this.trash = this.table('trash')
  }
}

export const localDb = new LocalDB()

type TransactionWork<T> = (tables: {
  [key: string]: Dexie.Table<T, string>
}) => Promise<any>

type TransactionTables = {
  [key: string]: Dexie.Table<any, string>
}

export const performMultiTableTransaction = async <T>(
  mode: TransactionMode,
  tables: TransactionTables,
  work: TransactionWork<T>
): Promise<any> => {
  return await localDb.transaction(mode, Object.values(tables), async () => {
    return await work(tables)
  })
}

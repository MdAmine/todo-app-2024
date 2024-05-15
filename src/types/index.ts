export interface Todo {
  id: number
  name: string
  completed: boolean
  priority: Priority
}

export enum Priority {
  ALL = 'ALL',
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
}
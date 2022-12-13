export class Column {
    constructor(public name: string, public tasks: string[]) {}
}

export interface IColumn {
  name: string,
  tasks: any[]
}

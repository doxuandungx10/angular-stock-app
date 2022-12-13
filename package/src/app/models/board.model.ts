import { Column } from './column.model';
import { IColumn } from './column.model';

export class Board {
    constructor(public name: string, public columns: Column[]) {}
}

export interface IBoard {
  name: string,
  columns: IColumn[]
}

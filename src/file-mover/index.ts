/* eslint-disable no-console */
import { List } from 'src/types';

export default class FileMover {
  constructor(private list: List[]) {}

  move(source: string, destination: string): List[] {
    console.log(this.list);
    console.log(source);
    console.log(destination);
    return this.list;
  }
}

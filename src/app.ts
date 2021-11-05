/* eslint-disable no-console */
import FileMover from './file-mover';
import { FolderList } from './types';

const list: FolderList = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '4', name: 'File 3' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [{ id: '7', name: 'File 5' }],
  },
];

const resultList = new FileMover(list).moveFileToFolder('a', 'b');

console.log(resultList, 'resultList');

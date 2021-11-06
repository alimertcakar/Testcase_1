/* eslint-disable no-console */
import FileManager from './file-manager';
import { FolderList } from './types';
import { PerformanceTool } from './utils';

const folderList: FolderList = [
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

function run() {
  const fileManager = FileManager.create(folderList);
  return fileManager.moveFileToFolder('4', '6').folderList;
}
console.log('Starting!!');
PerformanceTool.measure(run, 150);

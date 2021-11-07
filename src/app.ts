/* eslint-disable no-console */
import FileManager1 from './solution-1/file-manager';
import FileManager2 from './solution-2/file-manager';
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

console.log('Starting!!');

// Performant approach (Single loop O(1))
// function solution1() {
//   const fileManager = FileManager1.create(folderList);
//   fileManager.moveFileToFolder('4', '6').folderList[1];
//   // return fileManager.moveFileToFolder('4', '6').folderList;
// }

// Scaleable & clean approach
function solution2() {
  const fileManager = FileManager2.create(folderList);
  fileManager.moveFileToFolder('4', '6').folderList[1];
  // return fileManager.moveFileToFolder('4', '6').folderList;
}

// PerformanceTool.measure(solution1, 1);
PerformanceTool.measure(solution2, 1);

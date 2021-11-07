import { FolderList } from 'src/types';

export const folderList1: FolderList = [
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

export const folderList1_Test1Result: FolderList = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [
      { id: '7', name: 'File 5' },
      { id: '4', name: 'File 3' },
    ],
  },
];

export const folderList2: FolderList = [
  {
    id: '1',
    name: 'Folder 1',
    files: [{ id: '2', name: 'File 1' }],
  },
  { id: '3', name: 'Folder 2', files: [] },
];

export const folderList3: FolderList = [
  {
    id: '1',
    name: 'Folder 1',
    files: [{ id: '2', name: 'File 1' }],
  },
  { id: '3', name: 'Folder 2', files: [{ id: '4', name: 'File 2' }] },
];

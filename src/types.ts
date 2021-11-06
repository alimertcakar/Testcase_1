export interface File {
  id: string;
  name: string;
}

export interface Folder {
  id: string;
  name: string;
  files: File[];
}

export enum FileType {
  Folder,
  File,
}

export type FolderList = Folder[];

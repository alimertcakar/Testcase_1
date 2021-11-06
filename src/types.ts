export interface File {
  id: string;
  name: string;
}

export interface Folder {
  id: string;
  name: string;
  files: File[];
}

export type FolderList = Folder[];

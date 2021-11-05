export type FileName = string;
export type FolderName = string;

export interface File {
  id: string;
  name: FileName;
}

export interface Folder {
  id: string;
  name: FolderName;
  files: File[];
}

export type FolderList = Folder[];

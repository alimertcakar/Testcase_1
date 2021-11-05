export interface File {
  id: string;
  name: string;
}

export interface List {
  id: string;
  name: string;
  files: File[];
}

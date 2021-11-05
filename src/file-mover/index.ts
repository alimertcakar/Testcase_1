/* eslint-disable no-console */
import { FileName, FolderName, List } from 'src/types';

interface FileMover {
  moveFileToFolder: (sourceFile: FileName, destinationFolder: FolderName) => List;

  // sourceFile: FileName;
  // destinationFolder: FolderName;
}

export default class FileMoverImpl implements FileMover {
  constructor(private list: List) {
    if (!list) {
      // throw new InvalidParameterError();
    }
  }

  moveFileToFolder(sourceFile: FileName, destinationFolder: FolderName): List {
    if (!sourceFile || destinationFolder) {
      // throw new InvalidParameterError();
    }
    console.log(this.list);
    console.log(sourceFile);
    console.log(destinationFolder);
    const newList = this.list;
    return newList;
  }
}

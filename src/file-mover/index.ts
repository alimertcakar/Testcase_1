/* eslint-disable no-console */
import { FileName, FolderName, FolderList } from 'src/types';
/**
 * Moves a file to a new location.
 */
interface FileMover {
  moveFileToFolder: (sourceFile: FileName, destinationFolder: FolderName) => FolderList;
}

export default class FileMoverImpl implements FileMover {
  constructor(private list: FolderList) {
    if (!list) {
      // throw new InvalidParameterError();
    }
  }

  moveFileToFolder(sourceFile: FileName, destinationFolder: FolderName): FolderList {
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

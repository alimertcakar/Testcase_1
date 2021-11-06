/* eslint-disable no-console */
import { FileName, FolderName, FolderList } from 'src/types';
/**
 * Moves a file to a new location.
 */
interface FileManager {
  moveFileToFolder: (sourceFile: FileName, destinationFolder: FolderName) => FileMoverImpl;
}

export default class FileMoverImpl implements FileManager {
  private constructor(private _folderList: FolderList) {}

  static create(_folderList: FolderList): FileMoverImpl {
    if (!_folderList) {
      throw new Error('Invalid list');
    }
    return new FileMoverImpl(_folderList);
  }

  get folderList(): FolderList {
    return this._folderList;
  }

  moveFileToFolder(sourceFile: FileName, destinationFolder: FolderName): FileMoverImpl {
    if (!sourceFile || destinationFolder) {
      // throw new InvalidParameterError();
    }
    const newList: FolderList = [];
    // move...
    this.list = newList;
    return this;
  }
}

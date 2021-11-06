/* eslint-disable no-console */
import { FolderList } from '../../types';
import { anyEmpty } from '../../utils';

interface FileManager {
  //*  moves file to a folder and returns a new FileManager instance */
  moveFileToFolder: (sourceFile: string, destinationFolder: string) => FileMoverImpl;
}

// tuple [folderId,fileId]
type ReturnGetFileById = [string, string];

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

  public moveFileToFolder(sourceFileId: string, destinationFolderId: string): FileMoverImpl {
    if (anyEmpty(sourceFileId, destinationFolderId)) {
      throw new Error('Invalid parameter');
    }

    //You cannot move a folder
    //You cannot specify a file as the destination

    // copy folderList
    const newFolderList: FolderList = this._folderList;

    // get file to copy
    const [folderId, fileId] = this.getFileById(sourceFileId);

    // splice the file
    const fileToMove = newFolderList[+folderId].files.splice(+fileId, +fileId)[0];

    // move...
    const destinationFolderIndex = this.getFolderById(destinationFolderId);
    newFolderList[destinationFolderIndex].files.push(fileToMove);

    this._folderList = newFolderList;
    return this;
  }

  private getFileById(id: string): ReturnGetFileById {
    for (let i = 0; i < this.folderList.length; i++) {
      const folder = this.folderList[i];
      for (let j = 0; j < folder.files.length; j++) {
        const file = folder.files[j];
        if (file.id === id) return [i.toString(), j.toString()];
      }
    }
    throw new Error('File to move not found');
  }

  private getFolderById(id: string) {
    return this._folderList.findIndex((folder) => folder.id === id);
  }
}

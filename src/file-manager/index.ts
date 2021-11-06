/* eslint-disable no-console */
import { FolderList } from 'src/types';
import { allEmpty } from 'src/utils';

interface FileManager {
  //*  moves file to a folder and returns a new FileManager instance */
  moveFileToFolder: (sourceFile: string, destinationFolder: string) => FileMoverImpl;
}

// returns tuple [folderId,fileId]
type ReturnGetFileById = [string | null, string | null];

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
    if (allEmpty([sourceFileId, destinationFolderId])) {
      throw new Error('Invalid parameter');
    }
    // copy folderList
    const newFolderList: FolderList = this._folderList;

    // get file to copy
    const [folderId, fileId] = this.getFileById(sourceFileId);
    if (!folderId || !fileId) {
      throw new Error('File to move not found');
    }
    const fileToMove = newFolderList[+folderId].files.splice(+fileId, +fileId)[0];

    const destinationFolderIndex = this.getFolderById(destinationFolderId);

    // move...
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

    return [null, null];
  }

  private getFolderById(id: string) {
    return this._folderList.findIndex((folder) => folder.id === id);
  }
}

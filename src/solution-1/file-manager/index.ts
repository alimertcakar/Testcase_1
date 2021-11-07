// import FileNotFoundError from '../../common/errors/FileNotFoundError';
// import FolderNotFoundError from '../../common/errors/FolderNotFoundError';
// import TriedToFindFileButFoundFolderError from '../../common/errors/TriedToFindAFileButFoundFolderError';
// import TriedToFindFolderButFoundFileError from '../../common/errors/TriedToFindFolderButFoundFileError';
// tuple [folderId,fileId]
// type ReturnGetById = [number, number];
// type ReturnGet = [number | null, number | null];
// import { anyEmpty, deepCopy, isEmpty } from '../../utils';
import { FolderList } from '../../types';

interface FileManager1 {
  move: (sourceFile: string, destinationFolder: string) => FileMoverImpl;
}

export default class FileMoverImpl implements FileManager1 {
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

  move(sourceFileId: string, destinationFolderId: string) {
    let fileToMove = null;
    let destFolderIndex = null;
    for (let folderIndex = 0; folderIndex < this.folderList.length; folderIndex++) {
      const folder = this.folderList[folderIndex];

      if (folder.id === destinationFolderId) {
        destFolderIndex = folderIndex;
      }
      if (folder.id === sourceFileId) {
        throw new Error('You cannot move a folder');
      }

      for (let fileIndex = 0; fileIndex < folder.files.length; fileIndex++) {
        const file = folder.files[fileIndex];

        if (file.id === sourceFileId) {
          fileToMove = file;
          folder.files.splice(fileIndex, 1);
          break;
        }
        if (file.id === destinationFolderId) {
          throw new Error('You cannot specify a file as the destination');
        }
      }

      if (fileToMove && destFolderIndex) break;
    }
    if (!fileToMove) {
      throw Error('File not found');
    }
    if (!destFolderIndex) {
      throw Error('Folder not found');
    }
    const targetFolder = this._folderList[destFolderIndex];
    targetFolder.files.push(fileToMove);

    return this;
  }
}

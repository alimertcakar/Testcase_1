/* eslint-disable no-console */
import FileNotFoundError from '../../common/errors/FileNotFoundError';
import FolderNotFoundError from '../../common/errors/FolderNotFoundError';
import TriedToFindFileButFoundFolderError from '../../common/errors/TriedToFindAFileButFoundFolderError';
import TriedToFindFolderButFoundFileError from '../../common/errors/TriedToFindFolderButFoundFileError';
import { FolderList } from '../../types';
import { anyEmpty, deepCopy, isEmpty } from '../../utils';
// import { FileType } from '../../types';

interface FileManager {
  moveFileToFolder: (sourceFile: string, destinationFolder: string) => FileMoverImpl;
}

// tuple [folderId,fileId]
type ReturnGetById = [number, number];
type ReturnGet = [number | null, number | null];
// type ReturnGetMany = Map<{ id: string; type: string }, ReturnGet>;

export default class FileMoverImpl implements FileManager {
  private _folderList: FolderList;
  private constructor(folderList: FolderList) {
    this._folderList = deepCopy(folderList);
  }

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

    const nextFolderList: FolderList = deepCopy(this._folderList);

    try {
      const [folderId, fileId] = this.getFileById(sourceFileId);
      const fileToMove = nextFolderList[+folderId].files.splice(+fileId, 1)[0];
      const [destinationFolder] = this.getFolderById(destinationFolderId);

      nextFolderList[+destinationFolder].files.push(fileToMove);
    } catch (e) {
      // Burası biraz redundant :), ama testleri override etmek istemedim.
      if (e instanceof TriedToFindFileButFoundFolderError) {
        throw new Error('You cannot move a folder');
      } else if (e instanceof TriedToFindFolderButFoundFileError) {
        throw new Error('You cannot specify a file as the destination');
      } else {
        // console.log(e, 'e');
        throw e;
      }
    }

    this._folderList = nextFolderList;
    return this;
  }

  private getFileById(id: string): ReturnGetById {
    const [folder, file] = this.get(id);

    if (isEmpty(file) && !isEmpty(folder)) {
      // throw new Error('Tried to find a file but found folder');
      throw new TriedToFindFileButFoundFolderError();
    } else if (isEmpty(file)) {
      // throw new Error('File  not found');
      throw new FileNotFoundError();
    } else {
      return [<number>folder, <number>file];
    }
  }

  private getFolderById(id: string): ReturnGetById {
    const [folder, file] = this.get(id);

    if (!isEmpty(file)) {
      throw new TriedToFindFolderButFoundFileError();
      // throw new Error('Tried to find a folder but found file');
    } else if (isEmpty(folder)) {
      throw new FolderNotFoundError();
      // throw new Error('Folder not found');
    } else {
      return [<number>folder, <number>file];
    }
  }

  /**
   * Find many files or folders by id. More performant then multiple get
   * @param id file / folder id
   */
  // private getMany(ids: Array<string>): ReturnGetMany {
  //   let result = new Map(); //ReturnGet[]
  //   this._folderList.forEach((folder, folderIndex) => {
  //     if (ids.includes(folder.id))
  //       result.set({ id: folder.id, type: FileType.Folder }, [folderIndex, null]);
  //     folder.files.forEach((file, fileIndex) => {
  //       if (ids.includes(file.id))
  //         result.set({ id: folder.id, type: FileType.File }, [folderIndex, fileIndex]);
  //     });
  //   });

  //   return result;
  // }

  /**
   * Find file or folder by id
   * @param id file / folder id
   */
  private get(id: string) {
    let result: ReturnGet = [null, null];
    this._folderList.forEach((folder, folderIndex) => {
      if (folder.id === id) result = [folderIndex, null];
      folder.files.forEach((file, fileIndex) => {
        if (file.id === id) result = [folderIndex, fileIndex];
      });
    });

    return result;
  }
}

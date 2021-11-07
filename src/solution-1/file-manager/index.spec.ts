import { deepCopy } from '../../utils';
import FileManager from '../file-manager/index';
import {
  folderList1,
  folderList1_Test1Result,
  folderList2,
  folderList3,
} from '../../common/mock/index';

describe('move', () => {
  it('moves given file to another folder', () => {
    const list = folderList1;
    const result = folderList1_Test1Result;
    const fileManager = FileManager.create(list);

    fileManager.move('4', '6');
    expect(fileManager.folderList).toStrictEqual(result);
  });

  it('throws error if given source is not a file', () => {
    const list = folderList2;
    const fileManager = FileManager.create(list);

    expect(() => fileManager.move('3', '1')).toThrow('You cannot move a folder');
  });

  it('throws error if given destination is not a folder', () => {
    const list = folderList3;
    const fileManager = FileManager.create(list);

    expect(() => fileManager.move('2', '4')).toThrow(
      'You cannot specify a file as the destination',
    );
  });

  it('throws error if given file does not exist at all', () => {
    const list = folderList3;
    const fileManager = FileManager.create(list);

    expect(() => fileManager.move('-1', '6')).toThrow('File not found');
  });

  it('throws error if destination folder does not exist at all', () => {
    const list = folderList3;
    const fileManager = FileManager.create(list);
    expect(() => fileManager.move('4', '-1')).toThrow('Folder not found');
  });

  it('is immutable, source FolderList stays unaffected', () => {
    const list = folderList1;
    const listCopy = deepCopy(folderList1);
    // const result = folderList1_Test1Result; --- irrelevant
    const fileManager = FileManager.create(list);
    fileManager.move('4', '6');

    expect(list).toStrictEqual(listCopy);
  });
});

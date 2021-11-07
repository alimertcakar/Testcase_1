import {
  folderList1,
  folderList1_Test1Result,
  //   folderList2,
  //   folderList3,
} from '../../common/mock/index';
import FileManager from '../file-manager/index';

describe('move', () => {
  it('moves given file to another folder', () => {
    const list = folderList1;
    const result = folderList1_Test1Result;
    const fileManager = FileManager.create(list);

    fileManager.moveFileToFolder('4', '6');
    console.log(fileManager.folderList[0], 'fileManager.folderList');
    console.log(result[0], 'result');

    expect(fileManager.folderList).toStrictEqual(result);
  });

  //   it('throws error if given source is not a file', () => {
  //     const list = folderList2;
  //     const fileManager = FileManager.create(list);

  //     expect(() => fileManager.moveFileToFolder('3', '1')).toThrow('You cannot move a folder');
  //   });

  //   it('throws error if given destination is not a folder', () => {
  //     const list = folderList3;
  //     const fileManager = FileManager.create(list);

  //     expect(() => fileManager.moveFileToFolder('2', '4')).toThrow(
  //       'You cannot specify a file as the destination',
  //     );
  //   });
});

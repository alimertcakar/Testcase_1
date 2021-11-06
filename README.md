## DISCLAIMER: Solution 1 - 2

Solution 1: Performance based approach, runs extremely fast.
Solution 2: Scalable object oriented approach, still fast but better code quality IMO.

## Acceptance criteria

Imagine an array that contains folders. These folders can have files in it. `move` function moves a file to another folder and returns the new state of given list.

### Move function signature

| Key         | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| list        | Folder[] | Given list                   |
| source      | string   | Id of the moved file         |
| destination | string   | Id of the folder to be moved |

### Folder shape

| Key   | Type    | Description                 |
| ----- | ------- | --------------------------- |
| id    | string  | Unique identifier of folder |
| name  | string  | Name of the folder          |
| files | File [] | Files in this folder        |

### File shape

| Key  | Type   | Description               |
| ---- | ------ | ------------------------- |
| id   | string | Unique identifier of file |
| name | string | Name of the file          |

>  All IDs are unique.


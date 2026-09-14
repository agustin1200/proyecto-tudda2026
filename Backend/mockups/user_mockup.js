export class UserMockup {
  users = [
    { id: 1, name: 'Alice', password: '1234' },
    { id: 2, name: 'Bob', password: '1234' },
    { id: 3, name: 'Charlie', password: '1234' },
  ];

  constructor() {
  }

  getList() {
    return this.users;
  }
}
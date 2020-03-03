
//permissions?

class Group {
    constructor(users) {
        this.users = users; //list of accountIds
    }

    get users() {
        return this.users;
    }

    addUser(accountId) {
        this.users.push(accountId);
    }

    removeUser(accountId) {
        let index = this.users.indexOf(accountId);
        this.users.splice(index, 1);
    }
}
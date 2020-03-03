
//username vs email

class Account {
    constructor(username, password, accountId) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }

    get username() {
        return this.username;
    }

    get accountId() {
        return this.accountId;
    }
}
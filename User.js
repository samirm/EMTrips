
// user
// group
// trip

class User {
    constructor(name, accountId, connections) {
        this.name = name;
        this.accountId = accountId;
        this.connections = connections;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get account() {

    }

    get connections() {
        return this.connections;
    }
}
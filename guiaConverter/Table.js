class Table {

    constructor(arr) {
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get CountRow() {
        return this.rows.length;
    }

    get CountColumn() {
        return this.header.length;
    }
}

module.exports = Table;
class Processor {

    static Process(data) {
        var brokeLines = data.split("\r\n");
        var rows = [];

        brokeLines.forEach(row => {
            var arr = row.split(',');
            rows.push(arr);
        })

        return rows;
    }
}

module.exports = Processor;
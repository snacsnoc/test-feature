function printTable() {
    var data = [{
        name: "John",
        age: 22,
        city: "Boston"
    }, {
        name: "Jane",
        age: 34,
        city: "Toronto"
    }, {
        name: "Jim",
        age: 42,
        city: "Paris"
    }];
    var table = "<table border='7'><tr><th>Name</th><th>Age</th><th>City</th></tr>";
    for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].name + "</td>";
        table += "<td>" + data[i].age + "</td>";
        table += "<td>" + data[i].city + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.write(table);
}
printTable()

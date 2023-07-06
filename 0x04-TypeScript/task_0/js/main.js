var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "San Francisco"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
thead.innerHTML = "\n  <tr>\n    <th>First Name</th>\n    <th>Location</th>\n  </tr>\n";
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var tr = document.createElement("tr");
    var tdFirstName = document.createElement("td");
    var tdLocation = document.createElement("td");
    tdFirstName.textContent = student.firstName;
    tdLocation.textContent = student.location;
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLocation);
    tbody.appendChild(tr);
}
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

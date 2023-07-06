interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  location: "San Francisco",
};

const student2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Los Angeles",
};

const studentsList = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

thead.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
`;

for (const student of studentsList) {
  const tr = document.createElement("tr");
  const tdFirstName = document.createElement("td");
  const tdLocation = document.createElement("td");

  tdFirstName.textContent = student.firstName;
  tdLocation.textContent = student.location;

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLocation);

  tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);


const data = [
  { sno: 1, name: "Ravi Kumar A", age: 32, state: "Tamil Nadu", gender: "Male", type: "Covaxin", date: "2021-09-01", dose: "1st" },
  { sno: 2, name: "Meeta S D", age: 68, state: "Delhi", gender: "Female", type: "Covishield", date: "2021-09-27", dose: "2nd" },
  { sno: 3, name: "Anil Kapoor B", age: 60, state: "Delhi", gender: "Male", type: "Covishield", date: "2021-07-20", dose: "2nd" },
  { sno: 4, name: "Sneha Jain", age: 35, state: "Gujarat", gender: "Female", type: "Covaxin", date: "2021-07-09", dose: "1st" },
  { sno: 5, name: "Keerthna S", age: 45, state: "Tamil Nadu", gender: "Female", type: "Covaxin", date: "2021-09-10", dose: "1st" },
  { sno: 6, name: "Rajiv Das", age: 35, state: "West Bengal", gender: "Male", type: "Covishield", date: "2021-09-21", dose: "2nd" },
  { sno: 7, name: "Vikzam S", age: 37, state: "Karnataka", gender: "Male", type: "Covaxin", date: "2021-09-19", dose: "1st" },
  { sno: 8, name: "Pooja Mehta", age: 44, state: "Telangana", gender: "Female", type: "Covishield", date: "2021-09-22", dose: "2nd" },
  { sno: 9, name: "Arun B", age: 31, state: "Andhra Pradesh", gender: "Male", type: "Covaxin", date: "2021-09-25", dose: "1st" }
];

const tbody = document.getElementById("vaccinationTableBody");

data.forEach(row => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.sno}</td>
    <td>${row.name}</td>
    <td>${row.age}</td>
    <td>${row.state}</td>
    <td>${row.gender}</td>
    <td><span class="vaccine-badge ${row.type.toLowerCase()}">${row.type}</span></td>
    <td>${row.date}</td>
    <td><span class="dose-badge dose-${row.dose === '1st' ? '1st' : '2nd'}">${row.dose}</span></td>
  `;
  tbody.appendChild(tr);
});

// Show the table and hide loading
document.getElementById("loadingState").style.display = "none";
document.getElementById("vaccinationTable").style.display = "table";

// Update stats cards
const totalVaccinated = data.length;
const firstDose = data.filter(d => d.dose === "1st").length;
const secondDose = data.filter(d => d.dose === "2nd").length;
const covaxinCount = data.filter(d => d.type.toLowerCase() === "covaxin").length;

document.getElementById("totalVaccinated").textContent = totalVaccinated;
document.getElementById("firstDose").textContent = firstDose;
document.getElementById("secondDose").textContent = secondDose;
document.getElementById("covaxinCount").textContent = covaxinCount;

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = tbody.getElementsByTagName("tr");
  Array.from(rows).forEach(row => {
    const cells = row.getElementsByTagName("td");
    const match = Array.from(cells).some(td => td.textContent.toLowerCase().includes(filter));
    row.style.display = match ? "" : "none";
  });
});

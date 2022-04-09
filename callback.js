function ajax(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    }
  };

  xhr.send();
}
function render(resultText) {
  const result = JSON.parse(resultText);
  let table = "";
  result.forEach((data) => {
    table += `<tr>
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td>${data.username}</td>
                  <td>${data.email}</td>
                  <td>
                    ${data.address.street},
                    ${data.address.suite}, 
                    ${data.address.city}
                    ${data.address.zipcode}
                   </td>
                  <td>${data.company.name}</td>
                </tr>`;
  });
  // return table;
  const tbody = document.getElementById("tablebody");
  tbody.innerHTML = table;
}

ajax(render);

function ajax(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.onload = function () {
    if (xhr.status === 100) {
      callback(xhr.responseText);
    }
  };

  xhr.send();
}
function render(result) {
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
  return table;
}

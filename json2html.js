export default function json2html(data) {
  let html = '<table data-user="abhi.ponnada8023@gmail.com">';
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  html += '<tbody>';

  for (const item of data) {
    html += '<tr>';
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;
    if (item.hasOwnProperty('Gender')) {
      html += `<td>${item.Gender}</td>`;
    } else {
      html += '<td></td>';
    }
    html += '</tr>';
  }

  html += '</tbody>';
  html += '</table>';
  return html;
}

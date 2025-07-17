let html = `<table width="100%" border="1" cellpadding="0" cellspacing="0">`;
html += `<tr>`;
for (let i = 1; i <= 5; i++) {
  html += `<th>${i}</th>`;
}
html += `</tr>`;
html += `<tr>`;
for (let i = 1; i <= 5; i++) {
  html += `<td>`;
  for (let j = 1; j <= 10; j++) {
    html += `${i} x ${j} = ${i * j}<br>`;
  }
  html += `</td>`;
}
html += `</tr>`;

html += `<tr>`;
for (let i = 6; i <= 10; i++) {
  html += `<th>${i}</th>`;
}
html += `</tr>`;
html += `<tr>`;
for (let i = 6; i <= 10; i++) {
  html += `<td>`;
  for (let j = 1; j <= 10; j++) {
    html += `${i} x ${j} = ${i * j}<br>`;
  }
  html += `</td>`;
}
html += `</tr>`;

html += `</table>`;
document.body.innerHTML = html;

document.getElementById('credential-form').addEventListener('submit', addCredential);

function addCredential(e) {
  e.preventDefault();
  const site = document.getElementById('site').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const item = document.createElement('li');
  item.className = 'credential-item';
  item.innerHTML = `
    <strong>${site}</strong><br/>
    Username: ${username}<br/>
    Password: ${password}
  `;

  document.getElementById('credential-list').appendChild(item);
  e.target.reset();
}

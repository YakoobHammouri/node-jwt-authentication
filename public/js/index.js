function login() {
  const loginbtn = document.getElementById('btnlog');
  if (!loginbtn) return;
  loginbtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 403) {
          alert(data.messag);
          return;
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  });
}

window.onload = login();

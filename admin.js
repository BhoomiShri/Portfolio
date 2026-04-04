// Admin
function login(){
 if(username.value==='admin' && password.value==='1234'){
  document.getElementById('loginBox').style.display='none';
  let resDiv=document.getElementById('responses');
  resDiv.style.display='block';
  let arr=JSON.parse(localStorage.getItem('msgs')||'[]');
  resDiv.innerHTML=arr.map(m=>`<div class='card'>
    <b>${m.name}</b> (${m.email})<br>
    ${m.message}<br>
    <small>${m.time}</small>
  </div>`).join('');
 } else alert('Wrong credentials');
}
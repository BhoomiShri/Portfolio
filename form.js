const form=document.getElementById('contactForm');
form.onsubmit=e=>{
 e.preventDefault();
 let email=document.getElementById('email').value;
 let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if(!regex.test(email)){
  document.getElementById('emailError').innerText='Invalid email';
  return;
 }
 document.getElementById('emailError').innerText='';
 let data={
  name:document.getElementById('name').value,
  email,
  message:document.getElementById('message').value,
  time:new Date().toLocaleString()
 };
 let arr=JSON.parse(localStorage.getItem('msgs')||'[]');
 arr.push(data);
 localStorage.setItem('msgs',JSON.stringify(arr));
 alert('Submitted');
 form.reset();
};
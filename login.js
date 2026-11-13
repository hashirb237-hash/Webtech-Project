D.login=f=>{const em=f.email.value.trim(),nm=f.fullname.value.trim()||em.split('@')[0].replace(/[^a-z]/gi,'')||'Friend',u={name:nm[0].toUpperCase()+nm.slice(1),email:em};
 localStorage.drip_user=JSON.stringify(u);f.rem.checked?localStorage.drip_email=em:localStorage.removeItem('drip_email');
 setTimeout(()=>location.href='index.html',1200);return 'Welcome, '+u.name+'! Redirecting…'};
/* ---- login page: tabs + show/hide password + remembered email ---- */
const eye=$('#eye'),f=eye.form;
$$('.tab').forEach(t=>t.onclick=()=>{const up=t.dataset.m=='up';
 $$('.tab').forEach(x=>x.classList.toggle('on',x==t));$$('.su').forEach(x=>x.hidden=!up);
 $('#ah').textContent=up?'Join the drip':'Welcome back';$('#sub span').textContent=up?'Create account':'Log in';
 $$('.f small').forEach(s=>s.textContent='');$$('.bad').forEach(x=>x.classList.remove('bad'))});
 eye.onclick=()=>{const h=f.pass.type=='password';f.pass.type=h?'text':'password';eye.textContent=h?'Hide':'Show'};
 f.email.value=localStorage.drip_email||'';f.rem.checked=!!localStorage.drip_email

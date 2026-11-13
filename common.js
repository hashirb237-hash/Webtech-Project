const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* ---- PRODUCTS: add a new item here + drop its photo in /images ---- */
const P=[
{n:'Skyline Hoodie',p:3500,c:'men',i:'product.jpg'},
{n:'Blessed Graphic Tee',p:2499,c:'men',i:'product1.jpg'},
{n:'Mono Print Hoodie',p:4299,c:'women',i:'product2.jpg'},
{n:'Olive Cargo Pants',p:3299,c:'men',i:'product3.jpg'},
{n:'Rock Motif Tee',p:2299,c:'men',i:'product4.jpg'},
{n:'Chaos Denim Tee',p:2799,c:'men',i:'product5.jpg'},
{n:'Fuchsia Crewneck',p:3199,c:'women',i:'product6.jpg'},
{n:'Stone Cargo Pants',p:3499,c:'men',i:'product7.jpg'},
{n:'Grey Co-ord Set',p:4999,c:'men',i:'product8.jpg'},
{n:'New Drop',p:0,c:'women',i:'product9.jpg'},
{n:'New Drop',p:0,c:'women',i:'product10.jpg'},
{n:'New Drop',p:0,c:'men',i:'product11.jpg'}];
const R=n=>n?'Rs. '+n.toLocaleString('en-US'):'Soon';
const cards=ks=>ks.map(k=>`<a class="card c${k%4}" href="Productofthemonth.html?p=${k}"><img src="images/${P[k].i}" alt="${P[k].n}" loading="lazy"><h3>${P[k].n}</h3><span>${R(P[k].p)}</span></a>`).join('');
let U=null;try{U=JSON.parse(localStorage.drip_user)}catch(e){}
const all=P.map((_,k)=>k);
const page=location.pathname.split('/').pop()||'index.html';

/* ---- shared header + footer (same on every page) ---- */
const L=[['index','Home'],['collection','Collection'],['lookbook','Lookbook'],['about','Our World'],['Productofthemonth','Product of the Month'],['reviews','Reviews']];
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">DRIpZ<b>.</b></a><nav>${L.map(([f,t])=>`<a href="${f}.html"${page==f+'.html'?' class="on"':''}>${t}</a>`).join('')}</nav><div class="acts"><span>Bag (<b id="bg">${localStorage.drip_bag||0}</b>)</span>${U?'<a href="#" id="lo"></a>':'<a class="pill" href="login.html">Login</a>'}</div><button id="mn" aria-label="Menu">☰</button></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="nl"><h2>Style. Technical.<br>Innovative.</h2><form data-ok="news" novalidate><span><input name="email" data-v="email" placeholder="Enter your email" aria-label="Email"><button class="rb on" aria-label="Subscribe">→</button></span><small></small><p class="ok"></p></form></div><div class="fr"><b class="logo">DRIpZ<b>.</b></b><div><h4>Shop</h4><a href="collection.html">Collection</a><a href="lookbook.html">Lookbook</a><a href="Productofthemonth.html">Product of the Month</a></div><div><h4>Company</h4><a href="about.html">Our World</a><a href="reviews.html">Reviews</a></div><div><h4>Account</h4><a href="login.html">Login</a></div></div><p class="cp">© 2026 DRIpZ. Wear your energy.</p></footer>`);
$('#mn').onclick=()=>document.body.classList.toggle('mo');
if(U){const l=$('#lo');l.textContent='Hi, '+U.name+' ✕';l.onclick=e=>{e.preventDefault();localStorage.removeItem('drip_user');location.reload()}}

/* ---- missing images keep their coloured space ---- */
addEventListener('error',e=>e.target.tagName=='IMG'&&(e.target.hidden=1),true);
$$('img').forEach(i=>i.complete&&!i.naturalWidth&&(i.hidden=1));

/* ---- input validation (login, sign-up, newsletter, review) ---- */
const V={
 fullname:[v=>/^[A-Za-z][A-Za-z '-]{1,29}$/.test(v),'Enter your name (letters only, 2–30 characters)'],
 email:[v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),'Enter a valid email, e.g. name@mail.com'],
 pass:[v=>v.length>=8&&/[A-Za-z]/.test(v)&&/\d/.test(v),'Use 8+ characters with at least one letter and one number'],
 match:[(v,f)=>v===f.elements.pass.value,'Passwords do not match'],
 msg:[v=>v.length>=10,'Write at least 10 characters'],
 rate:[v=>v>=1,'Choose a rating']};
const chk=i=>{const[t,m]=V[i.dataset.v],ok=t(i.dataset.v=='pass'||i.dataset.v=='match'?i.value:i.value.trim(),i.form);
 i.classList.toggle('bad',!ok);(i.closest('label')||i.form).querySelector('small').textContent=ok?'':m;return ok};
const D={news:()=>'Thanks for subscribing!'};
/* pages add their own handlers, e.g. D.login */
$$('form[data-ok]').forEach(f=>{f.noValidate=true;
 f.addEventListener('focusout',e=>e.target.dataset.v&&chk(e.target));
 f.addEventListener('input',e=>e.target.classList.contains('bad')&&chk(e.target));
 f.onsubmit=e=>{e.preventDefault();
  const bad=$$('[data-v]').filter(i=>i.form==f&&!i.closest('[hidden]')&&!chk(i));
  if(bad.length)return bad[0].focus();
  f.querySelector('.ok').textContent=D[f.dataset.ok](f);f.dataset.ok!='login'&&f.reset()}});


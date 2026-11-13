const lk=$('#lk');$$('.row').forEach(r=>r.onmouseenter=r.onclick=()=>{
 $$('.row').forEach(x=>x.classList.toggle('on',x==r));lk.hidden=false;lk.src='images/'+r.dataset.i});


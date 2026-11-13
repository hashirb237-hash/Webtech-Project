const g=$('[data-cards=all]');g.innerHTML=cards(all);
$$('[data-f]').forEach(b=>b.onclick=()=>{$$('[data-f]').forEach(x=>x.classList.toggle('on',x==b));
 g.innerHTML=cards(all.filter(k=>b.dataset.f=='all'||P[k].c==b.dataset.f))});


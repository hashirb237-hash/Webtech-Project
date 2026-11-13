const pt=$('#pt');{
 const k=Math.min(Math.max((+new URLSearchParams(location.search).get('p'))||0,0),P.length-1),p=P[k],go=n=>location.search='?p='+(n+P.length)%P.length;
 document.title=p.n+' | DRIpZ';pt.textContent=p.n;$('#pr').textContent=p.p?R(p.p):'Coming soon';
 $('#pi').hidden=false;$('#pi').src='images/'+p.i;$('#pi').alt=p.n;$('#ptag').hidden=$('#sold').hidden=k>0;
 $('#pp').onclick=()=>go(k-1);$('#pn').onclick=()=>go(k+1);
 $('#cols').innerHTML=[['#0047ff','Blue'],['#06150c','Black'],['#0a9a2f','Green'],['#f5c400','Yellow']].map(([c,n],i)=>`<i class="sw${i?'':' on'}" style="background:${c}" title="${n}"></i>`).join('');
 $('#sz').innerHTML=['XS','S','M','L','XL'].map(s=>`<button class="chip">${s}</button>`).join('');
 $('.thumbs').innerHTML=cards(all.filter(x=>x!=k&&P[x].p).slice(0,3));
 $('.pinfo').onclick=e=>{const t=e.target;t.matches('.sw,.chip')&&[...t.parentNode.children].forEach(c=>c.classList.toggle('on',c==t))};
 $('#add').onclick=()=>{const s=$('#sz .on'),m=$('#msg');
  if(!p.p){m.className='er';return m.textContent='This drop is coming soon.'}
  if(!s){m.className='er';return m.textContent='Please choose a size first.'}
  localStorage.drip_bag=+(localStorage.drip_bag||0)+1;$('#bg').textContent=localStorage.drip_bag;
  m.className='ok';m.textContent='Added: '+p.n+' · '+$('.sw.on').title+' · '+s.textContent}}
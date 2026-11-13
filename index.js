$('[data-cards=latest]').innerHTML=cards(all.slice(0,8));
$('[data-cards=feat]').innerHTML=cards([5,6,2]);
const rail=$('.rail');if(rail){const bar=$('.bar b'),mv=d=>rail.scrollBy({left:d*280,behavior:'smooth'}),up=()=>bar.style.width=(rail.scrollLeft+rail.clientWidth)/rail.scrollWidth*100+'%';
 $('#nx').onclick=()=>mv(1);$('#pv').onclick=()=>mv(-1);rail.onscroll=up;up()}

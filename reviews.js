const rq=$('#rq');let n=0;const T=[
['Absolutely love shopping here! The styles are trendy, the quality is great for the price, and delivery is always quick.','Ali Raza','Lahore'],
['The Skyline Hoodie is unreal. Heavy fabric, perfect oversized fit, and the print looks even better in person.','Hamza Khan','Karachi'],
['Finally a brand that is loud in the right way. I get compliments every time I wear the fuchsia crewneck.','Sara Ahmed','Islamabad'],
['Great sizing guide and fast support. My exchange took two days, no fuss at all.','Bilal Sheikh','Faisalabad'],
['Bold colors, solid stitching and fair prices. My go-to streetwear store now.','Hira Malik','Multan']];
 const show=d=>{n=(n+d+T.length)%T.length;const[q,a,c]=T[n];rq.textContent='“'+q+'”';$('#rn').textContent=a;$('#rl').textContent=c;$('#ri').textContent=a[0];$('#rc').textContent=String(n+1).padStart(3,'0')+' — 00'+T.length};
 $('#rp').onclick=()=>show(-1);$('#rx').onclick=()=>show(1);show(0)
D.rev=f=>'Thank you, '+f.fullname.value.trim()+'! Your review was received.';

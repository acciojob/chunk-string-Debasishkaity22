function stringChop(str, size) {
  // your code here
	let l=[],m="";
  let n;
	if(str===null){
		return [];
	} 
   else{	
  for(let i=0;i<str.length;i=(i+size)){
    let n1=parseInt(i);
    let n2=parseInt(size);
     n=(n1+n2);
    m=str.substring(i,n);
    l.push(m);
  }
  if(n<str.length){
    m=str.substring(n,str.length);
    l.push(m);
  }
  return l;
   }
}



// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


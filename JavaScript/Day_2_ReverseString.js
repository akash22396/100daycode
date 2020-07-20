/*****************            Day-2           ****************/

/**************** Reverse String **************/
const reverseString = (str)=>str.split('').reverse().join('')

// console.log(reverseString('hello world'))

/*************************  reverseOnlyLetters  ******************************/
const reverseOnlyLetters=(str)=>{
let data = str.split('');
let wordArr=[];
let specialChar =[];
data.forEach((dt,i)=>{
  if(dt.match(/[a-zA-Z]/g)){
    wordArr.push(dt)
  }else{
specialChar.push({id:i,val:dt})
  }
})
let revString = wordArr.reverse().join('')
specialChar.forEach(dt=>{
  revString=revString.substr(0,dt.id)+dt.val+revString.substr(dt.id)
})
return revString
}
console.log(reverseOnlyLetters('hello-world-!'))

/*********************** Reverse String by k Value  ************************/
let s='abcdefg',k=2;
var reverseStr = function(s, k) {
   let data = s.toLowerCase().split('')
  let arr1=[];
  let arr2=[];
  for(let i=0;i<data.length;i+=k){
    let arr= []
    for(let j=0;j<k;j++){
      arr.push(data[i+j])
    }
    arr1.push(arr)
  }
  for(let i=0;i<arr1.length;i++){
      if(i%2!==0){
       arr2.push(arr1[i])
      }else{
        let dt = arr1[i].reverse();
        arr2.push(dt)      
      }
  }
  return arr2.join('').replace(/,/g,'')
};

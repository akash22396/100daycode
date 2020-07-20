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

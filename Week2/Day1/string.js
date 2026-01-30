// print string in reverse order
let emp = 'Naveen kumar'
let result = emp.split('').reverse().join('')
console.log(result) 


// Find the occurence of the given character
let text ="Playwright is an automation tool"
let targetChar='i'
let count = 0
for(let i = 0;i<text.length;i++ ) {
    if(text.charAt(i)===targetChar)
        { 
            count++ 
        }
} 

console.log("Target Character: " + targetChar + " "+ "count:"+ count)
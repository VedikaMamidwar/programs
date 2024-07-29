const numbers = [100,116,213,14,104]
let sum =0;
for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1){
        sum+= numbers[i]
    }
}
console.log(`sum${sum}`)
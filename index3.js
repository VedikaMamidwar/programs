const marks = [20, 130, 100, 40]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)
//funtion declaration
function intergerfind(nums){
    let sum = 0
    nums.array.forEach(element => {
        sum=sum+element
    });
    const avg=sum/nums.length
    const max=Math.max(...nums)
    const min=Math.min(...nums)
    return {sum:sum}
}

intergerfind([3,6,9,12])


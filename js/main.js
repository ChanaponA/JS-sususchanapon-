const nums = [5,7,2,1,99]
let min = nums[0]
let max = nums[0]

nums.forEach((num)=>{
    if(num<min) min = num
    if(num>max) max = num
})

//funtion declaration
function findMin(numb) {
    let min = numb[0]
    numb.forEach((num)=>{
        if(num<min) min = num
    })
    return min
}

// arrow funtion
const findMax=(items)=>{
    let max = items[0]
    items.forEach((item)=>{
        if(item>max) max= item
    })
    return max
}

console.log(`min:${min}`,`max:${max}`)

console.log(findMin(nums))
console.log(findMax(nums))

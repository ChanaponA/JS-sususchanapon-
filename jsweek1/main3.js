//Practice-02 Write a program that swaps the values of two variables without using a temporary variable. The program should take two input values, swap their contents, and then print the updated values.
function swap(a, b){
    return [b,a]
 }
 console.log(swap(1,2))
 const nums=[1,3,4,6]
 //destructuring on array
 const [y]=nums
 console.log(y)
 const std={id:1234, name:'Somchai'}
 //destructureing on object
 const {id, name}=std
 console.log(id)
 console.log(name)
 const value=5
 const [m,n]=[1,2] //destructuring on array
 console.log(m) //m=1
 console.log(n)//n=2
 
function swap(a, b){
    return [b,a]
 }
 const [a,b]=swap(1,2)
 console.log(a)
 console.log(b)
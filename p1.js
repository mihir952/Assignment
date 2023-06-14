let a = [{first: 'abc', last: 'xyz'}, {first: 'ab1', last: 'xy2'}, {first: 'a2c', last: '1yz'}];

const value=a.filter(function(last){
    return last.last=="xyz";
})
console.log(value)


// a[1]={...a[0]}
// a[1].last="Mihir"
// console.log(a)


// a.forEach(myfunction);
// function myfunction(user){
//    console.log(user.first)
// }

// a.map(myfunction);
// function myfunction(user){
//    console.log(user.last)
// }


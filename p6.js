// function add(a,b){
//     return a+b;
// }
// x=add(4,8);
// console.log(x)



// arr=[1,2,3,4,5,6,7,8,9,10]
// a=arr.reduce((sum,value)=>sum+value,10)
// console.log(a)


//using recurssion 
// function add(n){
//     if(n==1)
//       return 1
//     else  
//       return n+add(n-1)
// }
// console.log(add(0))



////Factorial of n number using Recurssion
// function fact(n){
//     if(n==0 || n==1)
//         return 1
//     return n*fact(n-1);
// }
// console.log(fact(5))



///prime number
// function prime(a, b) {
//     for (let i = a; i <= b; i++) {
//       var flag = 0;
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//           flag = 1;
//           break;
//         }
//       }
//       if (flag == 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   prime(2, 50);

// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
  
//     while (left < right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
  
//     return true;
//   }



////// Checking given string is palindrome or not
//   function palindrome(str){
//     let left=0;
//     let right=str.length-1;
//     while(left<right){
//         if(str[left]!==str[right]){
//             return false;
//         }
//             left++;
//             right--;    
//     }
//     return true;
//   }
//  console.log (palindrome("mihir"))



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////using formula 
// let i,j,k;
// let n=8;
// string=" "
// for(i=1;i<2*n;i++){
//     let col=i>n?2*n-i:i;
//     let space=n-col;
//     for(k=1;k<=space;k++){
//         string=string+" ";
//     }
//     for(j=1;j<col;j++){
//         string=string+"* ";
//     }
//     string=string+"\n";
// }
// console.log(string)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
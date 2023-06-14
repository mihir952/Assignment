///1st question

// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br/>")
// }



//////2nd question
// let i,j,k;
// for(i=0;i<5;i++){
    
//         for(k=0;k<5-i;k++){
//             document.write("1")
//         }
//         for(j=0;j<=i;j++){
//         document.write("2");
//     }
//     document.write("<br/>")
// }



////3rd question
// let i,j,k,l;
// for(i=0;i<5;i++){
    
//         for(k=0;k<5-i;k++){
//             document.write("&nbsp;&nbsp")
//         }
//         for(j=0;j<=i;j++){
//         document.write("*");
//     }
//     for(l=1;l<=i;l++){
//         document.write("*")
//     }
//     document.write("<br/>")
// }


//4th question
// var m=1;
// let i,j,k;
// for(i=0;i<5;i++){
//     for(k=0;k<5-i;k++){
//         document.write("&nbsp;&nbsp");
//     }
//     for(j=0;j<m;j++){
//         document.write("*")
//     }
//     document.write("<br/>")
//     m=m+2;
// }


///5th question
//  let i,j,k,l;
//  for(i=5;i>5;i--){
//     for(k=0;k<5-i;k++){
//         document.write("&nbsp;&nbsp");
//     }
//     for(j=1;j<=i;j++){
//         document.write("*")
//     }
//     for(l=1;l<i-1;l++){
//         document.write("*");
//     }
//     document.write("<br/>");
//  }


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string =string+ "*";
//   }
//   // newline after each row
//   string =string+ "\n";
// }
// // printing the string
// console.log(string);

// let i,j,k;
// string=" ";
// for(i=1;i<5;i++){
//     for(k=1;k<5-i;k++){
//         string=string+" ";
//     }
//     for(j=1;j<i;j++){
//         string=string+"*";
//     }
//     string=string+"\n";
// }
// console.log(string)


// let i,j,k;
// let n=10;
// string=" ";
// for(i=1;i<n;i++){
//     for(j=1;j<i;j++){
//         string=string+"*";
//     }
//     for(k=2;k<n;k++){
//         string=string+" ";
//     }
//     string=string+"\n";
// }
// console.log(string)

// let i,k,j,star=1;
// string=""
// for(i=0;i<8;i++){
//     for(k=0;k<8-i;k++){
//         string=string+" ";
//     }
//     for(j=0;j<star;j++){
//         string=string+"* ";
//     }
//     star++;
//     string=string+"\n";
// }
// console.log(string)

// let i,j,k;
// let n=9;
// string=""
// for(i=0;i<n;i++){
//     for(k=0;k<i;k++){
//         string=string+" ";
//     }
//     for(j=1;j<(2*n)-(2*i);j++){
//         string=string+"*";
//     }
//     string=string+"\n";
// }
// console.log(string)

// let i,j,k,star=1;
// let n=5;
// string="";
// for(i=0;i<3;i++){
//     for(k=0;k<3-i;k++){
//         string=string+" ";
//     }
//     for(j=0;j<star;j++){
//         string=string+"* ";
//     }
//     star++;
//     string=string+"\n";
// }
// console.log(string)
// for(i=1;i<3;i++){
//     for(k=0;k<i;k++){
//         string=string+" ";
//     }
//     for(j=0;j<2-i;j++){
//         string=string+"* ";
//     }
// }
// console.log(string)




// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,9));
// let a=sum(10,30)
// console.log(a)



let a1 = [{first: 'abc', last: 'xyz'}, {first: 'ab1', last: 'xy2'}, {first: 'a2c', last: '1yz'}]
let arr=[...a1]
arr[2].first="Mihir";
console.log(arr)


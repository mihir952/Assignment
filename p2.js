// a=[1,2,3,4,5,7,10]
// function missingNumber(arr){
//  newset=new Set[arr];
//  missingnumber=[]

// for(let i=0;i<10;i++){
//     if(!newset.has(i))
//     {
//         missingNumber.push(i)
//     }
//     return missingNumber
// }
// }
// missingnumber=missingNumber();
// console.log(missingnumber)


const employees = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      department: "Marketing",
      projects: [
        {
          name: "Project A",
          duration: "13 months"
        },
        {
          name: "Project B",
          duration: "6 months"
        }
      ]
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      department: "Sales",
      projects: [
        {
          name: "Project C",
          duration: "9 months"
        }
      ]
    },
    {
      name: "Nikola Thomas",
      email: "nikolathomas@example.com",
      department: "Human Resources",
      projects: []
    },
    {
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      department: "Engineering",
      projects: [
        {
          name: "Project D",
          duration: "5 months"
        },
        {
          name: "Project E",
          duration: "12 months"
        },
        {
          name: "Project F",
          duration: "1 month"
        }
      ]
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      department: "Human Resources",
      projects: []
    },
  ];
 employees.forEach((employee)=>{
    //  console.log(employee.name)
    //  console.log(employee.email)
    if(employee.projects.length!=0){
            employee.projects.forEach((project)=>{
                console.log(project.name)
            })

    }

 })
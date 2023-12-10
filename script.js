// Hello.
// This project is a complete work with 'console log'.
// This project is done in groups of 5 people.
// Developers:
// 1- Seer
// 2-Nima
// 3- Rahela
// 4- AD
// 5-Fatima
// This project was made as an experiment and to work with structures.
// email: navayearamm@gmail.com



// create school object                                       
//object 
const school = {
        //object.this is object Because there are several other information in it that must be categorized. This object has a series of features
        classes: {
            // into our school have two classes
            //array| Because have 4 students and many teachers
            classA: [
                //index[0]|into a array this item in index[0]
                info = {
                    totalStudent: 4,
                    teacherName: 'mr khateri',
                    className: 'web devoloper'
                },
                //index[1]||into a array this item in index[1]
                students = {
                    name: ['rahele', 'mobin', 'milad', 'nima'],
                    score: [20, 10, 12, 18],
                    id: ['0021783738', '733829282', '383738373383', '874747484849']
                }

            ],
             //array| Because have 4 students and many teachers
            classB: [
                //index[0]|into a array this item in index[0]
                info = {
                    totalStudent: 4,
                    teacherName: 'mr khateri',
                    className: 'javascript'
                },
               //index[1]||into a array this item in index[1]
                students = {
                    name: ['rahele', 'mobin', 'fatemeh', 'nima'],
                    score: [20, 10, 12, 18],
                    id: ['0076898786', '0076756567', '39938373383', '874747664849']
                }

            ]
        }
    }



// class A
console.log( "classA informations => " , school.classes.classA[0]);
console.log( "classA students property =>" ,school.classes.classA[1]);
console.log( "classA | TeacherName is:" ,school.classes.classA[0].teacherName);
console.log( "classA | Class name is:" ,school.classes.classA[0].className);
console.log( "classA | the number of students is:" ,school.classes.classA[0].totalStudent);
console.log( "classA students names >>" ,school.classes.classA[1].name);
console.log( "classA students grads >>" ,school.classes.classA[1].score);


// select array id and convert to number >>>>>>> line 64 to 69

// one solve
// let x = school.classes.classA[1].id[0];
// console.log("national_ID:", Number(x));

// two solve
console.log( "ClassA | national_ID:" ,Number(school.classes.classA[1].id[1]));
console.log( "ClassB | national_ID:" ,Number(school.classes.classB[1].id[0]));


// classB
console.log("classB informations => " , school.classes.classB[0]);
console.log( "classB | TeacherName is:" ,school.classes.classB[0].teacherName);
console.log( "classB | Class name is:" ,school.classes.classB[0].className);
console.log("classB students property =>" , school.classes.classB[1]);
console.log( "classB students names >>" ,school.classes.classB[1].name);
console.log( "classB | The name of the group leader >>" ,school.classes.classB[1].name[3]);
console.log( "classB mobin's grads >>" ,school.classes.classB[1].score[1]);





















//object 
const school = {
        //object
        classes: {
            //array
            classA: [
                //index[0]
                info = {
                    totalStudent: 4,
                    techerName: 'mr khateri',
                    className: 'web devoloper'
                },
                //index[1]
                students = {
                    name: ['rahele', 'mobin', 'milad', 'nima'],
                    score: [20, 10, 12, 18],
                    id: ['0021783738', '733829282', '383738373383', '874747484849']
                }

            ],
            // araye 2
            classB: [
                //index 1
                info = {
                    totalStudent: 4,
                    techerName: 'mr khateri',
                    className: 'javascript'
                },
                //index 2
                students = {
                    name: ['rahele', 'mobin', 'fatemeh', 'nima'],
                    score: [20, 10, 12, 18],
                    id: ['0076898786', '0076756567', '39938373383', '874747664849']
                }

            ]
        }
    }
    // 1. let x='0021783738';
    // console.log(typeof Number(x))

console.log(school.classes.classA[0]);
let x = school.classes.classA[1].id[0];
console.log("nashnalId:", Number(x));









//1. json.pars(json.string(id))
// 2.use function 












// console.log(school.classes.classB[0]);
// console.log(school.classes.classA[1]);
// console.log(school.classes.classB[1]);
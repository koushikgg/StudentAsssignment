const readline = require("readline-sync");
const studentList = [
        {
        rollNo: 100,
        name: "ankith",
        class: 1,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 101,
        name: "arpitha",
        class: 1,
        gender: "female",
        testScores: []
        },
        {
        rollNo: 102,
        name: "anand",
        class: 1,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 103,
        name: "barath",
        class: 1,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 104,
        name: "bhavya",
        class: 1,
        gender: "female",
        testScores: []
        },
        {
        rollNo: 200,
        name: "bhanu",
        class: 2,
        gender: "female",
        testScores: []
        },
        {
        rollNo: 201,
        name: "bhuvi",
        class: 2,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 202,
        name: "baristow",
        class: 2,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 203,
        name: "virat",
        class: 2,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 204,
        name: "kohli",
        class: 2,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 300,
        name: "ABD",
        class: 3,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 301,
        name: "gayle",
        class: 3,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 302,
        name: "dinesh",
        class: 3,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 303,
        name: "maxi",
        class: 3,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 304,
        name: "rajdat",
        class: 3,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 400,
        name: "siraj",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 401,
        name: "loki",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 402,
        name: "green",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 403,
        name: "lamror",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 404,
        name: "anuj",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 500,
        name: "swapnil",
        class: 5,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 501,
        name: "yshak",
        class: 5,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 502,
        name: "joseph",
        class: 5,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 503,
        name: "rega",
        class: 1,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 504,
        name: "koushik",
        class: 5,
        gender: "male",
        testScores: []
        }
];

var condition = true;

while (condition) {
    var userInput = readline.question("Select one of these options:\n 1. Take Test\n 2. Generate Result\n 3. View Student Result \n");

    if (userInput != 1 && userInput != 2 && userInput != 3) {
        console.log("Please enter a number in the above range only.");
        continue;
    }

    switch (parseInt(userInput)) {
        case 1:
            takeTest();
            console.log("Test Taken");
            break;
        case 2:
            if (!studentList[0].testScores.length > 0) {
                console.log("Please take the test before generating the result.");
                continue;
            }
            generateResult();
            console.log("Result Generated");
            break;
        case 3:
            if (!studentList[0].totalMarks) {
                console.log("Result is not genrated. Please take the test and generate the result before viewing.");
                continue;
            }
            viewStudentResult();
            condition = false; // End the loop
            break;
        default:
            console.log("Invalid input. Please try again.");
            continue;
    }
}



//function to take test it randomly creates marks for the students in students in list
function takeTest(){
    for (let studentObj of studentList){
        if (studentObj.testScores.length==0){

            let mathMarks=Math.floor(Math.random()* 51);
            let scienceMarks=Math.floor(Math.random()* 51);
            let socialMarks=Math.floor(Math.random()* 51);

            let sunbjectMArks=[
                {
                subName: 'Maths',
                marks : mathMarks
                },
                {
                subName: 'science',
                marks : scienceMarks
                },
                {
                subName: 'social',
                marks : socialMarks
                }
            ]
            studentObj.testScores.push(...sunbjectMArks)
        }
    }
}

//this function creates the total marks and the percentage to particular student
function generateResult(){
    for (let studentObj of studentList){
        if (!studentObj['totalMarks'] && !studentObj['percentage']){
            let mathMarks=studentObj.testScores[0].marks;
            let scienceMarks=studentObj.testScores[1].marks;
            let socialMarks=studentObj.testScores[2].marks;
            let totalMark=mathMarks+scienceMarks+socialMarks;
            let percentages=((totalMark)/150)*100;
            studentObj['totalMarks']=totalMark;
            studentObj['percentage']=percentages;
        }
    }
}

//this function is used to view Student result
function viewStudentResult(){
    for (let studentObj of studentList){
        let rollNumber=studentObj.rollNo;
        let studentName = studentObj.name;
        let studentTotalMarks= studentObj.totalMarks
        let studentPercentage=studentObj.percentage
        console.log(`${rollNumber} ${studentName} ${studentTotalMarks} ${studentPercentage.toFixed(2)} `)
    }
}

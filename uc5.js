const readline = require("readline-sync");
const studentList = [
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
        rollNo: 402,
        name: "green",
        class: 4,
        gender: "male",
        testScores: []
        },
        {
        rollNo: 503,
        name: "rega",
        class: 5,
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
        rollNo: 100,
        name: "ankith",
        class: 1,
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
        rollNo: 403,
        name: "lamror",
        class: 4,
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
        rollNo: 504,
        name: "koushik",
        class: 5,
        gender: "male",
        testScores: []
        }
];

var condition = true;

while (condition) {
    var userInput = readline.question("Select one of these options:\n 1. Take Test\n 2. View Student Result \n 3. View classwise result\n 4. Detail Analysis of Result\n 5. View Class Wise Top Three Performers\n");

    if (userInput != 1 && userInput != 2 && userInput != 3 && userInput != 4 && userInput != 5) {
        console.log("Please enter a number in the above range only.");
        continue;
    }

    switch (parseInt(userInput)) {
        case 1:
            takeTest();
            console.log("Test Taken and Result Genrated");
            break;
        case 2:
            if (!studentList[0].totalMarks) {
                console.log("Result is not genrated. Please take the test to generate the result before viewing Student Result.");
                continue;
            }
            console.log("This is the Students Result")
            viewStudentResult();
            condition = false; // End the loop
            break;
        case 3:
            if (!studentList[0].totalMarks) {
                console.log("Result is not genrated. Please take the test to generate the result before viewing the Result Class wise.");
                continue;
            }
            console.log("This is the Class Wise Result")
            viewClassWiseResult();
            condition = false; // End the loop
            break;
        case 4:
            if (!studentList[0].totalMarks) {
                console.log("Result is not genrated. Please take the test to generate the result before viewing Detail Analysis of Result.");
                continue;
            }
            console.log("This is the Detail Analysis of Result")
            DetailAnalysisofResult();
            condition = false; // End the loop
            break;
        case 5:
            if (!studentList[0].totalMarks) {
                console.log("Result is not genrated. Please take the test to generate the result before viewing Class Wise Top Three Performer.");
                continue;
            }
            console.log("This is the class wise top three Performer")
            classwisetopthreeperformer();
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


//this function is used to view result class wise
function viewClassWiseResult(){
    for (let i =1; i<6;i++){
        console.log(`This is Class ${i} Students Result`)
        studentList.forEach(student=>{
            if (student.class==i){
                let rollNumber=student.rollNo;
                let studentName = student.name;
                let studentTotalMarks= student.totalMarks
                let studentPercentage=student.percentage
                console.log(`${rollNumber} ${studentName} ${studentTotalMarks} ${studentPercentage.toFixed(2)} `)
            }
        })
        console.log("\n")
    }
}

//this function shows the Detail Analysis of Result

function DetailAnalysisofResult(){
	// - display data.  header format --> class | total students count | & above computed field
    for (let i =1; i<6;i++){
        console.log(`This is Class ${i} Detailed Analysis of Result`)
        let totalStudents=0;
        let averagetotalmarks=0;
	    let averagepercentage=0;
	    let overallgradeforclass=null;
	    let failedstudentscount =0;
	    let failedstudentspercentage=0;
	    let passedstudentscount=0;
	    let passedstudentspercentage=0;
        studentList.forEach(student=>{
            if (student.class==i){
                totalStudents++;
                averagetotalmarks+=student.totalMarks
                averagepercentage+=student.percentage
                if (student.percentage<35.00){
                    failedstudentscount++;
                }else{
                    passedstudentscount++;
                }
            }
        })
        averagetotalmarks=averagetotalmarks/totalStudents
        averagepercentage=averagepercentage/totalStudents
        failedstudentspercentage=(failedstudentscount/totalStudents)*100
        passedstudentspercentage=(passedstudentscount/totalStudents)*100
        if (averagepercentage >= 80.00) {
            overallgradeforclass = 'A';
        } else if (averagepercentage >= 60) {
            overallgradeforclass = 'B';
        } else if (averagepercentage >= 40) {
            overallgradeforclass = 'C';
        } else {
            overallgradeforclass = 'D';
        }
        console.log(`Class:${i}, Students:${totalStudents}, Averagemarks:${averagetotalmarks}, Average Percentage:${averagepercentage.toFixed(2)}, Grade:${overallgradeforclass}, failedCount:${failedstudentscount}, failedPercentage:${failedstudentspercentage}, passedCount:${passedstudentscount}, passedPercentage:${passedstudentspercentage}`)
        
    }
}

//this function shows top three performer
function classwisetopthreeperformer(){
    for (let i =1; i<6;i++){
        console.log(`This is Class ${i} Top Three Performer`)
        let firstRankStudent={percentage:0};
        let secondRankStudent={percentage:0};
        let thirdRankStudent={percentage:0};
        studentList.forEach(student=>{
            if (student.class==i){
                if(firstRankStudent.percentage<student.percentage){
                    thirdRankStudent=secondRankStudent
                    secondRankStudent=firstRankStudent
                    firstRankStudent=student
                }else if(student.percentage>secondRankStudent.percentage && student.percentage<=firstRankStudent.percentage){
                    thirdRankStudent=secondRankStudent
                    secondRankStudent=student
                }else if(student.percentage>thirdRankStudent.percentage && student.percentage<=secondRankStudent.percentage ){
                    thirdRankStudent=student
                }
            }
        })
        console.log(`1st Performer ${firstRankStudent.name} Total Marks:${firstRankStudent.totalMarks} Percentage:${firstRankStudent.percentage}`)
        console.log(`2nd Performer ${secondRankStudent.name} Total Marks:${secondRankStudent.totalMarks} Percentage:${secondRankStudent.percentage}`)
        console.log(`3rd Performer ${thirdRankStudent.name} Total Marks:${thirdRankStudent.totalMarks} Percentage:${thirdRankStudent.percentage}`)
    }
}

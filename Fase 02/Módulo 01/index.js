const classA = [
    {
        name: 'Rafa',
        grade: 6.8
    },
    {
        name: 'Gabi',
        grade: 7.5
    },
    {
        name: 'Rê',
        grade: 2
    },
    {
        name: 'Lulu',
        grade: 0
    }
];

const classB = [
    {
        name: 'João',
        grade: 7
    },
    {
        name: 'José',
        grade: 8
    },
    {
        name: 'Juca',
        grade: 4
    },
    {
        name: 'studentRandom',
        grade: 10
    }
];

function calculateAverage(students){
    let sum=0;

    for (let i=0; i<students.length; i++){
        sum = sum + students[i].grade;
    }

    const average = sum / students.length;

    return average;
}

function sendMessage(average, turma){        
    if (average > 5){
        console.log(`${turma} averagge: ${average}. Congratulations!`);
    } else {
        console.log(`${turma} averagge: ${average}. Is not good.`);
    }
}

function markAsFlunked(student){
    student.flunked = false;
    
    if (student.grade < 5){
        student.flunked = true;
    }       
}

function sendFlunkedMessage(student){
    if (student.flunked){
        console.log(`the student ${student.name} is flunked!`)
    }
}

function studentsflunkeds(students){
    for (let student of students){
        markAsFlunked(student);
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'class A');
sendMessage(average2, 'class B');

studentsflunkeds(classA);
studentsflunkeds(classB);

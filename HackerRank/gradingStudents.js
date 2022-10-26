// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
    const result = grades.map((grade) => {
        if (grade < 38) {
            return grade;
        } 
        else if ((grade + 3 ) % 5 === 1) {
            return grade + 2;
        } 
        else if ((grade + 3 ) % 5 === 2) {
            return grade + 1;
        } 
        else {
            return grade
        }
    });
    return result;
}

gradingStudents([73, 67, 38, 33]);
gradingStudents([84, 29, 57, 17]);
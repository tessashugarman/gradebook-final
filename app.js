
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user === 'cool') {
        if (pass === 'password') {
            document.getElementsByClassName('login')[0].style.display = 'none';
            document.getElementsByClassName('menu')[0].style.visibility = 'visible';
        } else {
            document.getElementById('wrong').innerText = 'Incorrect Password.'
        }
    } else {
        document.getElementById('wrong').innerText = 'Incorrect Username.'
    }
}


    function submitGrades() {
        var student = document.getElementById("name").value;
        var grade = parseInt(document.getElementById('grade').value, 10);
        if (Number.isFinite(grade) && grade <= 100 && grade >= 0) {

            document.getElementById('grades').innerHTML += "<br>Student Name: " + student + "     " + "Grade: " + grade;
            gradeBook()
        }
        if (document.getElementsByClassName("submit-grades")[0].style.visibility !== 'hidden') {
            document.getElementById('incorrect-grade').innerText = 'Not a valid number, try again.';
        }
    }

    function gradeBook() {
        document.getElementsByClassName('submit-grades')[0].style.visibility = 'hidden';
        document.getElementsByClassName('grade-book')[0].style.visibility = 'visible';
        document.getElementById('grades').style.visibility = 'visible';
    }

    function submitGradebook() {
        document.getElementsByClassName('grade-book')[0].style.visibility = 'hidden';
        document.getElementById('grades').style.visibility = 'hidden';
        document.getElementsByClassName('submit-grades')[0].style.visibility = 'visible';
    }



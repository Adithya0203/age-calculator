var input = document.getElementById("dob");
input.max = new Date().toISOString().split("T")[0];
var result = document.getElementById("result");

function calculateAge(){
    var dateOfBirth = new Date(input.value);
    var d1 = dateOfBirth.getDate();
    var m1 = dateOfBirth.getMonth() + 1;
    var y1 = dateOfBirth.getFullYear();

    var today = new Date();
    var d2 = today.getDate();
    var m2 = today.getMonth() + 1;
    var y2 = today.getFullYear();

    var d3,m3,y3;
    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2-m1
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if (m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;
}

export default calculateAge
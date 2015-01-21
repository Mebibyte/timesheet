function fillIn(username, enddate, day1, day2, day3, day4, hours) {
    document.getElementById('username').innerHTML = username;
    document.getElementById('enddate').innerHTML = enddate;
    document.getElementById('day1').innerHTML = day1;
    document.getElementById('day2').innerHTML = day2;
    document.getElementById('day3').innerHTML = day3;
    document.getElementById('day4').innerHTML = day4;

    document.getElementById('w1d1').innerHTML = hours[0];
    document.getElementById('w1d12').innerHTML = hours[0];
    document.getElementById('w1d2').innerHTML = hours[1];
    document.getElementById('w1d22').innerHTML = hours[1];
    document.getElementById('w1d3').innerHTML = hours[2];
    document.getElementById('w1d32').innerHTML = hours[2];
    document.getElementById('w1d4').innerHTML = hours[3];
    document.getElementById('w1d42').innerHTML = hours[3];
    document.getElementById('w1d5').innerHTML = hours[4];
    document.getElementById('w1d52').innerHTML = hours[4];
    document.getElementById('w1d6').innerHTML = hours[5];
    document.getElementById('w1d62').innerHTML = hours[5];
    document.getElementById('w1d7').innerHTML = hours[6];
    document.getElementById('w1d72').innerHTML = hours[6];

    document.getElementById('w2d1').innerHTML = hours[7];
    document.getElementById('w2d12').innerHTML = hours[7];
    document.getElementById('w2d2').innerHTML = hours[8];
    document.getElementById('w2d22').innerHTML = hours[8];
    document.getElementById('w2d3').innerHTML = hours[9];
    document.getElementById('w2d32').innerHTML = hours[9];
    document.getElementById('w2d4').innerHTML = hours[10];
    document.getElementById('w2d42').innerHTML = hours[10];
    document.getElementById('w2d5').innerHTML = hours[11];
    document.getElementById('w2d52').innerHTML = hours[11];
    document.getElementById('w2d6').innerHTML = hours[12];
    document.getElementById('w2d62').innerHTML = hours[12];
    document.getElementById('w2d7').innerHTML = hours[13];
    document.getElementById('w2d72').innerHTML = hours[13];

    document.getElementById('w1t').innerHTML = hours[0] + hours[1] + hours[2] + hours[3] + hours[4] + hours[5] + hours[6];
    document.getElementById('w1t2').innerHTML = hours[0] + hours[1] + hours[2] + hours[3] + hours[4] + hours[5] + hours[6];
    document.getElementById('w2t').innerHTML = hours[7] + hours[8] + hours[9] + hours[10] + hours[11] + hours[12] + hours[13];
    document.getElementById('w2t2').innerHTML = hours[7] + hours[8] + hours[9] + hours[10] + hours[11] + hours[12] + hours[13];
}
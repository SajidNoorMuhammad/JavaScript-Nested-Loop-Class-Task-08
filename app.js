document.write("<h3>Class Task 01</h3>")

var string = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        string += j;
    }
    string += "\n" + "<br>";
}
document.write(string);



document.write("<h3>Class Task 02</h3>")

for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = 5; j >= i; j--) {
        star = star + j;
    }
    document.write(star + "<br>")
}


// document.write("<h3>Class Task 03</h3>")


document.write("<h3>Class Task 04</h3>")

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "*";
    document.write(str.repeat(i) + "<br>");
}





const isInteger = function (value) {
    return Number.isInteger(value);
}

const findPromes = function (a, b) {
    let result = "";
    for (let i = a; i < b; i++) {

        let level = 0;

        for (let j = 1; j <= Math.sqrt(i); j += 2) {
            if (i % j == 0) {
                level++;
            }
        }
        if (level <= 2 && i % 2 == 1)
            result = result + `${i}` + "   ";
    }

    return result;
}

const callFindPrimes = function () {
    let result = findPromes(Number(prompt("Enter a")), Number(prompt("Enter b")));
    document.getElementsByTagName("p")[4].innerHTML=`Answer:${result}`;

}
const callIsInteger = function () {
    let result = isInteger(Number(prompt("is Integer ?")));
    document.getElementsByTagName("p")[1].innerHTML=`Answer:${result}`;
}

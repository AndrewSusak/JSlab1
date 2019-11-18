function isAPAddress(ip) {    
    if (/([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9])\.([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9])\.([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9])\.([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9])/.test(ip))
        return true;
    else
        return false;
}

function findRGBA(text) {        //!                                                                                                                                                
    if (/rgba\(([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9]),([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9]),([01][0-9][0-9]|2[0-4][0-9]|25[0-5]|[0-9]|[0-9][0-9]),(1|0\.[0-9]+)\)/.test(text))
        return true;
    else
        return false;
}

function findHexColor(text) {
    if (/#([0-9]|[abc])([0-9]|[abc])([0-9]|[abc])/i.test(text) || /#([0-9]|[abcdef])([0-9]|[abcdef])([0-9]|[abcdef])/i.test(text))
        return true;
    else
        return false;
}

function findTags(text, tag) { 
    let regex = RegExp("\\b"+tag+"\\b", 'g');
    let count = text.match(regex);
    return count.length;
}

function findPosNum(text) { 
    let regex = RegExp("-[0-9]+\\s", "g");
    let arr = (text+" ").match(regex);
    return arr;
}

function findDates(text) { 
    let regex = RegExp("[0-9].{0,4}-(1[012]|[1-9])-([012][0-9]|3[01]|[1-9])\\s", "g");
    let arr = (text+" ").match(regex);
    return arr;
}

function findEmail(text) {
    let regex = RegExp("[a-zA-Z0-9]+@[a-z]+\.[a-z]+", "g");
    let arr = text.match(regex);
    return arr;
}


function callIsIPAddress() {
    let result = isAPAddress((prompt("Enter text")));
    document.getElementsByTagName("p")[1].innerHTML = `Answer:${result}`;
}

function callfindRGBA() {
    let result = findRGBA((prompt("Enter text")));
    document.getElementsByTagName("p")[4].innerHTML = `Answer:${result}`;
}

function callFindHexColor() {
    let result = findHexColor((prompt("Enter text")));
    document.getElementsByTagName("p")[7].innerHTML = `Answer:${result}`;
}

function callFindTags() {
    let result = findTags( (prompt("Enter text")), (prompt("Enter tag")) );
    document.getElementsByTagName("p")[10].innerHTML = `Answer:${result}`;
}

function callFindPosNum() {
    let result = findPosNum((prompt("Enter text")));
    document.getElementsByTagName("p")[13].innerHTML = `Answer:${result}`;
}

function callFindDates() {
    let result = findDates((prompt("Enter text")));
    document.getElementsByTagName("p")[16].innerHTML = `Answer:${result}`;
}

function callFindEmail() {
    let result = findEmail((prompt("Enter text")));
    document.getElementsByTagName("p")[19].innerHTML = `Answer:${result}`;
}

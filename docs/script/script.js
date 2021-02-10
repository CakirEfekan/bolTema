function getElement(type, value, index = 0) {
    switch (type) {
        case "id":
            return document.getElementById(value)
            break;
        case "class":
            return document.getElementsByClassName(value)[index]
            break;
        case "tag":
            return document.getElementsByTagName(value)[index]
    }

}

function query(query, index) {
    return document.querySelectorAll(query)[index];
}

function queryStyle(query, index, styleName, value) {

    document.querySelectorAll(query)[index].style.setProperty(styleName, value, "important")

}


var leftButton = query("footer button", 0)
var rightButton = query("footer button", 1)
var sideTop = query("header", 0).offsetHeight
var rightQuery = ".rightSide"
var leftQuery = ".leftSide"
leftButton.addEventListener("click", function() {

    if (query(leftQuery, 0).style.display == "block") {
        queryStyle(leftQuery, 0, "display", "none")
    } else {
        queryStyle(rightQuery, 0, "display", "none")
        queryStyle(leftQuery, 0, "display", "block")
        queryStyle(leftQuery, 0, "top", sideTop - 30 + "px")
    }


})
rightButton.addEventListener("click", function() {
    if (query(rightQuery, 0).style.display == "block") {
        queryStyle(rightQuery, 0, "display", "none")
    } else {
        queryStyle(leftQuery, 0, "display", "none")
        queryStyle(rightQuery, 0, "display", "block")
        queryStyle(rightQuery, 0, "top", sideTop - 30 + "px")
    }

})
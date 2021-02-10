function changeTab(target) {
    queryStyle("section[data-name='" + target + "']", 0, "display", "block")
}
var activeTab = query(".control-tab li.activeTab a", 0).getAttribute("data-href")

changeTab(activeTab)

const tabs = document.querySelectorAll(".control-tab li a");
const panels = document.querySelectorAll("section[data-name]");
const panelQuery = "section[data-name]"
let clickedTab;

function removeClass(tabs) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].parentElement.removeAttribute("class")
    }
}
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(e) {
        e.preventDefault()
        removeClass(tabs)
        this.parentElement.setAttribute("class", "activeTab")
        clickedTab = this.getAttribute("data-href")

        for (let j = 0; j < panels.length; j++) {
            queryStyle(panelQuery, j, "display", "none")
            queryStyle("section[data-name='" + clickedTab + "']", 0, "display", "block")
        }
    });
}
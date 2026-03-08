// Active button Color change:
const filterButtons = document.querySelectorAll(".button");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => {
            btn.classList.remove("btn-primary");
        });
        this.classList.add("btn-primary");

    });
});


// Count Issues:
function countIssues(issues){

    const total = issues.length;   
    const open = issues.filter(issue => issue.status === "open").length;
    const closed = issues.filter(issue => issue.status === "closed").length;

    document.getElementById("tabCount").innerText = total;
    document.getElementById("openCount").innerText = open;
    document.getElementById("closedCount").innerText = closed;
}

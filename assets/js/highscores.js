var goBackBtn = document.querySelector("#goBackBtn")

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event)
    window.location.replace("./index.html")
});
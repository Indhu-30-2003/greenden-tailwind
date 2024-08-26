//selecting sidebar and menu image ,close
var menuimg = document.getElementById("menu_img")
var sidebar = document.getElementById("side_bar")
var paraX = document.getElementById("close_nav")
menuimg.addEventListener("click", function () {
    sidebar.style.right = 0
})
paraX.addEventListener("click", function () {
    sidebar.style.right = "-50%"
})

var search = document.getElementById("search")
var product_container = document.getElementById('product_container')
var product_list = product_container.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (i = 0; i < product_list.length; i++) {
        var products = product_list[i].querySelector("h3").textContent
        if (products.toUpperCase().indexOf(enteredvalue) < 0) {
            product_list[i].style.display = "none"
        }
        else {
            product_list[i].style.display = "block"
        }
    }
})
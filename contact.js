//selecting sidebar and menu image ,close
var menuimg = document.getElementById("menu_img")
var sidebar = document.getElementById("side_bar")
var paraX= document.getElementById("close_nav")
menuimg.addEventListener("click", function () {
    sidebar.style.right = 0
})
paraX.addEventListener("click", function () {
    sidebar.style.right = "-50%"
})
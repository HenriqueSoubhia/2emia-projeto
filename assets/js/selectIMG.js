const fileInput = document.querySelector("#post-input")
const btn = document.querySelector("#post-btn")
const img = document.querySelector("#post-img-preview")
const previewGroup = document.querySelector("#preview-group")
const post_group = document.querySelector(".post-group")

function loadImage (){
    let file = fileInput.files[0]
    if(!file)return
    img.src = URL.createObjectURL(file)
    post_group.style.display = "none"
    previewGroup.style.display = "flex"
}

fileInput.addEventListener("change",loadImage)

btn.addEventListener("click",()=>{
    fileInput.click()
    loadImage()
})



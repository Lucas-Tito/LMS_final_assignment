//--+This chunk of code is responsible for dynamically add event listeners for each menu+--
class CategoryMenuElement_Object{
    constructor(menu, btn){
        this.menu = menu
        this.btn = btn
    }
}

//example of an category menu: Lunch, Snacks...
const CategoryMenuElement = document.querySelectorAll(".select-menu"),
      CategoryMenuBtn = document.querySelectorAll(".select-btn"),
      CategoryMenuElement_Array = new Array()

for(i=0; i<CategoryMenuElement.length; i++)
    CategoryMenuElement_Array.push(new CategoryMenuElement_Object(CategoryMenuElement[i], CategoryMenuBtn[i]))

CategoryMenuElement_Array.forEach((menu_element) =>{
    menu_element.btn.addEventListener("click", ()=>{
        menu_element.menu.classList.toggle("active")
    })
})

//---------------------++--------------------------

let contact_btn = document.querySelector(".contact_btn"),
    contact_popup = document.querySelector(".popup")
contact_btn.addEventListener("click", ()=>{
    contact_popup.classList.toggle("active")
})

let popup_closer_btn = document.querySelector(".close_btn")
popup_closer_btn.addEventListener("click", ()=>{
    contact_popup.classList.remove("active")
    copyNumber_btn.classList.remove("active")
})



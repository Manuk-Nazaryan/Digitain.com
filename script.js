const icon = document.getElementById('icon')
const media = document.getElementById('media')
const header =document.getElementById('header')
const menu = document.getElementById("menu")
const menu1 = document.getElementById("menu1")
const menu2 = document.getElementById("menu2")
const menu3 = document.getElementById("menu3")
const menu4 = document.getElementById("menu4")
const menu5 = document.getElementById("menu5")
const menu6 = document.getElementById("menu6")
const menu7 = document.getElementById("menu7")
const menu8 = document.getElementById("menu8")
const menuVisible = function(){
        menu.classList.add("visible")
          menu.classList.remove("header-text") 
        menu1.classList.add("visible")
          menu1.classList.remove("header-text")  
        menu2.classList.add("visible")
          menu2.classList.remove("header-text")  
        menu3.classList.add("visible")
          menu3.classList.remove("header-text")  
        menu4.classList.add("visible")
          menu4.classList.remove("header-text")  
        menu5.classList.add("visible")
          menu5.classList.remove("header-text")  
        menu6.classList.add("visible")
          menu6.classList.remove("header-text")  
        menu7.classList.add("visible")
          menu7.classList.remove("header-text")  
        menu8.classList.add("visible")
          menu8.classList.remove("header-text")
          header.classList.add("header-visible")
          icon.classList.add('header-text',)  
          media.classList.add('header-visible')    
}
const closeVisible = function(){
  icon.classList.remove('header-text')
  media.classList.remove('header-visible')
  icon.classList.add('logo-fixed')
menu.classList.add('header-text')  
menu1.classList.add('header-text')  
menu2.classList.add('header-text')  
menu3.classList.add('header-text')  
menu4.classList.add('header-text')  
menu5.classList.add('header-text')  
menu6.classList.add('header-text')  
menu7.classList.add('header-text')  
menu8.classList.add('header-text')
}
icon.addEventListener("click", () => {
menuVisible()
});
media.addEventListener('click',()=>{
closeVisible()
})

function toggleMenu(){
    document.getElementById('link_list').classList.toggle('link_list_visible')
    document.getElementById('burger').classList.toggle('burger_in_x_form')
    
}

document.getElementById('burger').addEventListener('click', toggleMenu) 

function togglePicture(){

    
    document.getElementById('center_block').classList.toggle('center_block_change_color')
  

}

document.getElementById('center_block').addEventListener('click', togglePicture) 

function myFunction() {
    element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}

document.getElementById('orange').addEventListener(onclick, myFunction)



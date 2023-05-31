function toggleMenu(){
    document.getElementById('link_list').classList.toggle('link_list_visible')
    document.getElementById('burger').classList.toggle('burger_in_x_form')
    
}

document.getElementById('burger').addEventListener('click', toggleMenu) 

function togglePicture(){

    
    document.getElementById('center_block').classList.toggle('center_block_change_color')
  

}

document.getElementById('center_block').addEventListener('click', togglePicture) 



function toggleBox() {
  var box = document.getElementById("dinner_box");
  box.classList.toggle("visible");
}


function toggleBox1() {
  var box = document.getElementById("lunch_box");
  box.classList.toggle("visible");
}

function toggleBox2() {
  var box = document.getElementById("breakfast_box");
  box.classList.toggle("visible");
}







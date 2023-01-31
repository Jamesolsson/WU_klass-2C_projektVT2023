function toggleMenu(){
    document.getElementById('link_list').classList.toggle('link_list_visible')
    document.getElementById('burger').classList.toggle('burger_in_x_form')
    
}

document.getElementById('burger').addEventListener('click', toggleMenu) 
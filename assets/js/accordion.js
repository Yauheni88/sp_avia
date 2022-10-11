const item = document.querySelectorAll(".accordion__item");

for (i = 0; i < item.length; i++ ){
    item[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
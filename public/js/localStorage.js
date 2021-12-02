let boxFav = [];
let filtrados = [];

container.addEventListener('click', async function (e) {
    if(e.target.tagName === 'I' && e.target.classList.contains('far')) {
        let id = (e.path[1].attributes[1].value);
        
        if( localStorage.getItem('movieFav') !== null){
            boxFav = arrayfy(localStorage.getItem('movieFav'))
        }
        boxFav.push(id);
        localStorage.removeItem("movieFav");
        localStorage.setItem("movieFav", boxFav);

        
    }
    if(e.target.tagName === 'I' && e.target.classList.contains('fas')) {
        let id = (e.path[1].attributes[1].value);
        
        if( localStorage.getItem('movieFav') !== null){
            boxFav = arrayfy(localStorage.getItem('movieFav'))
            filtrados = boxFav.filter(m => m != id);
            localStorage.removeItem("movieFav");
            localStorage.setItem("movieFav", filtrados);
        } else {
            boxFav = [];
            filtrados = boxFav;
            localStorage.removeItem("movieFav");
        }
                
    }
    
});

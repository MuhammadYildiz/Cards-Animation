
const documents = document.querySelectorAll('.fa-folder')
const delet = document.querySelectorAll('.fa-trash');
const card = document.querySelectorAll('.card');
let index = 0;
documents.forEach(document => {
    document.addEventListener('click',()=>{
        for(let i = 0; i < card.length; i++){
            card[index].classList.toggle('blue');
            setTimeout(block,2000);
            function block(){
                card[index-1].remove()
            } 
        }
        index++;
    })
});
delet.forEach(document => {
    document.addEventListener('click',()=>{
        for(let i = 0; i < card.length; i++){
            card[index].classList.toggle('red');
            setTimeout(block,2000);
            function block(){
                card[index-1].remove()
            } 
        }
        index++;
    })
});
        

         

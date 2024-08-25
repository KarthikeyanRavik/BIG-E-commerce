const butoons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector("#Search");

searchBox.addEventListener('keyup',(e)=>{
seachText=e.target.value.toLowerCase().trim();

boxes.forEach((box)=>{
    const data = box.dataset.item;
    if(data.includes(seachText)){
     box.style.display='block';   
    }else{
        box.style.display='none';  
    }
});
    butoons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    butoons[0].classList.add('btn-clicked');
});

butoons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter;
        
        boxes.forEach((box=>{
            if(btnfilter == 'all'){
                box.style.display="block";
            }else{
                const boxfilter = box.dataset.item;
                if(btnfilter == boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }))

    });
});

function setActiveBtn(e){
    butoons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}



const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');


let curerntActive = 1;

next.addEventListener('click',()=>{
  curerntActive++;
  if(curerntActive > circle.length){
      curerntActive = circle.length;
  }
  update();
})

prev.addEventListener('click',()=>{
    curerntActive--;
    if(curerntActive <1){
        curerntActive = 1;
    }
    update();
})

function update() {
    circle.forEach((cicle,idx)=>{
        if(idx<curerntActive){
            cicle.classList.add('active');

        }else{
            cicle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length-1)/(circle.length-1))*100 + '%';

    if(curerntActive===1){
        prev.disabled = true;
    }else if(curerntActive == circle.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
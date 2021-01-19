let counter = document.querySelectorAll(".counter");

counter.forEach(ele => {
    ele.innerHTML=0;
   
    const counterUpdate = () => {
        let targetCount = +ele.getAttribute("data-target");
        let startCount = +ele.innerHTML;
        
        let inc = targetCount / 100;

        if(startCount < targetCount){
            ele.innerHTML = `${Math.round(startCount + inc)}`
            setTimeout(counterUpdate,10);
        }else{
            ele.innerHTML = targetCount;
        }
    }
    
    counterUpdate();
});
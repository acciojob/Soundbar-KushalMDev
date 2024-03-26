let soundbtns=document.querySelectorAll(".btn")
soundbtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        let sid=button.dataset.sound
        const audio=document.getElementById(sid)
        if(audio){
            document.querySelectorAll('audio').forEach(audio=>audio.pause());

            audio.currentTime=0;
            audio.play();
        }
    })
})

let stopbtn=document.querySelector(".stop")
stopbtn.addEventListener("click",()=>{
    document.querySelectorAll('audio').forEach(audio=>audio.pause());
})

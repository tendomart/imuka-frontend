let showBox = ()=>{
    const x = document.getElementById('popup_container');
    x.style.display="block";
}
let hideBox = ()=>{
    let shut = document.getElementById("popup_container");
    shut.addEventListener("click",()=>{
        x = shut.style.display="none";
    })

}

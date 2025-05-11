let container = document.getElementById("container");

let api = fetch('https://rickandmortyapi.com/api/character/37')
.then((res)=>res.json())
.then((data)=>{
    let dataKeys=Object.keys(data)
    dataKeys.find((item) =>{
        let card = document.getElementById("card");
        let name = document.createElement("p");
        name.innerText=item.name;
        let img = document.createElement("img");
        img.src=item.image
        img.style.width="30%";
        card.appendChild(name);
        card.appendChild(img);
        container.appendChild(card);
    })
})

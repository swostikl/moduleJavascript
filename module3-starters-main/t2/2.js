const Element=document.getElementById("target")

    const items=["First item","Second item","Third item"];
    items.forEach((item,index)=>{
        const li=document.createElement("li"); //adding Html using createElement()
        li.textContent=item;
        if(index===1){
            li.classList.add("my-item"); //adding class my item in second item list
        }
        Element.appendChild(li);
    });
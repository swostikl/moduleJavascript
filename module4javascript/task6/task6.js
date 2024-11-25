'use strict'
document.addEventListener("DOMContentLoaded",()=>{
    const form=document.getElementById("formValue");
    const result=document.getElementById("result");

    form.addEventListener("submit",async(event)=>{
        event.preventDefault();

        const query=document.getElementById("query").value.trim();
        await searchJokes(query);
    });

    async function searchJokes(query) {
        const url = `https://api.chucknorris.io/jokes/search?query=${query}`
        try {
            const response = await fetch(url);
            if (response.ok) {
                const joke_data = await response.json();
                printResults(joke_data.result);
            } else {
                console.log("network error");
                alert("error occur");
            }
        }catch(error){
            console.log("There is problem in fetch operation");
            alert("Error occur try again!")

        }


    }
     function printResults(jokes){
         result.innerHTML="";
         jokes.forEach(joke=>{
             const article=document.createElement("article");
             const p=document.createElement("p");
             p.textContent=joke.value;
             article.appendChild(p)
             result.appendChild(article)

         });
     }


});
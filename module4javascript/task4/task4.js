'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formValue");
    const results=document.getElementById("results");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Stop the default form submission

        const query = document.getElementById("query").value.trim();
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                printResult(data);

            } else {
                console.error("Network response was not good");
                alert("network response is not good")
            }

        } catch (error) {
            console.error("Problem with the fetch operation:", error);
            alert("Error occur to fetch data. Try again")
        }
    });
    function printResult(shows){
        results.innerHTML=''; //clear old result

        shows.forEach(tvShow=>{
            const article=document.createElement("article"); //creating article
            const h2=document.createElement("h2"); //show name in h2
            h2.textcontent=tvShow.show.name;

            const a=document.createElement("a");//show url in <a> and adding  target="_blank"
            a.href=tvShow.show.url;
            a.target='_blank';
            a.textContent='Details';
            article.appendChild(a);

            //using ternary method
            const img=document.createElement("img");
            img.src=tvShow.show.image ? tvShow.show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
            img.alt=tvShow.show.name;
            article.appendChild(img);


            // show summary in div
            const summary=document.createElement("div");
            summary.innerHTML=tvShow.show.summary || "no summary available";
            article.appendChild(summary);


            results.appendChild(article)



        });
    }
});
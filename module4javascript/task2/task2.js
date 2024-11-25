'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formValue");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Stop the default form submission

        const query = document.getElementById("query").value.trim();
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);

            }else {
                console.error("Network response was not ok");
            }

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    });
});

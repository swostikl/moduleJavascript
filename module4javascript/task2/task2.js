'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Stop the default form submission

        const query = document.getElementById("query").value.trim();
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    });
});

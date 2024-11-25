'use strict'
async function get_chuck_norris_joke(){
    const url="https://api.chucknorris.io/jokes/random";
    const response=await fetch(url);
    const joke_data=await response.json();
    console.log(joke_data.value);
}
get_chuck_norris_joke()

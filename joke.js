const get = document.getElementById("jokes");


async function myFun() {
    const getting = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: "application/json"
        }
    })
    // console.log(getting);
    let joke = await getting.json();
    // console.log(joke)
    let data = joke.joke;
    // console.log(data)
    get.innerHTML = data;
    // document.getElementById("jokes").innerHTML = data;
}
// myFun();
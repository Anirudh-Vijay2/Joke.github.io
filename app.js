const button = document.querySelector('#next');
const jokePara = document.querySelector('#joke');
const punch = document.querySelector('#punchline')

const JokeFunc = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        // console.log(data.setup);
        jokePara.innerHTML = data.setup;
        punch.innerHTML = data.punchline;
    }
    catch (error) {
        console.log("Some Error Occure")
        console.log(error)
        jokePara.innerHTML = "Unexpected error while loading jokes."
    }

}

JokeFunc()
button.addEventListener("click", JokeFunc);
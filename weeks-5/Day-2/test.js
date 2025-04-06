console.log("Starting ...")
//GET
const displayArtwork = (art) => {
    const {title, artist_title : artist} = art.data
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `The painting is named 
    ${title} by the artist ${artist}`;
}

const displayError = (error) => {
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `We have a problem ${error}`;
}

const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/14572")
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            displayArtwork(obj);
        })
        .catch((error)  => {
            displayError(error);
        });
    console.log("Work Done ...")
}
getArtwork()


//POST

console.log("Starting ...")

const data = {
    title: "Article on Javascript",
    body: "This is an article presenting the new features of Javascript", 
    userId:1
}

const objBody = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
}

const addArticle = () => {
    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

addArticle()


//POST USING FORM

{/* <form>
        <label for="title-article">The title of the article</label>
        <input type="text" name="title" id="title-article">
        <label for="content-article">The content of the article</label>
        <input type="text" name="body" id="content-article">
        <label for="user-article">The user that wrote the article</label>
        <input type="text" name="userId" id="user-article">
        <button>Submit the article</button>
    </form> */}

//====>:)


const addArticle1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const objBody = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }

    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

const formArticle = document.querySelector("form");
formArticle.addEventListener("submit", addArticle);
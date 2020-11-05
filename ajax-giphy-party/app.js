console.log("Let's get this party started!");

const form = document.querySelector('#searchform');
const searchTerm = document.querySelector('#search')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(searchTerm.value);
    getGif(searchTerm.value);
    searchTerm.value = '';
    
})

async function getGif(search){
    const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(result.data.data[0].images.original.url);
    const img = document.querySelector('#search-result');
    img.src = result.data.data[1];

    const div = document.createElement("div");
    div.classList('#gif-goes-here');
    div.appendChild(img);
    // create div,, appendchild(img)

}

//getGif(searchTerm.value);
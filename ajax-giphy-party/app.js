
  const $gifArea = $('#gif-go-here');
  const $searchTerm = $('#search');


  // get array of images from Giphy based on search term entered on form
  $('form').on('submit', async function(e){
    e.preventDefault();
    let searchInput = $searchTerm.val();
    // clear out input box
    $searchTerm.val("");

    // axios call
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: searchInput,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    // call method to put image in GIF div
    addGif(response.data);
  });

  function addGif (response) {
    let resultSize = response.data.length;
    
    // in case your search term isn't found, do nothing.
    if (resultSize){
      let randomImage = Math.floor(Math.random() * resultSize);

      // building div and make it pretty
      let $newDiv = $("<div class=\"col-md-4 col-12 mb-4\">");
      // make img and drill down to gif url
      let $newImg = $("<img>", {
          src: response.data[randomImage].images.original.url,
          class: "w-100"
          
      });
      //connect img to div
      $newDiv.append($newImg);
      // now connect div+img and connect it to our gifArea results part
      $gifArea.append($newDiv);
    }
  }

  // clear out all the images
  $('#remove').on('click', function(){
    $gifArea.empty();
  });
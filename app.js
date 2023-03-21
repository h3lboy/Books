const api = 'https://fakerapi.it/api/v1/books?_quantity=50'



let first = "http://api.giphy.com/v1/gifs/search"
let search = "?q="
let q = "cat"
let key = "&api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs"

//full api with the query
let fullApi  = ""




//get all my elements
const btn = document.getElementById("btn");

btn.addEventListener('click',function(){
    getApi()

})


async function getApi(){
   await fetch(api).then(function(response){
    return response.json()
   }).then(function(data){

   for(let i = 0; i <data.data.length; i++){
      const bookImage = document.createElement('img');
      bookImage.src = data.data[i].image;
      bookImage.className = "mb-2"
      document.getElementById('imgs').appendChild(bookImage)
   }

  })
}

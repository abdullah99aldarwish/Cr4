let MoviesJson = JSON.parse(Movies);

for (let val of MoviesJson) {
    document.getElementById("result").innerHTML += `
    <div class="col-6">
    <div class="card" style="width: 18rem;">
    <img src="${val.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.movieName}</h5>
      <p class="card-text">${val.description}</p>
      <a class="btn btn-primary btn">Likes <span class="likes">${val.Likes}<span></a>
    </div>
  </div>
  </div> `
}
let likes = document.getElementsByClassName("btn")
for (let l = 0; l < likes.length; l++) {

    likes[l].addEventListener("click", function() {
        MoviesJson[l].Likes++;
        document.getElementsByClassName("likes")[l].innerHTML = MoviesJson[l].Likes;
    })

}
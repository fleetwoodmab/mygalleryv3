const likebtn = document.querySelector("#like");

likebtn &&
  likebtn.addEventListener("click", () => alert("Thank you :)"));

const morebtn = document.querySelector("#more");

morebtn &&
  morebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none";
    } else {
      readMoreDiv.style.display = "block";
    }
  });


const ratebtn  = document.querySelector("#rateit");

ratebtn &&
  ratebtn.addEventListener("click", () => {
   let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("Try again with a number between 1 and 5!");
  }
  else{

    document.querySelector("#rating").innerHTML = "You gave a rating of: ";
    for (let i=0; i < userRating; i++){
        document.querySelector("#rating").innerHTML +="<i class='yellow star icon'></i>";
    }
  }
});


$(".delart").click(() => confirm('Really delete this art?'))

$(".delgallery").click(() => confirm('Really delete this gallery?'))
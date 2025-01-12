const cards = document.querySelectorAll(".card")

let machedCard=0
let cardOne, cardTwo;
let disableDeck = false

function flipcard(e) {
    // getting user clicked card
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disableDeck) {
      
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;
        disableDeck=true
        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg)

    }
}

function matchCards(img1,img2){
  if(img1 === img2){
    machedCard++
      if(machedCard==8)
      {
        setTimeout(()=>{
          return shuffleCard();
        },1000);
      }
   cardOne.removeEventListener("click",flipcard)
   cardTwo.removeEventListener("click",flipcard)
   cardOne = cardTwo=""
   return disableDeck = false;
    
  }
 setTimeout(()=>{
  cardOne.classList.add("shake");
  cardTwo.classList.add("shake");

 },400);
 setTimeout(()=>{
  cardOne.classList.remove("shake","flip");
  cardTwo.classList.remove("shake","flip");
  cardOne =cardTwo= ""
  disableDeck=false
 },1200);
  
  
}
function shuffleCard(){
   machedCard=0
cardOne = cardTwo = ""
disableDeck=false
let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
arr.sort(() => Math.random() > 0.5 ? 1 : -1)
cards.forEach((card, index) => {
  card.classList.remove("flip")
  let imgTag = card.querySelector("img")
  imgTag.src = `images/img-${arr[index]}.png`
  card.addEventListener("click", flipcard)
})
}
shuffleCard();
cards.forEach(card => {
    // card.classList.add("flip")
    card.addEventListener("click", flipcard)
})
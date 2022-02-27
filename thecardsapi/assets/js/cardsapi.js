console.log('connected');

// 1.buttn event hand

//get input value and error handling

// const searchBtn=()=>{

//         console.log('click')
// }

// const fetchUrl=()=>{
//         const url=`https://deckofcardsapi.com/api/deck/new/draw/?count=52`


// }

const rowDiv =document.getElementById('row');

const spinner= document.getElementById('spinner')

// spinner.classList.remove='d-none';
// spinner.classList.add='d-none';
spinner.style.display='none'

document.getElementById('search-btn').addEventListener('click',function(e){

        console.log('click')

        // spinner.classList.remove='d-none';
        // spinner.classList.add='d-block';
        spinner.style.display='block'

       



        const input =document.getElementById('search-field')
        const inputValue=input.value;

        const errorMsg=document.getElementById('error');

        if(isNaN(inputValue) || inputValue===''){
                // string 
               errorMsg.innerText=`please write a number`

               rowDiv.textContent='';

        }

        else if(inputValue<0){
                errorMsg.innerText=`give a positive number grater than 0`
                rowDiv.textContent='';
        }

        else if(inputValue>52){

                errorMsg.innerText=`there is only 52 card you have select (1 to 52)`   

                rowDiv.textContent='';
        }


        else{
                // number

                const fetchUrl=(inputValue)=>{
                        const url=`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`

                        fetch(url)
                        .then(res=>res.json())
                        .then(data=>displayData(data))

                        console.log(inputValue)
                        errorMsg.innerText=''

                }
                fetchUrl(inputValue)


        }

       

        input.value=''
        
})


const searchField=()=>{
        // console.log('click')
}

const displayData= (cards)=>{

// console.log(cards)
const cardsRemaining=cards
const cardsdata =cards.cards


console.log(cardsdata)


rowDiv.textContent='';


for(const card of cardsdata){

        spinner.style.display='none'
        const colDiv=document.createElement('div');
       
        // colDiv.classList.add('col-12')
        // colDiv.classList.add('col-md-6')
        // colDiv.classList.add('col-lg-3')
        // colDiv.classList.add('g-2')
        colDiv.classList.add('col')
        // colDiv.classList.add('border')
        // colDiv.classList.add('border-primary')

      
// colDiv.innerHTML=`
// <div class="border border-success mx-auto text-center p-3 m-4">
// <h2>${card.value}</h2>

// <h3>${card.code}</h3>
// <h4>${card.suit}</h4>
// <img src=${card.image}>
// </div>
// `
colDiv.innerHTML=`
<div class="card border border-primary p-2">
<img src="${card.image}" class="card-img-top" alt="...">
<div class="card-body p-2 mx-auto text-center">
  <h4> value: ${card.value}</h4>
  <h5 class="card-title">suit: ${card.suit}</h5>

  <p class="card-text">code: ${card.code}</p>
  <button onclick="cardDetaitls('${card.code}')" class="btn btn-primary">details</button>
</div>
</div>
`

console.log(colDiv.innerHTML);
rowDiv.appendChild(colDiv)



}

document.getElementById('remaining').innerHTML=`<div class="mx-auto text-center border border-info my-3 p-2">
<h3 class="text-success"> you have remaining: ${cardsRemaining.remaining} cards now</h3>
</div>`







// const cards1=cardsdata.forEach(item =>console.log(item))
// const cards1=cardsdata.forEach(item =>{
// const rowDiv =document.getElementById('row');

// rowDiv.innerHTML=`<div class="col-12 col-md-6 col-lg-4">
// <h2>${item.value}</h2>
// </div>`

// })

// console.log(cards1)
        
}

const cardDetaitls =(code)=>{
        // console.log(code)
        const cardvaluecode=code
        console.log(cardvaluecode)

        const fetchUrl=(inputValue)=>{
                const url=`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`

                fetch(url)
                .then(res=>res.json())
                .then(data=>cardmainDeaiis(data.cards))

                



        }
        fetchUrl(52)

        const cardmainDeaiis=(cards)=>{
             const allcards=cards;

             console.log(allcards)
             const SingleCard=allcards.find(card=>card.code===cardvaluecode)
             console.log(SingleCard)

             rowDiv.innerHTML=''
     const div =document.createElement('div')

     div.innerHTML=`
     <div class="card border border-primary p-2 mx-auto text-center">
     <img src="${SingleCard.image}" class="card-img-top" alt="...">
     <div class="card-body p-2 mx-auto text-center">
       <h4> value: ${SingleCard.value}</h4>
       <h5 class="card-title">suit: ${SingleCard.suit}</h5>
     
       <p class="card-text">code: ${SingleCard.code}</p>
     </div>
     </div>
     
     `

     document.getElementById('remaining').innerHTML=`<div class="mx-auto text-center border border-info my-3 p-2">
<h3 class="text-success"> you have seen deatails of:
<span> value: ${SingleCard.value}</span>
<span>suit: ${SingleCard.suit}</span>

<span>code: ${SingleCard.code}</span></h3>
</div>`
     rowDiv.appendChild(div)
        }
}

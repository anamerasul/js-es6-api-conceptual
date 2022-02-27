console.log('connected');

const commonurl=()=>{
        const url ='https://api.thedogapi.com/v1/breeds'
        return url
}

const loadDog=()=>{

        const url=commonurl()

        fetch(url)
        .then(res=>res.json())
        .then(data=>displayDog(data))
}


// fetch('https://api.thedogapi.com/v1/breeds')

// .then(res =>res.json())
// .then(data => console.log(data))

const loadBtnhandler=(btnid)=>{

document.getElementById(btnid).addEventListener('click',function(e){
        loadDog();

})

}

loadBtnhandler('load-dog');


const displayDog=(doglist)=>{
        // console.log(doglist)

        const Maincontainer=document.getElementById('main');
        const firsttenData=doglist.slice(10,122);

        const div1=document.createElement('div');
        div1.classList.add('container');

        const div2=document.createElement('div');
        div2.classList.add('row')


       

        console.log(firsttenData)

        for(const dog of firsttenData){

                console.log(dog)

                const div3=document.createElement('div');
                div3.classList.add('col-lg-4')
                div3.classList.add('col-sm-6')
                div3.classList.add('col-12')

                div3.innerHTML=`
                <h2>${dog.name}</h2>
                <p>${dog.temperament}</p>
                <h4>${dog.weight.imperial}</h4>
                <img class="img-fluid" src=${dog.image.url} height="200px" width="200px">
                <button class="btn mt-5 btn-danger" onclick="showdetails()">Show details</button>
                `

                console.log(div1)

                div2.appendChild(div3);

                console.log(dog.name)
                div1.appendChild(div2);
          Maincontainer.appendChild(div1);


        }

        



      

}


// function showdetails(){
//         const url=commonurl()

//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>console.log(data))
// }

// const showdetails=(dog)=>{

//         console.log(dog.name)
// }
        // const Maincontainer=document.getElementById('main2');
        // const firsttenData=doglist.slice(0,12);

        // const div1=document.createElement('div');
        // div1.classList.add('container');

        // const div2=document.createElement('div');
        // div2.classList.add('row')


       

        // console.log(firsttenData)

        // for(const dog of firsttenData){

                // console.log(dog)

                // const div3=document.createElement('div');
                // div3.classList.add('col-lg-4')
                // div3.classList.add('col-sm-6')
                // div3.classList.add('col-12')

                // div3.innerHTML=`
                // <h2>${dog.name}</h2>
                // <img class="img-fluid" src=${dog.image.url} height="200px" width="200px">
                // <button class="btn mt-5 btn-danger" onclick="showdetails()">Show details</button>
                

//         //         console.log(div1)

//         //         div2.appendChild(div3);

//         //         console.log(dog.name)
//         //         div1.appendChild(div2);
//         //   Maincontainer.appendChild(div1);
// }

// }



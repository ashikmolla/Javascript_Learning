const lodePhone = async (searchText, dataLimet) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    dispalayPhone(data.data, dataLimet)
}


const dispalayPhone = (phones, dataLimet) => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';


    // document.getElementById('showItem').addEventListener('click', function () {
    //     phones = phones.slice(0, 20);
    // })
    const showItem = document.getElementById('showItem');
    if (dataLimet && phones.length > 10) {
        phones = phones.slice(0, 3);
        showItem.classList.remove('d-none')
    }else{
        showItem.classList.add('d-none')
    }

    // display no phone 
    const noPhone = document.getElementById('no-phone');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    } else {
        noPhone.classList.add('d-none')
    }
   
    phones.forEach(phone => {
        // console.log(phone)
        const phoneSingleDiv = document.createElement('div')
        phoneSingleDiv.classList.add = ('col');
        phoneSingleDiv.innerHTML = `
        <div class="card h-75 border">
                <img src="${phone.image}" class="card-img-top h-75" alt="${phone.brand}">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
                    <!-- Button trigger modal -->
                    <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Show Details
                      </button>
                    </div>
                
                </div>
                      `
        phoneContainer.appendChild(phoneSingleDiv)
        // spinner lodaer none 
    })
    togglLoder(false)

}

const processSearch =(dataLimet)=>{
    togglLoder(true);

    const searchFild = document.getElementById('search-fild')
    const searchText = searchFild.value;
    lodePhone(searchText, dataLimet);
}

// enter work now 
document.getElementById('search-fild').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
    }
});

document.getElementById('search-btn').addEventListener('click', function () {
   processSearch(10)
})

//  show all Item ?////////// this not waaay
document.getElementById('showItem').addEventListener('click', function(){
  processSearch() 
})


const togglLoder =isLoading=>{
    const loader =document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('d-none')
    }else{
        loader.classList.add('d-none')
    }
}

// ----------------------
// adde a modal
// ---------------


const phoneDetails= async id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    const res=await fetch(url);
    const data=await res.json();
    displayModal(data.data)
}
 const displayModal = data=>{
 console.log(data)
 const modalTitle =document.getElementById('staticBackdropLabel');
 modalTitle.innerText=data.name;
 const modalBody=document.getElementById('modal-body');
 modalBody.innerHTML=`
 <p> ${data.releaseDate ? data.releaseDate : "No found Release Date"}</p>
 <p> ${data.mainFeatures ? data.mainFeatures.displaySize : "No found Display Siz "}</p>
 <p> ${data.mainFeatures ? data.mainFeatures.memory : "No found Memory"}</p>

 <p> ${data.others ? data.others.Bluetooth : "No found Bluetooth model"}</p>
 
 `
 

 }


lodePhone();
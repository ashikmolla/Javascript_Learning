//  main link caletion/ 

const loadMealDB = (searhText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searhText}`
    fetch(url)
        .then(response => response.json())
        .then(data => diplayMealDB(data.meals))
}

 
const diplayMealDB = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
         <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
                    <!-- Button trigger modal -->
                <button onclick="lodMealsDitals(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsModal">
                    Details
                </button>

            </div>
    `
        mealsContainer.appendChild(mealDiv)
    })
}
// modal item with for know item details 
const lodMealsDitals = idMeal=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealsDitalsWithModal(data.meals[0]))
        .atch(error => console.log(error))
}
 // modal item with for know item details ===== async awit
 const lodMealsDitals2 =async (idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   try{
    const res =await fetch(url);
    const data=await(res.json);
    displayMealsDitalsWithModal(data.meals[0])
   }
   catch{
    console.log(error)
   }
}

const displayMealsDitalsWithModal=meal=>{
    document.getElementById('mealsModalLabel').innerText=meal.strMeal;
    const mealsModalBody=document.getElementById('mealsModalBody');
    mealsModalBody.innerHTML=`
    <img src="${meal.strMealThumb}">
    `
}


// item find 
document.getElementById('search-btn').addEventListener('click', function () {
    const searchFild = document.getElementById('search-fild').value
    // loadMealDB.value=''
    loadMealDB(searchFild)
})
loadMealDB('rice');

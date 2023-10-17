const loadCountrice= () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountris(data))
}
const displayCountris = countries => {
const countrisContainer=document.getElementById('all-countris');
// for(countri of countris){
//     console.log(countri)
// }

countries.forEach(country => {
    // console.log(country)
    const countryDiv=document.createElement('div');
    countryDiv.classList.add('country')
    countryDiv.innerHTML=`
    <h3> Name:- ${country.name.common}</h3>
    <p> Country:- ${country.capital ? country.capital:"No Countris"}</p>
    <button onclick="loadCountryDetiles('${country.cca2}')">Details</button>

    `
    countrisContainer.appendChild(countryDiv)
    // console.log(country.capital[0]);
})
}
const loadCountryDetiles =code=>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(response => response.json())
    .then(data => showCountryDetiles(data[0]))

}
const showCountryDetiles= country=>{
    const countryDetiles = document.getElementById('country-detiles');
   
   console.log(country)
    countryDetiles.innerHTML=`
    <h3> Name:- ${country.name.common}</h3>
    <img src='${country.flags.png}'>
    `
}
loadCountrice()
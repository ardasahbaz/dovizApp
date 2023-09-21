
const apikey = "450cf24da6df1e50b65a3e35";

const url = "https://v6.exchangerate-api.com/v6/" + apikey;


const listone = document.getElementById("list_one");
const listtwo = document.getElementById("list_two");
const amount = document.querySelector("#amount");
const btn = document.getElementById("calculate");
const sonuc = document.getElementById("sonuc");
const result = document.querySelector("#result");
const currency_one = document.querySelector("#currency_one");
const currency_two = document.querySelector("#currency_two");

fetch(url + "/codes")
 .then(res => res.json())
 .then(data =>{

    
   const items = data.supported_codes;

    let options;
    for(let item of items ) {

     options += ` <option value=${item[0]}>${item[1]}</option> ` ;
     
     
    }

   listone.innerHTML = options;
   listtwo.innerHTML = options;
    
 })


btn.addEventListener("click", function(){

const döviz1 = currency_one.value;
const döviz2 = currency_two.value;
const miktar = amount.value;

fetch(url + "/latest/" + döviz1)
.then(res => res.json())
.then(data => {

    let sonuc = (data.conversion_rates[döviz2] * miktar).toFixed(3);

    result.innerHTML = `
    <div class="card border-primary">
    <div class="card-body text-center" style="font-size:30px;">
        ${miktar} ${döviz1} = ${sonuc}
    </div>
</div>
    `
    
    


})





})




















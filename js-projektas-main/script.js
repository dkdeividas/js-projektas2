//1. susikurti JS kintamuosius - gauti reiksmes is input lauku
//visi input
const my_productCode = document.getElementById('productCode');
const my_productName = document.getElementById('productName');
const my_productQuantity = document.getElementById('productQuantity');
const my_find_productCode = document.getElementById('find_productCode');
//visi mygtukai
const my_insertProduct = document.getElementById('insertProduct');
const my_deleteProduct = document.getElementById('deleteProduct');
const my_findProduct = document.getElementById('findProduct');
//resultatus spausdinsiu i 
const my_results = document.getElementById('results');
//2. sukurti  funkcijas create, read, delete
//irasymo i local storage funkcija

const createProduct = () => {

   const product = {
    my_productCode: my_productCode.value,
    my_productName: my_productName.value,
    my_productQuantity: my_productQuantity.value,
  }

  localStorage.setItem("product", JSON.stringify(product));
  
  if(my_productCode.value.lenght < 3){
    alert("uzpildyti laukus")
  }

  // function validateForm() {
  //   const x = my_productCode["productCode"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }

  //turiu gauti is formos duomis
  //turiu patikrinti, ar laukai uzpildyti
  console.log(my_productCode.value, my_productName.value, my_productQuantity.value);

  // aprasyti irasymo i local storage funkcionaluma
  
  //isvalyti input laukus

};


//duomenu gavimo is local storage funkcija
const getData = () => {

  const product = JSON.parse(localStorage.getItem("product"));

  console.log(my_productCode.value);
  //patikrinti ar uzpildytas kodo laukas


  //parasyti funkcionaluma duomenu gavimui is local storage

  //isvalyti laukus
  
}
//duomenu istrynimo is krepselio masyvo funkcija
const deleteData = () => {
  console.log(my_find_productCode.value);
  
  //patikrinti ar uzpildytas kodo laukas


  //parasyti funkcionaluma duomenu istrynimui is krepselio masyvo

  //isvalyti laukus
  
}

//3. ant mygtuku uzdeti  funkciju iskvietimus
my_insertProduct.addEventListener('click', createProduct);
my_deleteProduct.addEventListener('click', getData);
my_findProduct.addEventListener('click', deleteData);

//4. funkciju viduje darbas su local storage
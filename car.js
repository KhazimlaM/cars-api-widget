//query to select the car/model/color template from script tag in html
let template = document.querySelector('.carTemplate')  
let template2 = document.querySelector('.BrandTemplate')
let template3 = document.querySelector('.ColorTemplate')
//query to target the column names of the headings that will display the data in html
let carElement = document.querySelector('.cars')
let brandElement = document.querySelector('.brands')
let colorElement = document.querySelector('.colors')
// Here we are compiling the the templated that we have in lin 2-4 for usage of innerHTML
let carTemplate = Handlebars.compile(template.innerHTML)
let colorTemplate = Handlebars.compile(template3.innerHTML)
let brandTemplate = Handlebars.compile(template2.innerHTML)

// Get the the api that contains data from cars using axios 
document.addEventListener('DOMContentLoaded', function () {
    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result => {
            console.log(result.data);

            // Create a variable for the compiled car template and create a car object that will return the data
            let list = carTemplate({
                car: result.data
            })
            carElement.innerHTML = list

        });




});

// Get the the api that contains data from cars using axios 
document.addEventListener('DOMContentLoaded', function () {
    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(results => {
            console.log(results.data);

            // Create a variable for the compiled brand template and create a car object that will return the data
            let theList = brandTemplate({
                car: results.data
            })
            brandElement.innerHTML = theList

        });

});

// Get the the api that contains data from cars using axios 
document.addEventListener('DOMContentLoaded', function () {
    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(myResults => {
            console.log(myResults.data);

            // Create a variable for the compiled color template and create a car object that will return the data
            let myList = colorTemplate({
                car: myResults.data
            })
            colorElement.innerHTML = myList

        });

});





let templateOne = document.querySelector('.displayingTemplate')
let templateTwo = document.querySelector('.displayingTemplateTwo')
let templateThree = document.querySelector('.displayingTemplateThree')
let carTemplates = Handlebars.compile(templateOne.innerText)
let makeTemplates = Handlebars.compile(templateTwo.innerText)
let colorTemplates = Handlebars.compile(templateThree.innerText)
const displayingApi = document.querySelector('.apiData')
let carDropdown = document.getElementById("myCars");
let colorDropdown = document.getElementById("myColors");
let myButton = document.querySelector('.btn')



axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(myResults => {
        console.log(myResults.data);

        let List = carTemplates({
            car: myResults.data
        })
        displayingApi.innerHTML = List

    });


axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(Results => {
        console.log(Results.data);

        let myList = colorTemplates({
            car: Results.data
        })
        displayingApi.innerHTML = myList

    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(Resultz => {
        console.log(Resultz.data);

        let theList = makeTemplates({
            car: Resultz.data
        })
        displayingApi.innerHTML = theList

    });


myButton.addEventListener('click', function () {

    console.log(colorDropdown.value)
    console.log(carDropdown.value)

    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carDropdown.value}/color/${colorDropdown.value}`)
        .then(filtering => {
            console.log(filtering.data);


            let List = carTemplates({
                car: filtering.data
            })
            displayingApi.innerHTML = List

        });


    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carDropdown.value}`)
        .then(filtering => {
            console.log(filtering.data);


            let List = carTemplates({
                car: filtering.data
            })
            displayingApi.innerHTML = List



        })
    
        
       
        axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/color/${colorDropdown.value}`)
        .then(filtering => {
            console.log(filtering.data);


            let List = carTemplates({
                car: filtering.data
            })
            displayingApi.innerHTML = List


        })

    });












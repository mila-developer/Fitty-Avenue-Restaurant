'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const logoutUser = document.querySelector('.btn--logout');

const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const section4 = document.querySelector('#section--4');
const sectionReservation = document.querySelector('#section--reservation');


const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


////////////////////////////////////////////////////////////////
//////// MENU /////////////////////////////////////////////////

let plates = [
{
    Name:"Salmon",
    Day:"Monday",
    Type:"Fish",
    Price:8,
    img:"https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
},

{
    Name:"Lasagna",
    Day:"Monday",
    Type:"Meat",
    Price:7,
    img:"https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg"
},

{
    Name:"Sardines",
    Day:"Tuesday",
    Type:"Fish",
    Price:6,
    img:"https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg"
},

{
    Name:"Chicken",
    Day:"Tuesday",
    Type:"Meat",
    Price:5,
    img:"https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg"
},

{
    Name:"Fish And Chips",
    Day:"Wednesday",
    Type:"Fish",
    Price:5,
    img:"https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg"
},

{
    Name:"Hamburguer",
    Day:"Wednesday",
    Type:"Meat",
    Price:4,
    img:"https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg"
},

{
    Name:"Sushi",
    Day:"Thursday",
    Type:"Fish",
    Price:10,
    img:"https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg"
},

{
    Name:"Spaghetti bolognese",
    Day:"Thursday",
    Type:"Meat",
    Price:7,
    img:"https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg"
},

{
    Name:"Chicken",
    Day:"Friday",
    Type:"Meat",
    Price:6,
    img:"https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg"
},
    
{
    Name:"Fish Soup",
    Day:"Friday",
    Type:"Fish",
    Price:7,
    img:"https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg"
}
]

////////////////////////////////////////////////////////////////
//////// Conect to menu /////////////////////////////////////////////////

const loadMenu = () => {
    const menuList=document.getElementById("menuList")
    for(let i=0;i<plates.length;i++){
        let plateDiv=document.createElement('dl')
        let plateName=document.createElement('dt')
        plateName.className="option"
        plateName.textContent=plates[i].Name
        let platePrice=document.createElement('dd')
        platePrice.className="price"
        platePrice.textContent=`${plates[i].Price}€`
        let plateImage=document.createElement('img')
        plateImage.className="img-menu"
        plateImage.src=plates[i].img
        plateDiv.appendChild(plateName)
        plateDiv.appendChild(platePrice)
        plateDiv.appendChild(plateImage)

        menuList.appendChild(plateDiv)
    }

    
};

///////////////////////////////////////////////////////
/// Login User

const LoginUser = ()  => {
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');

    const accounts = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
    const select_Reserv = localStorage.getItem("orders")? JSON.parse(localStorage.getItem("orders")): []
    const currentUser = accounts.find(acc => acc.user === inputLoginUsername.value && acc.pass === inputLoginPin.value);  
    console.log(currentUser);

    if (currentUser) {
    localStorage.setItem("userLog", JSON.stringify(currentUser));
    localStorage.setItem("select_Reserv", JSON.stringify(select_Reserv));

    sectionReservation.style.opacity = 100;
    logoutUser.style.opacity = 100;
    alert('You are connected, now you can make your reservation 🥧')
    } else {
        alert('Your login failed :(');
    }

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
};



//////////////////////////////////////////////////
// LogOut user

const LogoutUser = () => {
    const logoutUser = document.querySelector('.btn--logout');
    localStorage.removeItem("userLog");


    if (logoutUser) {
        console.log('logout user');
        sectionReservation.style.opacity = 0;
        logoutUser.style.opacity = 0;
        alert('You logged out')
    }
}


///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
  
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
}
});


//////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section2.getBoundingClientRect();
    console.log(s1coords);
  
    console.log(e.target.getBoundingClientRect());
  
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
);
  
    section2.scrollIntoView({ behavior: 'smooth' });
});

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section3.getBoundingClientRect();
    console.log(s1coords);
  
    console.log(e.target.getBoundingClientRect());
  
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
);
  
    section3.scrollIntoView({ behavior: 'smooth' });
});

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section4.getBoundingClientRect();
    console.log(s1coords);
  
    console.log(e.target.getBoundingClientRect());
  
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
);
  
    section4.scrollIntoView({ behavior: 'smooth' });
});


///////////////////////////////////////
// Page navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
  
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector({id}).scrollIntoView({ behavior: 'smooth' });
}
});


////////////////////////////////////////////////
// Reservation

const SelectReserv = () => {
    const mondayPick = document.getElementById("Monday").value;
    const tuesdayPick = document.getElementById("Tuesday").value;
    const wednesdayPick = document.getElementById("Wednesday").value;
    const thursdayPick = document.getElementById("Thursday").value;
    const fridayPick = document.getElementById("Friday").value;

    console.log([mondayPick, tuesdayPick, wednesdayPick, thursdayPick, fridayPick])

    const listReservs = [
        mondayPick,
        tuesdayPick,
        wednesdayPick,
        thursdayPick,
        fridayPick
    ];

    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];

    let priceTotal = 0;
    listReservs.forEach(function (pik, index) {
    const Plates = plates.find(function (plate) {
            return plate.Day == weekDays[index] && plate.Type == pik
        })

        if(Plates) {
            priceTotal += Plates.Price 
        }
    });

    console.log(priceTotal);

    let informations = JSON.parse(localStorage.getItem("userLog"))
    informations.order = listReservs
    informations.price = priceTotal

    localStorage.setItem("userLog", JSON.stringify(informations));

    let registeredUsers = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]

    let currentUser = registeredUsers.find(acc => acc.user === informations.user && acc.pass === informations.pass);  
    currentUser.order = informations.order;
    currentUser.price = informations.price;

    console.log(registeredUsers)
    localStorage.setItem("users",JSON.stringify(registeredUsers))

    document.getElementById("list--reserv").innerHTML = `The total price is ${priceTotal}€`;
    
}

////////////////////////////////////////////
// Register user

const RegisterBtn=()=>{
    const user=document.getElementById("register_user").value
    const pass=document.getElementById("register_pass").value
    const userObj={
        user:user,
        pass:pass,
        order:[],
        price:0
    }
    console.log(userObj)    
    var registeredUsers = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
    registeredUsers.push(userObj)
    console.log(registeredUsers)
    localStorage.setItem("users",JSON.stringify(registeredUsers))
}
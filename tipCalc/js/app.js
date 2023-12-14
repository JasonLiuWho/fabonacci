const confirmBtn = document.getElementById("confirmBtn");
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// confirm button
confirmBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    getTotal()
})

const getTotal =()=> {
    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById("tipAmt").value)
    const otherAmt = parseFloat(document.getElementById("otherAmt").value)
    const yourTip = document.getElementById("yourTip")
    const receipt = document.getElementById("receipt")
    const theSubtotal = document.getElementById("theSubtotal")
    const taxDisplay = document.getElementById("tax")
    
    let taxTotal = subtotal * tax;
    
    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)
    
    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : (subtotal * tipAmt) + subtotal + taxTotal

    theSubtotal.innerText = subtotal 
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
    
    // isNaN(tipAmt) ? total = subtotal + otherAmt : total = (subtotal * tipAmt) + subtotal
}

//make receipt

const makeReceipt = (obj, el)=> {
    const tableRow = document.createElement("tr")
    tableRow.classList.add("receipt-item", "text-start")

    const receiptChoice = document.createElement("td")
    receiptChoice.classList.add("receipt-choice", "text-center")
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement("td")
    receiptQty.classList.add("receipt-qty", "text-center")
    receiptQty.setAttribute("id", `qty${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement("td")
    receiptPrice.classList.add("receipt-price", "text-center")
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement("td")
    itemSubtotal.classList.add("item-subtotal", "text-center")
    itemSubtotal.setAttribute("id", `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal

    console.log(itemSubtotal);

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)
    el.appendChild(tableRow)

    // console.log(listItem)
}

const updateReceipt =(obj, qty, itemTotal)=> {

    console.log(obj);
    const receiptQty = document.getElementById(`qty${obj.id}`)
    receiptQty.innerText = qty
    // console.log(receiptQty.innerText);

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
    console.log(itemSubtotal)
    itemSubtotal.innerText = itemTotal.toFixed(2)
}

// create menu item arr or obj

let menuItems = [
    {
        id: 1,
        type: "appetizers",
        item: "Salmon Dip",
        desc: "fresh salmon spread and toast",
        imgUrl: "salmon.jpg",
        price: 12.99,
        qty: 10
    },
    {
        id: 2,
        type: "appetizers",
        item: "Buffalo Wings",
        desc: "spicy buffalo wings with dressing",
        imgUrl: "wings.jpg",
        price: 17.99,
        qty: 0
    },
    {
        id: 3,
        type: "appetizers",
        item: "Mozzarella Cheese Stick",
        desc: "mozzarella cheese breaded and fried and servered with a marinara sauce",
        imgUrl: "cs.jpg",
        price: 8.99,
        qty:0
    },
    {
        id: 4,
        type: "appetizers",
        item: "Hush Puppies",
        desc: "deep fried hush puppies served with your choice of sauce",
        imgUrl: "hush.jpg",
        price: 10.99,
        qty: 0
    },
    {
        id: 5,
        type: "entrees",
        item: "chicken sandwich",
        desc: "breaded chicken breast between 2 buns with pickles, tomatoes, and lettuces",
        imgUrl: "ck s.jpg",
        price: 12.99,
        qty: 0
    },
    {
        id: 6, 
        type: "entrees",
        item: "veggie burger",
        desc: "bean veggie patty served with fries",
        imgUrl: "veggie.jpg",
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: "entrees",
        item: "salmon",
        desc: "atlantic salmon servered over grits with a side of spainach",
        imgUrl: "salmon.jpg",
        price: 19.99,
        qty: 0
    },
    {
        id: 8,
        type: "entrees",
        item: "lobster linguini",
        desc: "creamy lobster linguini served with a side of toast",
        imgUrl: "lob.jpg",
        price: 25.99,
        qty: 0
    },
    {
        id: 9,
        type: "drinks",
        item: "water",
        desc: "spring waterfall water",
        imgUrl: "water.jpg",
        price: 1.00,
        qty: 0
    },
    {
        id: 10,
        type: "drinks",
        item: "lemonade",
        desc: "fresh squeezed lemonade",
        imgUrl: "lemon.jpg",
        price: 999.99,
        qty: 0
    },
    {
        id: 11,
        type: "drinks",
        item: "martini",
        desc: "martini made with love",
        imgUrl: "martini.jpg",
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: "drinks",
        item: "Jungle Juice",
        desc: "Jolly Rancher, Sour Patch, Vodka Gray Goose and Titos, Gummy Bear, Lemonade, Sprite, fresh sliced pineapples, oranges, lemons, strawberry, and  ",
        imgUrl: "junglejuice.jpg",
        price: 79.99,
        qty: 0
    },
    {
        id: 13,
        type: "desserts",
        item: "chocolate wave",
        desc: "chocolate fudge cake with a scoop of your choice of ice cream on top drizzled with hersay chocolate syrup",
        imgUrl: "cw.jpg",
        price: 15.99,
        qty: 0,
    },
    {
        id: 14,
        type: "desserts",
        item: "ice cream sundae",
        desc: "good sundae",
        imgUrl: "ic.jpg",
        price: 8.99,
        qty: 0 
    }, 
    {
        id: 15,
        type: "desserts",
        item: "cookies",
        desc: "yummy cookies",
        imgUrl: "cookies.jpg",
        price: 5.99,
        qty: 0
    },
    {
        id: 16,
        type: "desserts",
        item: "cheesecake",
        desc: "blah blah blah",
        imgUrl: "cheesecake.jpg",
        price: 6.99,
        qty: 0
    }
]

//grab the menu-divs

// grab the types
const menuType = [
    "appetizers", 
    "entrees", 
    "drinks", 
    "desserts"
];

menuDivs.forEach(div => {
    const menuSubheading = document.createElement("h3")
    menuSubheading.classList.add("menu-subheading", "text-capitalize");

    const row = document.createElement("div")
    row.classList.add("row")

    div.appendChild(menuSubheading)
    div.appendChild(row)

})

for (let i = 0; i < menuType.length; i++) {
    menuDivs[i].children[0].innerText = menuType[i]
    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}

// load the menu items
//grab the appRow

const appRow = document.getElementById("appetizersRow")
const entreesRow = document.getElementById("entreesRow")
const drinksRow = document.getElementById("drinksRow")
const dessertsRow = document.getElementById("dessertsRow")

// console.log(appRow);

menuItems.forEach(item => {
    const column = document.createElement("div")
    column.classList.add('col-md-3')
    const card = document.createElement("div")
    card.classList.add("card", "h-100")
    card.innerHTML = `
    <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top"/>
        <div class="card-body">
            <h4 class="card-title">${item.item}</h4>
            <p class="card-text">${item.desc}</p>
        </div>
    <footer class="card-footer">
    <p class="card-text item-price">${item.price}</p>
    <div class="buttons-div d-flex justify-content-around">
        <button    
            class="btn btn-danger cart-btn" 
            id="Btn${item.id}" 
            data-id="${item.id}"
            data-price="${item.price}"
            data-qty="${item.qty}"
            data-item="${item.item}"
        >add to cart</button>
        <div class="qty-div">
            <button class="btn btn-primary btn-subtract" 
            id="btnSubtract${item.id}"
            data-id="${item.id}"
            data-qty="${item.qty}"
            > - </button>
            <span class="quantity" id="quantity${item.id}">${item.qty}</span>
            <button class="btn btn-primary btn-add" 
            id="btnAdd${item.id}"
            data-id="${item.id}"
            data-qty="${item.qty}"
            > + </button>
        </div>
    </div>
    </footer>
    `

    column.appendChild(card);
    // console.log(column);

    // appRow.appendChild(column);

    //Switch (menuItem.type)
    switch (item.type) {
        case "appetizers":
            appRow.appendChild(column)
            break;
        case "entrees":
            entreesRow.appendChild(column)
            break;
        case "drinks":
            drinksRow.appendChild(column)
            break;
        case "desserts": 
            dessertsRow.appendChild(column)
            break;
        default:
            console.log("Error: menu type not listed")
            break;
    }
})

const cartButtons = document.querySelectorAll(".cart-btn")
// const cartSubtotal = document.getElementById("cartSubtotal")

let subtotal = 0;
let tax = 0.07;
let receiptArray = [];

//add items to cart
cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute("data-price"));
    const item = button.getAttribute("data-item");
    const id = parseFloat(button.getAttribute("data-id"));

    button.addEventListener("click", ()=> {
        let qty;
        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].id == id ? qty = menuItems[i].qty : null
        }
        console.log(qty);
        addItems(price, qty, item, id);
    })
})

const addItems =(price, qty, item, id) => {

    let itemObj = {
        id,
        item,
        qty,
        price,
        itemTotal: qty * price
    }

    console.log(itemObj.qty, qty);

    receiptArray = [...receiptArray, itemObj];
    makeReceipt(itemObj, receipt);
    console.log(itemObj);

    // if(itemObj.qty == 1) {
    //     receiptArray = [...receiptArray, itemObj]
    //     makeReceipt(itemObj, receipt)
    //     console.log(itemObj);
    // }   else {
    //     for (let i = 0; i < receiptArray.length; i++) {
    //         if (receiptArray[i].id === id) {
    //             receiptArray[i].qty = itemObj.qty++
    //             receiptArray[i].itemTotal = receiptArray[i].qty * price
    //             updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemTotal);
    //         }
    //     }
    // }
    subtotal += price
    cartSubtotal.innerText = subtotal.toFixed(2);
    
    console.log(receiptArray);
}

const btnSubtract = document.querySelectorAll(".btn-subtract");
const btnAdd = document.querySelectorAll(".btn-add");

btnSubtract.forEach(button=> {

    // console.log(button)
    button.addEventListener("click", ()=> {
        // const btnQty = parseFloat(button.getAttribute("data-qty"));
        const btnId = parseFloat(button.getAttribute("data-id"));
        const spanQty = document.getElementById(`quantity${btnId}`);

        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id == btnId && menuItems[i].qty > 0) {
                menuItems[i].qty -= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

console.log(cartButtons[12].dataset.qty);
    
btnAdd.forEach(button=> {
    
    // console.log(button);
    button.addEventListener("click", ()=> {
        // const btnQty = parseFloat(button.getAttribute("data-qty"));
        const btnId = parseFloat(button.getAttribute("data-id"));
        const spanQty = document.getElementById(`quantity${btnId}`);

        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id == btnId 
                && menuItems[i].qty < 20 
                && cartButtons[i].dataset.id == btnId) {
                console.log(cartButtons[i]);
                menuItems[i].qty += 1
                cartButtons[i].setAttribute("data-qty", menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            };
        };
    });
});

let shop = document.getElementById('shop');

let shopItemData = [
    {
        id: "dsfdfsdfsdf",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "images/img-1.jpg"
    },
    {
        id: "weeqwe",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "images/img-2.jpg"
    },
    {
        id: "ddsfsdf",
        name: "Casual Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "images/img-3.jpg"
    },
    {
        id: "fdvbbfdgbg",
        name: "Men's Suit",
        price: 35,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "images/img-4.jpg"
    }
];

const basket =[]

let generateShop = () => {
    shop.innerHTML = shopItemData.map((x) => {
        const {id, name, desc, img, price} = x
        return `
            <div class="item" id=product-id-${id}>
                <img src="${img}" width="220px" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$${price}</h2>
                        <div class="button">
                            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                            <div id=${id}  class="quantity">0</div>
                            <i onclick="decrement(${id})" class="bi bi-patch-minus"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

 generateShop();

 let increment = (id) =>{
    let selectedItem = id

  let search = basket.find((x)=> x.id === selectedItem.id
    )

   if(search === undefined){
      basket.push({
    id: selectedItem.id,
    item: 1,
   }
)}else{
    search.item += 1
 }
   console.log(basket)
   update(selectedItem.id)
   }

 

 let decrement = (id) =>{
    let selectedItem = id

    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search.item === 0)return;
    else{
      search.item -= 1
    }
   update(selectedItem.id)
 }

 let update = (id)=>{
    let search = basket.find((x)=> x.id === id)
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
 }
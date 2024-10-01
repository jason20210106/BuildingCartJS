const FetchBtn = document.getElementById("Fetch");

const PokemonImage = document.getElementById("PokemonImage");

FetchBtn.addEventListener('click', () => {
    Alert();
 
    const FetchData = async () => {
        try {
            const Input = document.getElementById("Input").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Input}`);
            const data = await response.json();
            console.log(data)
            const pokemonSprite = data.sprites.front_default
            PokemonImage.src = pokemonSprite
            PokemonImage.style.display = "block"

            if (!response.ok) {
                throw new Error("Pokemon not found");
            } else {
                console.log(data.id);
            }
        } catch (error) {
            console.error(error);
        }

        Input.value = "";
        PokemonImage.style.display = "block";
       // Pass the input value to CreateElement function
    };

    FetchData();
    CreateElement(Input.value); 
});

const Alert = () => {
    if (Input.value === "") {
        alert("Please enter a Pokemon name");
    }
};
const CreateBtn = (liElement) => {
    const createBtn = document.createElement("button");
    const PopUp = document.getElementById("PopUp");
    createBtn.textContent = "Remove";

    PopUp.appendChild(createBtn);

    createBtn.addEventListener('click', () => {
        console.log("remove");
        PopUp.removeChild(liElement); // Remove the corresponding list item
        PopUp.removeChild(createBtn); // Remove the "Remove" button
    });
};

// Usage example:
const CreateElement = (text) => {
    const createLi = document.createElement("li");
    createLi.textContent = text;

    const PopUp = document.getElementById("PopUp");
    PopUp.appendChild(createLi);

    CreateBtn(createLi); // Pass the created list item to CreateBtn function
};

// Call the function to create the button
const toHomePage = document.getElementById("toHomePage")

toHomePage.addEventListener("click",()=>{
   window.location.href="Homepage.html"
})
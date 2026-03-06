const categoriesContainer = document.getElementById("categories-container");
//const treesContainer =document.getElementById("treesContainer")
const loadSpinner =document.getElementById("loadingSpinner");

//show loading function
function showLoading(){
loadSpinner.classList.remove("hidden");
 treesContainer.innerHTML="";
}
//hode loading function

function hideLoading(){
loadSpinner.classList.add("hidden");
}

async function loadCategories() {

  const res = await fetch("https://openapi.programming-hero.com/api/categories");
  const data = await res.json();
  console.log(data);
  console.log(categoriesContainer);

  data.categories.forEach((category) => {
    console.log(category);
    const btn = document.createElement("button");
    btn.className = "btn btn-outline w-full";
    btn.textContent=category.category_name;
    btn.onclick=()=>selectCatogory(category.id,btn);

    

    categoriesContainer.appendChild(btn);
  });

}

//select category for the button function 

async function selectCatogory(categoryId,btn){
    console.log(categoryId,btn);
    showLoading();

 const allbuttons=document.querySelectorAll("#categories-container button, #allTreesbtn");
 console.log(allbuttons);

 allbuttons.forEach(btn=>{
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
 })

 btn.classList.add("btn-primary");   
 btn.classList.remove("btn-outline");
}



//this function is for the tree cards loading 
async function loadTrees(){
    showLoading();
    
    loadSpinner.classList.add("flex");

    const res=await fetch("https://openapi.programming-hero.com/api/plants");
    const data= await res.json();
     

     hideLoading();
      displayTrees(data.plants);
}

//this function will displa theres 
function displayTrees(trees){

    console.log(trees);
    trees.forEach((tree)=>{

        console.log(tree);

        const card=document.createElement("div")
        card.className="card bg-white shadow-sm";
        card.innerHTML=`
        <div class="card bg-white   shadow-sm ">
                 
     <figure>
     <img
           src="${tree.image}"
         alt="${tree.name}"
         title="${tree.name}"
         class="h-48 w-full object-cover"
          />
  </figure>
  <div class="card-body ">
    <h2 class="card-title">${tree.name}</h2>
    <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="badge badge-success badge-outline">${tree.category}</div>
    <div class="flex justify-between  items-center">
          <h2 class="text-2xl font-bold text-green-600">${tree.price}</h2>
      <button class="btn btn-success">Add to Cart</button>
    </div>
  </div>
</div> 
        
        
        `
        treesContainer.appendChild(card);


    });
}

loadCategories();
loadTrees(); 
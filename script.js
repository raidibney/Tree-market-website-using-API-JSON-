const categoriesContainer = document.getElementById("categories-container ");
//this function is for the left side trees categories 
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
   // btn.innerText = category.category;

    categoriesContainer.appendChild(btn);
  });

}

//this function is for the tree cards loading 
async function loadTrees(){
    const res=await fetch("https://openapi.programming-hero.com/api/plants");
    const data= await res.json();
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
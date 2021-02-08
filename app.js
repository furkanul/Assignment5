// main / meals result function .
const mealsResult = () => {
    document.getElementById("search-result").innerHTML = '';
    const searchName = document.getElementById("search-title").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => {
            document.getElementById("search-result").innerHTML = `
            <div class="custom-design">
                <span class="error"><i class="fas fa-exclamation-triangle"></i></span>
                <h3>Sorry, "${searchName}" meals could not be found. Please try again..</h3>
            </div>
        `;
        document.getElementById("singleMealDetails").style.display = "none";
        
        })
        // if condition for '' search 
        if(searchName === ""){
            alert('Please reload page Enter name and Try again.');
            document.getElementById("search-result").style.display = "none";
            singleMealDetails.style.display = "none";
        }

    // Display search result function
    const displaySearchResult = meals => {
        // added forEach loop
        meals.forEach(mealName => {
            //template strings added
            document.getElementById("search-result").innerHTML += `
                <div class="col-md-3 custom-css text-center" onclick="renderMealsInfo('${mealName.strMealThumb}', '${mealName.strMeal}', '${mealName.strCategory}', '${mealName.strIngredient1}', '${mealName.strIngredient2}', '${mealName.strIngredient3}', '${mealName.strIngredient4}', '${mealName.strIngredient5}', '${mealName.strIngredient6}')">
                    <div class="card h-100">
                        <img class="card-img-top" src="${mealName.strMealThumb}" alt="">
                        <div class="card-body">
                            <h5 id="card-title" class="card-title text-center">${mealName.strCategory}</h5>
                        </div>
                    </div>
                </div>
             `;
        });
    }   
}


// Search button addEventListener and call main function.
document.getElementById("search-btn").addEventListener("click", mealsResult);

// single meals info function
const renderMealsInfo = (mealName, mealName2, mealName3, mealName4, mealName5, mealName6, mealName7, mealName8, mealName9) => {
    const singleMealDetails = document.getElementById("singleMealDetails");
    singleMealDetails.style.display = "block";
    singleMealDetails.innerHTML = `
        <img class="card-img-top pb-3" src="${mealName}" alt="">
        <h3 id="" class="card-title pl-4">${mealName2}</h3>
        <h5 id="" class="card-text pl-4 pb-2">${mealName3}</h5>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName4}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName5}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName6}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName7}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName8}</p>
        <p class="pl-4 pb-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealName9}</p>
    `;
}



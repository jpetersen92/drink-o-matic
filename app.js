const cocktailApp = {};

cocktailApp.displayDrink = (result) => {

    result.forEach( drink => {
        const cocktail = drink.strDrink
        const thumbNail = drink.strDrinkThumb
        const instructions = drink.strInstructions
        const glass = drink.strGlass
        const alcoholic = drink.strAlcoholic
        
        const drinkHtml = `
        <div class="drink-container">
                <h2>${cocktail}</h2>
                <h3>${alcoholic}</h3>
                <img src="${thumbNail}" alt="${cocktail}">
                <p>${instructions}</p>
                <div class="meas-ing">
                <ul class="meas">
                </ul>
                <ul class="ing">
                </ul>
            </div>
                <p>Glass Type: ${glass}</p>
            </div>`

            $('.results').append(drinkHtml);
    })
}

cocktailApp.displayIngredients = (result) => {
    const ingredients = []
    console.log(ingredients)

    result.forEach( drink => {
        const ing1 = drink.strIngredient1
        const ing2 = drink.strIngredient2
        const ing3 = drink.strIngredient3
        const ing4 = drink.strIngredient4
        const ing5 = drink.strIngredient5
        const ing6 = drink.strIngredient6
        const ing7 = drink.strIngredient7
        const ing8 = drink.strIngredient8
        const ing9 = drink.strIngredient9
        const ing10 = drink.strIngredient10
        const ing11 = drink.strIngredient11
        const ing12 = drink.strIngredient12
        const ing13 = drink.strIngredient13
        const ing14 = drink.strIngredient14
        const ing15 = drink.strIngredient15
    
            ingredients.push(ing1, ing2, ing3, ing4, ing5, ing6, ing7,ing8, ing9, ing10, ing11, ing12, ing13, ing14, ing15)
    
            const filterIngredients = ingredients.filter(ingredient => {
                return ingredient !== null
            });
            console.log(filterIngredients)

            const displayedIngredients = filterIngredients.map(drinkIngredient => {
                return '<li>' + drinkIngredient + '</li>';
            }).join('');
        
            $('.ing').append(displayedIngredients)
    })
}

cocktailApp.displayMeasurments = (result) => {
    const measurements = []
    console.log(measurements)

    result.forEach( drink => {
        const meas1 = drink.strMeasure1
        const meas2 = drink.strMeasure2
        const meas3 = drink.strMeasure3
        const meas4 = drink.strMeasure4
        const meas5 = drink.strMeasure5
        const meas6 = drink.strMeasure6
        const meas7 = drink.strMeasure7
        const meas8 = drink.strMeasure8
        const meas9 = drink.strMeasure9
        const meas10 = drink.strMeasure10
        const meas11 = drink.strMeasure11
        const meas12 = drink.strMeasure12
        const meas13 = drink.strMeasure13
        const meas14 = drink.strMeasure14
        const meas15 = drink.strMeasure15

        measurements.push(meas1, meas2, meas3, meas4, meas5, meas6, meas7, meas8, meas9, meas10, meas11, meas12, meas13, meas14, meas15)

        const filterMeasurements = measurements.filter(measurements => {
            return measurements !== null
        });
        console.log(filterMeasurements);

        const displayedMeasurments = filterMeasurements.map(measure => {
            return '<li>' + measure + '</li>';
        }).join('');
    
        $('.meas').append(displayedMeasurments)
    })

}

cocktailApp.getDrink = () => {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        medthod: "GET",
        dataType: "json",
        data: {
            api_key: 1,
        }
    }).then((result) => {
        console.log("it worked", result);
        cocktailApp.displayDrink(result.drinks);
        cocktailApp.displayMeasurments(result.drinks)
        cocktailApp.displayIngredients(result.drinks)
    });
};

cocktailApp.listenForFormSubmit = () => {
    $('button').on('click', () => {
        $('.results').empty();
        console.log('click');
        $('h1').hide();
        cocktailApp.getDrink();
    });
}

cocktailApp.init = () => {
    cocktailApp.listenForFormSubmit();
};

// Document Ready
$(() => {
    console.log("Document ready");
    cocktailApp.init();
});
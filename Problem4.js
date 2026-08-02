function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants)|| restaurants.length === 0 ) {
        return "Invalid";
    }

    let higRating = restaurants[0].rating;
    let topResturant = restaurants[0].name;

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > higRating) {
            higRating = restaurants[i].rating;
            topResturant = restaurants[i].name;
        }
    }

    return topResturant.toUpperCase();
}


console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));

console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]));

console.log(topRatedRestaurant([]));

console.log(topRatedRestaurant("restaurants"));


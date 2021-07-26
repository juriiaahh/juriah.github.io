/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style


const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
<img class="restaurant__poster lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" />
<div class="restaurant__info">
<h3>Information</h3>
  <h4>Kota</h4>
  <p>${restaurant.city}</p>
  <h4>Alamat</h4>
  <p>${restaurant.address}</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
</div>
<div class="restaurant-overview">
  <h3>OverView</h3>
  <h4>Description</h4>
  <p>${restaurant.description}</p>
</div>
  <div class="restaurant__body">
    <h4>Categories</h4>
    <p>  ${restaurant.categories
    .map((category) => `- ${category.name}`)
    .join('<br />')} </p>
      <br />
    <h4>Foods</h4>
    <p>  ${restaurant.menus.foods.map((food) => ` ${food.name}`)} </p>
      <br />
    <h4>Beverages</h4>
    <p>${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
      <br />
    <h3>Customer Reviews</h3>
      <br />
    <p>${restaurant.customerReviews
    .map(
      (customer) => `
          <ul>
            <li>Name: ${customer.name}</li>
            <li>Date: ${customer.date}</li>
            <li>Review: ${customer.review}</li>
          </ul>
          `,
    )
    .join('<br />')}
    </p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}">
  
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h1 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p>${restaurant.description}</p>
    </div>
    </div>
`;
const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};

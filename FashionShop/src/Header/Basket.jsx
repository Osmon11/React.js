import React from "react";
import "./header.css";

const handlerClick = (e) => {
  e.target.closest(".container").classList.remove("show");
};

const Basket = React.memo(() => {
  // let wishlist = [];
  // let goodsBasket = {};

  // Рендер товаров в корзине

  // const getCookie = name => {
  //     let matches = document.cookie.match(new RegExp(
  //         "(?:^|; )" + name.replace(/([\.$?*|\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //     ));
  //     return matches ? decodeURIComponent(matches[1]) : undefined;
  // };

  // const cookieQuery = get => {
  //     if (get) {
  //         if (getCookie('goodsBasket')) {
  //             goodsBasket = JSON.parse(getCookie('goodsBasket'));
  //         };
  //     } else {
  //         document.cookie = `goodsBasket=${JSON.stringify(goodsBasket)};max-age=86400e3`;
  //     }
  // };

  // const storageQuery = (get) => {

  //     if (get) {
  //         if (localStorage.getItem('wishlist')) {
  //             const wishlistStorage = JSON.parse(localStorage.getItem('wishlist'));
  //             wishlistStorage.forEach(id => wishlist.push(id));
  //         }
  //     } else {
  //         localStorage.setItem('wishlist', JSON.stringify(wishlist));
  //     };
  // };

  // const toggleWishlist = (id, elem) => {
  //     if (wishlist.includes(id)) {
  //         wishlist.splice(wishlist.indexOf(id), 1);
  //         elem.classList.remove('active');
  //     } else {
  //         wishlist.push(id);
  //         elem.classList.add('active');
  //     };
  //     storageQuery();
  // };
  return (
    <div className='cart' onClick={handlerClick}>
      <div className='cart-body'>
        <div className='contant'>
          <div className='contant-body'>
            <div className='cart-head'>
              <div className='cart-title'>Корзина</div>
              <div className='cart-total'>
                Общая сумма: <span>0</span> руб
              </div>
            </div>
            <div className='cart-wrapper'>
              <div id='cart-empty'>Ваша корзина пока пуста!</div>
            </div>
            <button className=' btn-primary cart-confirm'>
              Оформить заказ
            </button>
            <div className='cart-close' onClick={handlerClick}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Basket;

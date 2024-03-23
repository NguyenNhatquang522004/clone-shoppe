let detail_img = document.querySelectorAll(".products_left .detail_img .detail_img-gird .item-img");
let main_img = document.querySelectorAll(" .detail_products .detail_products-container  .detail_products-grid .products_left .item-img")[0];
let mainArrays = [...detail_img];
mainArrays.map((item, index) => {
    item.addEventListener("mouseover", (e) => {
        main_img.src = item.src
    })
})
let detail_img_button_next = document.querySelectorAll(".products_left .detail_img .detail_img-button-next")[0].addEventListener("click", (e) => {
    document.querySelectorAll(".detail_products-grid .products_left .detail_img .detail_img-gird")[0].scrollLeft += 100;
});
let button_prev = document.querySelectorAll(".products_left .detail_img .detail_img-button-prev")[0].addEventListener("click", (e) => {
    document.querySelectorAll(".detail_products-grid .products_left .detail_img .detail_img-gird")[0].scrollLeft -= 100;
});
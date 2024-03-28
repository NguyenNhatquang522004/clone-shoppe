
$(document).ready(() => {
    let changeImg = () => {
        $(".products_left .detail_img .detail_img-gird .item-img").each((index, item) => {
            $(item).on("mouseover", (e) => {
                $(".detail_products .detail_products-container  .detail_products-grid .products_left .item-img")[0].src = $(item).attr('src')
            })
        })
    }
    let scrollslidecart = () => {
        $(".products_left .detail_img .detail_img-button-next").on('click', (e) => {
            $('.detail_products-grid .products_left .detail_img .detail_img-gird').scrollLeft(+200)
        })
        $(".products_left .detail_img .detail_img-button-prev").on('click', (e) => {
            $('.detail_products-grid .products_left .detail_img .detail_img-gird').scrollLeft(-200)
        })
    }
    let modal_inside_modal_modalanddress = () => {
        $('.modal_anddress').on('shown.bs.modal', function (e) {
            $('.modal_anddress.show').each(function (index) {
                $(this).css('z-index', 1101 + index * 2);
            });
            $('.modal-backdrop').each(function (index) {
                $(this).css('z-index', 1101 + index * 2 - 1);
                if (index == 0) {
                    console.log("1");
                    $(this).addClass('modal_transportto-address background_modal modal_anddress');
                }
                else {
                    console.log("2");
                    $(this).addClass('modal_anddress-sec modal_anddress');
                }
            });

        });
    }
    let modal_auto_show = () => {
        $('#modal_anddress-third').modal('show');
    }

    let abdc = () => {
        $(".item-btn-add-address").click(() => {
            $("#modal_anddress-third").modal().show();
            $("#modal_transportto-address").modal().hide();
            $('.modal-backdrop.modal_anddress').modal().hide();
        });
    }





    // modal_auto_show();
    abdc();
    modal_inside_modal_modalanddress();
    scrollslidecart();
    changeImg();
})





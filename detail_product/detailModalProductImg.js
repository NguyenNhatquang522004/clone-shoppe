import * as fetch from "./fetchdata.js"

const handleSetupName_ModalProducts = (modalProductDetailImg) => {
    modalProductDetailImg.on('shown.bs.modal', function () {
        $(`.modal-backdrop`).addClass('modalProductDetailImgBackDrop BackDropAndgroundModal ');
    })
}
const handleOpenClose_ModalProducts = (btnOpenModalProductDetailImg, modalProductDetailImg) => {
    btnOpenModalProductDetailImg.click(function () {
        modalProductDetailImg.modal('show')
    })

}
const handleShow_ModalProducts = () => {
    $('#ModalProductsDetailWrapImgGrid').empty().append($('.detail_img  .detail_img-gird .item-img').map((index, item) => {
        return `     <div class="wrap-item col-3 mt-4  mx-2 position-relative px-0">
    <img class="ModalProductsDetail_item-img img-fluid  object-fit-fill"
        src="${$(item).attr('src')}"
        alt="" draggable="false">
    <div
        class="curtainlayer-ModalProductsDetailImg position-absolute">
    </div>
    </div>`
    }).get()
    )
}
const handleButtonNext_ModalProducts = (btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain) => {
    let manyItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.ModalProductsDetail_item-img')
    let representItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.curtainlayer-ModalProductsDetailImg')
    const handleNext = () => {
        // console.log($($(a)[2]).attr("src"));
        btnNextModalProductDetailImg.click(function () {
            if (CountNextAndPrevios_ModalProducts.Count === manyItemImg.length - 1) {
                CountNextAndPrevios_ModalProducts.Count = 0;
                itemImgMain.attr('src', `${$($(manyItemImg)[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
            }
            else {
                CountNextAndPrevios_ModalProducts.Count += 1;
                itemImgMain.attr('src', `${$($(manyItemImg)[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
            }
            representItemImg.removeClass('input-red-boder')
            $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
        })
    }
    const handlePrevios = () => {
        btnPreviosModalProductDetailImg.click(function () {
            if (CountNextAndPrevios_ModalProducts.Count === 0) {
                CountNextAndPrevios_ModalProducts.Count = manyItemImg.length - 1
                itemImgMain.attr('src', `${$(manyItemImg[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
            }
            else {
                --CountNextAndPrevios_ModalProducts.Count;
                itemImgMain.attr('src', `${$(manyItemImg[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
            }
            representItemImg.removeClass('input-red-boder')
            $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
        })
    }
    handleNext();
    handlePrevios()
}
const handleClick_ModalProducts = (itemImgMain) => {
    let manyItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.ModalProductsDetail_item-img')
    let representItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.curtainlayer-ModalProductsDetailImg')
    representItemImg.click(function () {
        let position = representItemImg.index($(this))
        CountNextAndPrevios_ModalProducts.Count = position;
        representItemImg.removeClass('input-red-boder ')
        $(this).addClass('input-red-boder ')
        itemImgMain.attr('src', `${$(manyItemImg[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
    })
}
let example = () => {
}
const CountNextAndPrevios_ModalProducts = {
    Count: 0,
}
let AutoShow = () => {
    $('#ModalProductsDetailImg').modal('show')
}
export const AllHandleModalProductsImg = () => {
    let modalProductDetailImg = $('#ModalProductsDetailImg')
    let btnOpenModalProductDetailImg = $('#OpenModalProductsDetailImg')
    let btnNextModalProductDetailImg = $('#ModalProductsDetailImgButtonNext')
    let btnPreviosModalProductDetailImg = $('#ModalProductsDetailImgButtonPrevious')
    let itemImgMain = $('#ModalProductsDetailImgDisplayMain')
    handleShow_ModalProducts()
    handleSetupName_ModalProducts(modalProductDetailImg)
    handleOpenClose_ModalProducts(btnOpenModalProductDetailImg, modalProductDetailImg)
    handleButtonNext_ModalProducts(btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain);
    handleClick_ModalProducts(itemImgMain)
    AutoShow()
    example()
}



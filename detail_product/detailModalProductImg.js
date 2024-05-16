import * as fetch from "./fetchdata.js"
let changeImg = (btnOpenModalProductDetailImg, ImgOutSide) => {
    ImgOutSide.each((index, item) => {
        $(item).on("mouseover", (e) => {
            CountNextAndPrevios_ModalProducts.Count = index
            ImgOutSide.removeClass('input-red-boder')
            $(ImgOutSide[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
            btnOpenModalProductDetailImg.attr("src", `${$(item).attr('src')}`)
        })
    })
}
let scrollslidecart = () => {
    $("#DetailImgButtonNext").on('click', (e) => {
        $('#DetailImgGird').scrollLeft(+200)
    })
    $("#DetailImgButtonPrevios").on('click', (e) => {
        $('#DetailImgGird').scrollLeft(-200)
    })
}
const handleSetupName_ModalProducts = (modalProductDetailImg) => {
    modalProductDetailImg.on('shown.bs.modal', function () {
        $(`.modal-backdrop`).addClass('modalProductDetailImgBackDrop BackDropAndgroundModal ');
    })
}
const handleShowTitle_ModalProducts = () => {
    $('#ModalProductsDetailImgItemTitle').text('')
    console.log($('#ModalProductsDetailImgItemTitle').text(`${$('#ItemTitleToModalProductsDetailImg').text().trim()}`).trim);
}
const handleShowItem_ModalProducts = () => {
    $('#ModalProductsDetailWrapImgGrid').empty().append($('#DetailImgGird .item-img').map((index, item) => {
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


const handleButtonNext_ModalProducts = (btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain, manyItemImg, representItemImg) => {
    manyItemImg.removeClass('input-red-boder')
    btnNextModalProductDetailImg.off('click');
    btnPreviosModalProductDetailImg.off('click');
    const handleNext = () => {
        btnNextModalProductDetailImg.on('click', function (e) {
            if (CountNextAndPrevios_ModalProducts.Count === manyItemImg.length - 1) {
                CountNextAndPrevios_ModalProducts.Count = 0;
                itemImgMain.attr('src', `${$($(manyItemImg[CountNextAndPrevios_ModalProducts.Count])).attr("src")}`)
            }
            else {
                CountNextAndPrevios_ModalProducts.Count += 1;
                itemImgMain.attr('src', `${$($(manyItemImg[CountNextAndPrevios_ModalProducts.Count])).attr("src")}`)
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
const handleClick_ModalProducts = (itemImgMain, manyItemImg, representItemImg) => {
    representItemImg.click(function () {
        let position = representItemImg.index($(this))
        CountNextAndPrevios_ModalProducts.Count = position;
        representItemImg.removeClass('input-red-boder ')
        $(this).addClass('input-red-boder ')
        itemImgMain.attr('src', `${$(manyItemImg[CountNextAndPrevios_ModalProducts.Count]).attr("src")}`)
    })
}
const handleOpenClose_ModalProducts = (btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide) => {
    $(ImgOutSide).click(function () {
        modalProductDetailImg.modal('show')
        representItemImg.removeClass('input-red-boder')
        $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
    })
    btnOpenModalProductDetailImg.click(function () {
        representItemImg.removeClass('input-red-boder')
        $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
        modalProductDetailImg.modal('show')
    })
}
const handleShowInitial_ModalProducts = (ImgOutSide, btnOpenModalProductDetailImg, itemImgMain) => {
    $(ImgOutSide[0]).addClass('input-red-boder')
    btnOpenModalProductDetailImg.attr('src', `${$(ImgOutSide[0]).attr('src')}`)
    itemImgMain.attr('src', `${$(ImgOutSide[0]).attr('src')}`)
}
const CountNextAndPrevios_ModalProducts = {
    Count: 0,
}
export const AllHandleModalProductsImg = () => {
    handleShowItem_ModalProducts()
    handleShowTitle_ModalProducts()
    let modalProductDetailImg = $('#ModalProductsDetailImg')
    let btnOpenModalProductDetailImg = $('#OpenModalProductsDetailImg')
    let btnNextModalProductDetailImg = $('#ModalProductsDetailImgButtonNext')
    let btnPreviosModalProductDetailImg = $('#ModalProductsDetailImgButtonPrevious')
    let itemImgMain = $('#ModalProductsDetailImgDisplayMain')
    let ImgOutSide = $('#DetailImgGird .item-img')
    let manyItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.ModalProductsDetail_item-img')
    let representItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.curtainlayer-ModalProductsDetailImg')
    handleShowInitial_ModalProducts(ImgOutSide, btnOpenModalProductDetailImg, itemImgMain)
    handleOpenClose_ModalProducts(btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide)
    handleSetupName_ModalProducts(modalProductDetailImg)
    changeImg(btnOpenModalProductDetailImg, ImgOutSide);
    handleButtonNext_ModalProducts(btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain, manyItemImg, representItemImg)
    handleClick_ModalProducts(itemImgMain, manyItemImg, representItemImg);
    scrollslidecart();
}



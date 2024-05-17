import * as fetch from "./fetchdata.js"
const changeImg = (btnOpenModalProductDetailImg, ImgOutSide) => {
    ImgOutSide.each((index, item) => {
        $(item).on("mouseover", (e) => {
            CountNextAndPrevios_ModalProducts.Count = index
            ImgOutSide.removeClass('input-red-boder')
            $(ImgOutSide[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
            btnOpenModalProductDetailImg.attr("src", `${$(item).attr('src')}`)
        })
    })
}
const handleShowItem_Color = async () => {
    const FetchItem = await fetch.getData(`./Color.json`);
    if (FetchItem) {
        $('#WrapColorRightGird').empty().append(FetchItem.data.data.map(item =>
            `<div class="wrap_item border border-1 mx-2  mt-3 wrap_item-color" >
            <div class="wrap_item-gird row py-2 px-1  align-items-center mx-0 ">
                <img class="item-img  col-2 px-0"
                    src="${item.url}"
                    alt="">
                <span
                    class="item-title text-capitalize col-10 px-0 ps-2 text-uppercase text-truncate">${item.title}
             </span>
             <span class="item-type"  id="${item.type}"></span>
            </div>
        </div>`
        ))
    }
}
const handleChangeImg_color = (btnOpenModalProductDetailImg) => {
    const itemColor = $('#WrapColorRightGird').find('.wrap_item-color')
    const parrenItemColor = $('#WrapColorRightGird')
    $(itemColor).mouseover(function () {
        const position = itemColor.index($(this))
        btnOpenModalProductDetailImg.attr("src", `${$(itemColor[position]).find(".item-img").attr('src')}`)
    })
}
const scrollslidecart = () => {
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
    $('#ModalProductsDetailImgItemTitle').text(`${$('#ItemTitleToModalProductsDetailImg').text().trim()}`)
}
const handleShowItem_ModalProducts = () => {
    $('#ModalProductsDetailWrapImgGrid').empty().append($('#DetailImgGird .item-img').map((index, item) => {
        return `     <div class="wrap-item col-3 mt-4  mx-2 position-relative px-0" >
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
const handleOpenClose_ModalProducts = (btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide, itemImgMain) => {
    $(ImgOutSide).click(function () {
        modalProductDetailImg.modal('show')
        itemImgMain.attr('src', `${$($(ImgOutSide[CountNextAndPrevios_ModalProducts.Count])).attr("src")}`)
        representItemImg.removeClass('input-red-boder')
        $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
    })
    btnOpenModalProductDetailImg.click(function () {
        modalProductDetailImg.modal('show')
        itemImgMain.attr('src', `${btnOpenModalProductDetailImg.attr("src")}`)
        representItemImg.removeClass('input-red-boder')
        $(representItemImg[CountNextAndPrevios_ModalProducts.Count]).addClass('input-red-boder')
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
const handleClick_type = () => {

}
export const AllHandleModalProductsImg = async () => {
    handleShowItem_ModalProducts()
    handleShowTitle_ModalProducts()
    handleShowItem_Color();
    setTimeout(() => {
        let modalProductDetailImg = $('#ModalProductsDetailImg')
        let btnOpenModalProductDetailImg = $('#OpenModalProductsDetailImg')
        let btnNextModalProductDetailImg = $('#ModalProductsDetailImgButtonNext')
        let btnPreviosModalProductDetailImg = $('#ModalProductsDetailImgButtonPrevious')
        let itemImgMain = $('#ModalProductsDetailImgDisplayMain')
        let ImgOutSide = $('#DetailImgGird .item-img')
        let manyItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.ModalProductsDetail_item-img')
        let representItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.curtainlayer-ModalProductsDetailImg')
        handleShowInitial_ModalProducts(ImgOutSide, btnOpenModalProductDetailImg, itemImgMain)
        handleOpenClose_ModalProducts(btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide, itemImgMain)
        handleSetupName_ModalProducts(modalProductDetailImg)
        changeImg(btnOpenModalProductDetailImg, ImgOutSide);
        handleButtonNext_ModalProducts(btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain, manyItemImg, representItemImg)
        handleClick_ModalProducts(itemImgMain, manyItemImg, representItemImg);
        scrollslidecart();
        handleChangeImg_color(btnOpenModalProductDetailImg);
    }, 500);
}



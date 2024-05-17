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

const handleChangeImg_color = (btnOpenModalProductDetailImg, itemColor) => {
    $(itemColor).mouseover(function () {
        const position = itemColor.index($(this))
        btnOpenModalProductDetailImg.attr("src", `${$(itemColor[position]).find(".wrap_item-gird .item-img").attr('src')}`)
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
const handleShowInitial_ModalProducts = (ImgOutSide, btnOpenModalProductDetailImg, itemImgMain, typeColor) => {
    typeColor.removeClass('text-grey')
    $(ImgOutSide[0]).addClass('input-red-boder')
    btnOpenModalProductDetailImg.attr('src', `${$(ImgOutSide[0]).attr('src')}`)
    itemImgMain.attr('src', `${$(ImgOutSide[0]).attr('src')}`)
}
const handleShow_Type = async () => {
    const listType = await fetch.getData('./Type.json')
    const list = listType ? listType.data.data : []
    $("#WrapTypeRightGird").empty().append(list.map(item =>
        `<div class="wrap_item border border-1   mx-2 mt-2 wrap_item-type" >
<div
    class="wrap_item-container container px-3 py-2 position-relative">
${item.title}
    <span class="type" id="${item.id}">${item.type}</span>
</div>
</div>`
    ))


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
             <span class="item-type"  id="${item.id}">${item.type}</span>
            </div>
        </div>`
        ))
    }
}
const handleClick_type = (parentItemType, typeColor, typeItem, itemTitleColor) => {
    parentItemType.click(function () {
        const position = parentItemType.index(this)
        parentItemType.removeClass("input-red-text input-red-boder");
        $(this).addClass('input-red-text input-red-boder')
        typeColor.each((index, item) => {
            $(item).parent().parent().removeClass('item-Color-Action')
            if ($(typeItem[position]).text() === $(item).text()) {
                $(item).parent().parent().addClass("item-Color-Action");
            }
        })
    })
}
const CountNextAndPrevios_ModalProducts = {
    Count: 0,
}
export const AllHandleModalProductsImg = () => {
    handleShowItem_ModalProducts()

    handleShowTitle_ModalProducts()
    handleShow_Type();
    handleShowItem_Color();
    setTimeout(() => {
        const modalProductDetailImg = $('#ModalProductsDetailImg')
        const btnOpenModalProductDetailImg = $('#OpenModalProductsDetailImg')
        const btnNextModalProductDetailImg = $('#ModalProductsDetailImgButtonNext')
        const btnPreviosModalProductDetailImg = $('#ModalProductsDetailImgButtonPrevious')
        const itemImgMain = $('#ModalProductsDetailImgDisplayMain')
        const ImgOutSide = $('#DetailImgGird .item-img')
        const manyItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.ModalProductsDetail_item-img')
        const representItemImg = $('#ModalProductsDetailWrapImgGrid .wrap-item').find('.curtainlayer-ModalProductsDetailImg')
        const itemColor = $('#WrapColorRightGird').find('.wrap_item-color')
        const itemTitleColor = $('#WrapColorRightGird').find('.wrap_item-color .wrap_item-gird .item-title')
        const parentItemType = $('#WrapTypeRightGird').find('.wrap_item-type');
        const typeColor = $('#WrapColorRightGird').find('.wrap_item-color .wrap_item-gird .item-type')
        const typeItem = $('#WrapTypeRightGird').find('.wrap_item-type .wrap_item-container .type');
        handleShowInitial_ModalProducts(ImgOutSide, btnOpenModalProductDetailImg, itemImgMain, typeColor)
        handleOpenClose_ModalProducts(btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide, itemImgMain)
        handleSetupName_ModalProducts(modalProductDetailImg)
        changeImg(btnOpenModalProductDetailImg, ImgOutSide);
        handleButtonNext_ModalProducts(btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain, manyItemImg, representItemImg)
        handleClick_ModalProducts(itemImgMain, manyItemImg, representItemImg);
        scrollslidecart();
        handleChangeImg_color(btnOpenModalProductDetailImg, itemColor);
        handleClick_type(parentItemType, typeColor, typeItem, itemTitleColor);
    }, 1000);
}



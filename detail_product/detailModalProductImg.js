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
const handleShowInitial_ModalProducts = (ImgOutSide, btnOpenModalProductDetailImg, itemImgMain, typeColor, itemColor, itemExist) => {
    typeColor.removeClass('text-grey')
    $(ImgOutSide[0]).addClass('input-red-boder')
    btnOpenModalProductDetailImg.attr('src', `${$(ImgOutSide[0]).attr('src')}`)
    itemImgMain.attr('src', `${$(ImgOutSide[0]).attr('src')}`)

    $(itemExist).text(`${selectItem.totalQuantity} sản phẩm có sẵn`)
}
const handleShow_Type = async () => {
    const listType = await fetch.getData('./Type.json')
    const list = listType ? listType.data.data : []
    $("#WrapTypeRightGird").empty().append(list.map(item =>
        `<div class="wrap_item border border-1   mx-2 mt-2 wrap_item-type" >
<div
    class="wrap_item-container container px-3 py-2 position-relative">
    <div class="item-title col-12">
                     ${item.title}
   </div>
    <span class="type" id="${item.id}">${item.type}</span>
</div>
</div>`
    ))


}
const handleShowItem_Color = async () => {
    const FetchItem = await fetch.getData(`./Color.json`);
    if (FetchItem) {
        $('#WrapColorRightGird').empty().append(FetchItem.data.data.map(item =>
            `   <div class="wrap_item border border-1 mx-2  mt-3 wrap_item-color ">
            <div class="wrap_item-container container  px-0">
                <div
                    class="wrap_item-gird row py-2 px-1  align-items-center mx-0  ">
                    <div class="wrap_Img px-0  position-relative col-2 ">
                        <img class="item-img img-fluid  px-0 object-fit-contain position-absolute"
                            src="${item.url}" alt="">
                    </div>
                    <span
                        class="item-title text-capitalize col-9  px-0  text-uppercase  ms-1 text-truncate ">
                                            ${item.title}
                    </span>
                    <span class="item-type" id="${item.id}">${item.type} </span>
                    <span class="quantity_color d-none">${item.quantity}</span>
                    <span class="price_color d-none">${item.price}</span>
                </div>
            </div>
        </div>`
        ))
    }
}
const handleClickEq_Color = (parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist) => {
    itemColor.eq(index).on('click', function () {
        const typeColorOBJ = {
            id: 0,
            img: "",
            title: "",
            type: 0,
            quantity: 0,
            price: 0,
        }
        const position = itemColor.index(this);
        if ($(this).hasClass('input-red-text input-red-boder') === false) {
            selectItem.selectColor = true
            handleShow_Exist(itemExist)
            itemColor.removeClass('input-red-text input-red-boder')
            $(this).addClass('input-red-text input-red-boder')
            typeColorOBJ.id = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-type").attr('id'))
            typeColorOBJ.img = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .wrap_Img .item-img").attr('src').trim()
            typeColorOBJ.title = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-title").text().trim()
            typeColorOBJ.type = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-type").text().trim()
            typeColorOBJ.quantity = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .quantity_color").text().trim())
            typeColorOBJ.price = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .price_color").text().trim())
            history.listItemColor = [...history.listItemColor, typeColorOBJ]
            parentItemType.off('click')
            typeItem.each((index, item) => {
                $(parentItemType[index]).addClass("item-Color-Action");
                if ($(typeColor[position]).text().trim() === $(item).text().trim()) {
                    $(parentItemType[index]).removeClass('item-Color-Action')
                    handleClickEq_type(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
                }
            })
        }
        else {
            selectItem.selectColor = false
            handleShow_Exist(itemExist)
            $(this).removeClass('input-red-text input-red-boder')
            parentItemType.removeClass('item-Color-Action')
            parentItemType.off('click')
            typeItem.each((index, item) => {
                handleClickEq_type(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
            })

        }

    })
}
const handleClick_Color = (parentItemType, typeColor, typeItem, itemTitleColor, itemColor, itemExist) => {
    itemColor.on('click', function () {
        const typeColorOBJ = {
            id: 0,
            img: "",
            title: "",
            type: 0,
            quantity: 0,
            price: 0,
        }
        const position = itemColor.index(this);
        if ($(this).hasClass('input-red-text input-red-boder') === false) {
            selectItem.selectColor = true
            handleShow_Exist(itemExist)
            itemColor.removeClass('input-red-text input-red-boder')
            $(this).addClass('input-red-text input-red-boder')
            parentItemType.off('click')
            typeColorOBJ.id = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-type").attr('id'))
            typeColorOBJ.img = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .wrap_Img .item-img").attr('src').trim()
            typeColorOBJ.title = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-title").text().trim()
            typeColorOBJ.type = $(itemColor[position]).find(".wrap_item-container .wrap_item-gird .item-type").text().trim()
            typeColorOBJ.quantity = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .quantity_color").text().trim())
            typeColorOBJ.price = Number($(itemColor[position]).find(".wrap_item-container .wrap_item-gird .price_color").text().trim())
            history.listItemColor = [...history.listItemColor, typeColorOBJ]
            typeItem.each((index, item) => {
                $(parentItemType[index]).addClass("item-Color-Action");
                if ($(typeColor[position]).text().trim() === $(item).text().trim()) {
                    $(parentItemType[index]).removeClass('item-Color-Action')
                    handleClickEq_type(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
                }
            })
        }
        else {
            selectItem.selectColor = false
            handleShow_Exist(itemExist)
            $(this).removeClass('input-red-text input-red-boder')
            parentItemType.removeClass('item-Color-Action')
            parentItemType.off('click')
            typeItem.each((index, item) => {
                handleClickEq_type(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
            })
        }

    })
}
const handleClick_type = (parentItemType, typeColor, typeItem, itemTitleColor, itemColor, itemExist) => {
    parentItemType.on('click', function () {
        const typeInfo = {
            id: 0,
            title: "",
            type: 0,
        }
        const position = parentItemType.index(this)
        if ($(this).hasClass('input-red-text input-red-boder') === false) {
            selectItem.selectType = true
            handleShow_Exist(itemExist)
            parentItemType.removeClass("input-red-text input-red-boder");
            $(this).addClass('input-red-text input-red-boder')
            itemColor.off('click')
            typeInfo.id = Number($(parentItemType[position]).find('.wrap_item-container .type').attr('id')),
                typeInfo.title = $(parentItemType[position]).find('.wrap_item-container .item-title').text().trim(),
                typeInfo.type = Number($(parentItemType[position]).find('.wrap_item-container .type').text().trim()),
                history.listItemType = [...history.listItemType, typeInfo]
            typeColor.each((index, item) => {
                $(itemColor[index]).addClass('item-Color-Action')
                if ($(typeItem[position]).text().trim() === $(item).text().trim()) {
                    $(itemColor[index]).removeClass("item-Color-Action");
                    handleClickEq_Color(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
                }
            })
        }
        else {
            selectItem.selectType = false
            handleShow_Exist(itemExist)
            $(this).removeClass('input-red-text input-red-boder')
            itemColor.removeClass("item-Color-Action")
            itemColor.off('click')
            typeColor.each((index, item) => {
                handleClickEq_Color(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
            })

        }
    })
}
const handleClickEq_type = (parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist) => {
    parentItemType.eq(index).on('click', function () {
        const typeInfo = {
            id: 0,
            title: "",
            type: 0,
        }
        const position = parentItemType.index(this)
        if ($(this).hasClass('input-red-text input-red-boder') === false) {
            selectItem.selectType = true
            parentItemType.removeClass("input-red-text input-red-boder");
            handleShow_Exist(itemExist)
            $(this).addClass('input-red-text input-red-boder')
            itemColor.off('click')
            typeInfo.id = Number($(parentItemType[position]).find('.wrap_item-container .type').attr('id')),
                typeInfo.title = $(parentItemType[position]).find('.wrap_item-container .item-title').text().trim(),
                typeInfo.type = Number($(parentItemType[position]).find('.wrap_item-container .type').text().trim()),
                history.listItemType = [...history.listItemType, typeInfo]
            console.log(history.listItemType);
            typeColor.each((index, item) => {
                $(itemColor[index]).addClass('item-Color-Action')
                if ($(typeItem[position]).text().trim() === $(item).text().trim()) {
                    $(itemColor[index]).removeClass("item-Color-Action");

                    handleClickEq_Color(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
                }
            })
        }
        else {
            selectItem.selectType = false
            handleShow_Exist(itemExist)
            $(this).removeClass('input-red-text input-red-boder')
            itemColor.removeClass("item-Color-Action")
            itemColor.off('click')
            typeColor.each((index, item) => {
                handleClickEq_Color(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, index, itemExist)
            })
        }
    })
}
const handleTotal = async (itemColor) => {
    await itemColor.each((index, item) => {
        selectItem.totalQuantity += Number($(item).find(".wrap_item-container .wrap_item-gird .quantity_color").text().trim())
    })

}
const handleShow_Exist = (itemExist) => {
    if (selectItem.selectColor === true && selectItem.selectType === true && selectItem.totalQuantity != 0) {
        $(itemExist).text(`${history.listItemColor[history.listItemColor.length - 1].quantity} sản phẩm có sẵn`)
    }
    else {
        $(itemExist).text(`${selectItem.totalQuantity} sản phẩm có sẵn`)
    }
}
const handleclick_Quantity = (btnDecrease, btnIncrease, ItemQuantum) => {
    btnDecrease.click(function () {
        --Quantity.Count
        if (Quantity.Count < 0) {
            Quantity.Count = 0;
        }
        ItemQuantum.text(`${Quantity.Count}`)
    })
    btnIncrease.click(function () {
        ++Quantity.Count
        ItemQuantum.text(`${Quantity.Count}`)
    })
}
const selectItem = {
    selectColor: false,
    selectType: false,
    totalQuantity: 0,
}
const history = {
    listItemType: [],
    listItemColor: [],
}
const CountNextAndPrevios_ModalProducts = {
    Count: 0,
}
const Quantity = {
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
        const itemTitleColor = $('#WrapColorRightGird').find('.wrap_item-color .wrap_item-container .wrap_item-gird .item-title')
        const parentItemType = $('#WrapTypeRightGird').find('.wrap_item-type');
        const typeColor = $('#WrapColorRightGird').find('.wrap_item-color .wrap_item-container .wrap_item-gird .item-type')
        const typeItem = $('#WrapTypeRightGird').find('.wrap_item-type .wrap_item-container .type');
        const itemExist = $('#ItemExist')
        const btnDecrease = $('#ItemDecrease')
        const btnIncrease = $('#ItemIncrease')
        const ItemQuantum = $("#ItemQuantum")
        handleTotal(itemColor);
        handleShowInitial_ModalProducts(ImgOutSide, btnOpenModalProductDetailImg, itemImgMain, typeColor, itemColor, itemExist)
        handleOpenClose_ModalProducts(btnOpenModalProductDetailImg, modalProductDetailImg, representItemImg, ImgOutSide, itemImgMain)
        handleSetupName_ModalProducts(modalProductDetailImg)
        changeImg(btnOpenModalProductDetailImg, ImgOutSide);
        handleButtonNext_ModalProducts(btnNextModalProductDetailImg, btnPreviosModalProductDetailImg, itemImgMain, manyItemImg, representItemImg)
        handleClick_ModalProducts(itemImgMain, manyItemImg, representItemImg);
        scrollslidecart();
        handleChangeImg_color(btnOpenModalProductDetailImg, itemColor);
        handleClick_type(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, itemExist);
        handleClick_Color(parentItemType, typeColor, typeItem, itemTitleColor, itemColor, itemExist)
        handleclick_Quantity(btnDecrease, btnIncrease, ItemQuantum)
    }, 1000);
}



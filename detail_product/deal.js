import * as fetch from "./fetchdata.js"
const handleShow_DropDown_Deal = (btnOpenDropDownDeal, dropDownDeal, dealProducts, btnSubmitDropDownDeal) => {
    let positonDropDown
    let historyPosition = [];
    $(document).click(function (e) {
        if ($(e.target).closest(dropDownDeal).length === 0 && $(e.target).closest(btnOpenDropDownDeal).length === 0) {
            if ($(dropDownDeal[positonDropDown]).hasClass(`show_down`)) {
                handleAnimationHideDown($(dropDownDeal[positonDropDown]))
            }
            else {
                handleAnimationHideUp($(dropDownDeal[positonDropDown]));
            }
        };
    })
    btnOpenDropDownDeal.click(function () {
        const position = btnOpenDropDownDeal.index(this)
        historyPosition = [...historyPosition, position]
        positonDropDown = position;
        const positionWindowX = window.pageYOffset
        const dropDownHeight = $(dropDownDeal[position]).css(`height`)
        const currenPosition = positionWindowX - parseInt(dropDownHeight)
        if (selectItem[`item${position}`].color === true && selectItem[`item${position}`].type === true) {
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).off('click');
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).removeClass('Submit-disable')
            handleSubmitClick_DropDown_Deal($(dropDownDeal[position]).find(btnSubmitDropDownDeal));
        }
        else {
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).addClass('Submit-disable')
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).off('click');
        }
        if ($(dropDownDeal[position]).css('display') === 'none') {
            if (currenPosition < parseInt(dropDownHeight) + 13) {
                handleAnimationShowUp($(dropDownDeal[position]))
                if (historyPosition[historyPosition.length - 2] != undefined && $(dropDownDeal[historyPosition[historyPosition.length - 2]]).hasClass(`show_down`) && historyPosition[historyPosition.length - 2] != historyPosition[historyPosition.length - 1]) {
                    handleAnimationHideDown($(dropDownDeal[historyPosition[historyPosition.length - 2]]))
                }
                if (historyPosition[historyPosition.length - 2] != undefined && $(dropDownDeal[historyPosition[historyPosition.length - 2]]).hasClass(`show_up`) && historyPosition[historyPosition.length - 2] != historyPosition[historyPosition.length - 1]) {
                    handleAnimationHideUp($(dropDownDeal[historyPosition[historyPosition.length - 2]]));
                }
            }

            else {
                handleAnimationShowDown($(dropDownDeal[position]));
                if (historyPosition[historyPosition.length - 2] != undefined && $(dropDownDeal[historyPosition[historyPosition.length - 2]]).hasClass(`show_down`) && historyPosition[historyPosition.length - 2] != historyPosition[historyPosition.length - 1]) {
                    handleAnimationHideDown($(dropDownDeal[historyPosition[historyPosition.length - 2]]))


                }
                if (historyPosition[historyPosition.length - 2] != undefined && $(dropDownDeal[historyPosition[historyPosition.length - 2]]).hasClass(`show_up`) && historyPosition[historyPosition.length - 2] != historyPosition[historyPosition.length - 1]) {
                    handleAnimationHideUp($(dropDownDeal[historyPosition[historyPosition.length - 2]]));
                }
            }
        }
    })
}
const handleIncreaseAndDecrease_DropDown_deal = (increaseQuantityDeal, reduceQuantityDeal, displayQuantity) => {
    increaseQuantityDeal.click(function () {
        const position = increaseQuantityDeal.index(this);
        quantityProduct[`quantity${position}`] += 1;
        $(displayQuantity[position]).text(`${quantityProduct[`quantity${position}`]}`);
        const newQuantityProduct = { ...quantityProduct };
        historyDeal.historyQuantity = [...historyDeal.historyQuantity, newQuantityProduct];
    })
    reduceQuantityDeal.click(function () {
        const position = reduceQuantityDeal.index(this);
        quantityProduct[`quantity${position}`] -= 1;
        if (quantityProduct[`quantity${position}`] <= 1) {
            quantityProduct[`quantity${position}`] = 1;
        }
        $(displayQuantity[position]).text(`${quantityProduct[`quantity${position}`]}`);
        const newQuantityProduct = { ...quantityProduct };
        historyDeal.historyQuantity = [...historyDeal.historyQuantity, newQuantityProduct];

    })
}
const handleClickCheck_Carts_Deal = (checkCardsDeal, checkParentCardsDeal, dealProducts, dropDownDeal) => {
    checkParentCardsDeal.click(function () {
        const position = checkParentCardsDeal.index(this)
        if (Number($(checkParentCardsDeal[position]).css(`opacity`)) >= 1) {
            if ($(checkCardsDeal[position]).css('display') === 'none') {
                $(checkCardsDeal[position]).show();
                selectItem[`item${position}`] = {
                    ...selectItem[`item${position}`],
                    check: true,
                }
            }
            else {
                $(checkCardsDeal[position]).hide()
                selectItem[`item${position}`] = {
                    ...selectItem[`item${position}`],
                    check: false,
                }
            }
        }
        const cloneSelectItem = { ...selectItem }
        historyDeal.historySelectItem = [...historyDeal.historySelectItem, cloneSelectItem]
    })
}
const handleItemClick_DropDown_Deal = (itemType, itemColor, dropDownDeal, btnOpenDropDownDeal, btnSubmitDropDownDeal) => {
    const handleClickColorEq = (value, index) => {
        value.click(function () {
            const position = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
            const valueItemColor = $(this).find($(`.wrap_item-deal-container .item-title`)).text().trim()
            const positionDropDownColor = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
            const currentColor = $(this).find('.wrap_item-deal-container .type')
            if ($(this).hasClass('text_') && $(this).hasClass('border_')) {
                $(this).removeClass('text_  border_')
                itemType.removeClass('item-Color-Action')
                selectItem[`item${positionDropDownColor}`] = {
                    ...selectItem[`item${positionDropDownColor}`],
                    color: false,
                    valueColor: "",
                }

                $(this).closest(dropDownDeal).find(itemType).off('click')
                $(this).closest(dropDownDeal).find(itemType).map((index, item) => {
                    handleClickTypeEq($(item), index)
                })
                handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
            }
            else {
                $(this).closest(dropDownDeal).find(itemColor).removeClass('text_  border_')
                $(this).addClass('text_  border_')
                selectItem[`item${positionDropDownColor}`] = {
                    ...selectItem[`item${positionDropDownColor}`],
                    color: true,
                    valueColor: valueItemColor,
                }
                $(this).closest(dropDownDeal).find(itemType).off('click')
                handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
                $(this).closest(dropDownDeal).find(itemType).map((index, item) => {
                    $(item).removeClass('item-Color-Action')
                    if (Number($(item).find('.wrap_item-deal-type-container .type').text().trim()) != Number(currentColor.text().trim())) {
                        if ($(item).hasClass('text_') && $(item).hasClass('border_')) {
                            $(item).removeClass('text_  border_').addClass('item-Color-Action')
                        }
                        else {
                            $(item).addClass('item-Color-Action')
                        }
                    }
                    else {
                        $(item).removeClass('item-Color-Action')
                        handleClickTypeEq($(item), index)
                    }
                })
            }
            const cloneSelectItem = { ...selectItem }
            historyDeal.historySelectItem = [...historyDeal.historySelectItem, cloneSelectItem]
        })
    }
    const handleClickTypeEq = (value, index) => {
        value.click(function () {
            const position = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
            console.log(position);
            const valueItemType = $(this).find($(`.wrap_item-deal-type-container .item-text`)).text().trim()
            const positionDropDownType = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
            const currentType = $(this).find('.wrap_item-deal-type-container .type')
            if ($(this).hasClass('text_') && $(this).hasClass('border_')) {
                $(this).removeClass('text_  border_')
                itemColor.removeClass('item-Color-Action')
                selectItem[`item${positionDropDownType}`] = {
                    ...selectItem[`item${positionDropDownType}`],
                    type: false,
                    valueType: "",
                }
                $(this).closest(dropDownDeal).find(itemColor).off('click')
                $(this).closest(dropDownDeal).find(itemColor).map((index, item) => {
                    handleClickColorEq($(item), index)
                })
                handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
            }
            else {
                $(this).closest(dropDownDeal).find(itemType).removeClass('text_  border_')
                $(this).addClass('text_  border_')
                selectItem[`item${positionDropDownType}`] = {
                    ...selectItem[`item${positionDropDownType}`],
                    type: true,
                    valueType: valueItemType,
                }
                $(this).closest(dropDownDeal).find(itemColor).off('click')
                handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
                $(this).closest(dropDownDeal).find(itemColor).map((index, item) => {
                    $(item).removeClass('item-Color-Action')
                    if (Number($(item).find('.wrap_item-deal-container .type').text().trim()) != Number(currentType.text().trim())) {
                        if ($(item).hasClass('text_') && $(item).hasClass('border_')) {
                            $(item).removeClass('text_  border_').addClass('item-Color-Action')
                        }
                        else {
                            $(item).addClass('item-Color-Action')
                        }
                    }
                    else {
                        $(item).removeClass('item-Color-Action')
                        handleClickColorEq($(item), index)
                    }
                })
            }
            const cloneSelectItem = { ...selectItem }
            historyDeal.historySelectItem = [...historyDeal.historySelectItem, cloneSelectItem]
        })
    }
    itemType.click(function () {
        const position = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
        console.log(position);
        const valueItemType = $(this).find($(`.wrap_item-deal-type-container .item-text`)).text().trim()
        const positionDropDownType = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
        const currentType = $(this).find('.wrap_item-deal-type-container .type')
        if ($(this).hasClass('text_') && $(this).hasClass('border_')) {
            $(this).removeClass('text_  border_')
            itemColor.removeClass('item-Color-Action')
            selectItem[`item${positionDropDownType}`] = {
                ...selectItem[`item${positionDropDownType}`],
                type: false,
                valueType: "",
            }
            $(this).closest(dropDownDeal).find(itemColor).off('click')
            $(this).closest(dropDownDeal).find(itemColor).map((index, item) => {
                handleClickColorEq($(item), index)
            })
            handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
        }
        else {
            $(this).closest(dropDownDeal).find(itemType).removeClass('text_  border_')
            $(this).addClass('text_  border_')
            selectItem[`item${positionDropDownType}`] = {
                ...selectItem[`item${positionDropDownType}`],
                type: true,
                valueType: valueItemType,
            }
            $(this).closest(dropDownDeal).find(itemColor).off('click')
            handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
            $(this).closest(dropDownDeal).find(itemColor).map((index, item) => {
                $(item).removeClass('item-Color-Action')
                if (Number($(item).find('.wrap_item-deal-container .type').text().trim()) != Number(currentType.text().trim())) {
                    if ($(item).hasClass('text_') && $(item).hasClass('border_')) {
                        $(item).removeClass('text_  border_').addClass('item-Color-Action')
                    }
                    else {
                        $(item).addClass('item-Color-Action')
                    }
                }
                else {
                    $(item).removeClass('item-Color-Action')
                    handleClickColorEq($(item), index)
                }
            })
        }
        const cloneSelectItem = { ...selectItem }
        historyDeal.historySelectItem = [...historyDeal.historySelectItem, cloneSelectItem]
    })
    itemColor.click(function () {
        const position = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
        const valueItemColor = $(this).find($(`.wrap_item-deal-container .item-title`)).text().trim()
        const positionDropDownColor = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
        const currentColor = $(this).find('.wrap_item-deal-container .type')
        if ($(this).hasClass('text_') && $(this).hasClass('border_')) {
            $(this).removeClass('text_  border_')
            itemType.removeClass('item-Color-Action')
            selectItem[`item${positionDropDownColor}`] = {
                ...selectItem[`item${positionDropDownColor}`],
                color: false,
                valueColor: "",
            }
            $(this).closest(dropDownDeal).find(itemType).off('click')
            $(this).closest(dropDownDeal).find(itemType).map((index, item) => {
                handleClickTypeEq($(item), index)
            })
            handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)

        }
        else {
            $(this).closest(dropDownDeal).find(itemColor).removeClass('text_  border_')
            $(this).addClass('text_  border_')
            selectItem[`item${positionDropDownColor}`] = {
                ...selectItem[`item${positionDropDownColor}`],
                color: true,
                valueColor: valueItemColor,
            }
            $(this).closest(dropDownDeal).find(itemType).off('click')
            handleConditionTriggerSunmit_DropDown_Deal(dropDownDeal, btnSubmitDropDownDeal, position)
            $(this).closest(dropDownDeal).find(itemType).map((index, item) => {
                $(item).removeClass('item-Color-Action')
                if (Number($(item).find('.wrap_item-deal-type-container .type').text().trim()) != Number(currentColor.text().trim())) {
                    if ($(item).hasClass('text_') && $(item).hasClass('border_')) {
                        $(item).removeClass('text_  border_').addClass('item-Color-Action')
                    }
                    else {
                        $(item).addClass('item-Color-Action')
                    }
                }
                else {
                    $(item).removeClass('item-Color-Action')
                    handleClickTypeEq($(item), index)
                }
            })
        }
        const cloneSelectItem = { ...selectItem }
        historyDeal.historySelectItem = [...historyDeal.historySelectItem, cloneSelectItem]
    })
}
const handleShow_cardDeal = async () => {
    const value = await fetch.getData('./deal.json')
    $('#DealProductsLeftMainGrid').find(`.wrap_deal-card-sub`).remove()
    await $('#DealProductsLeftMainGrid').append(value.data.data1.map(item =>
        ` <div class="card wrap_deal-card-sub px-0 border border-0 mx-3" style="width: 18rem;">
                                <img src="${item.CardImg}"
                                    class="card-img-top img-fluid" alt="...">
                                    <div
                                    class="item-percent-sale position-absolute  d-flex align-items-center justify-content-center ${item.sale === '' ? `d-none` : ''}">
                                    ${item.sale}
                                </div>
                                <div class="card-body wrap_deal-card-sub-body ps-1">
                                    <div class="wrap_deal-card-sub-body-gird row">
                                        <div class="wrap-item-top-deal-sub  col-12 mb-4">
                                            <span class="item-info border border-1  px-2 ${item.info === '' ? 'd-none' : ''}">
                                                ${item.info}
                                            </span>
                                            <span class="item-title ms-1">
                                                ${item.cartitleTop}
                                            </span>
                                        </div>
                                        <div class="wrap-item-main-deal-sub col-12 mb-3">
                                            <div
                                                class="wrap-item-main-deal-sub-grid d-flex align-items-center justify-content-start row">
                                                <div
                                                    class="wrap-item-icon position-relative border border-1 col-1 deal-cards-parent-check">
                                                    <div
                                                        class="wrap-parent-item-icon position-absolute  deal-cards-check ">
                                                        <div
                                                            class="wrap-final d-flex align-items-center justify-content-center">
                                                            <i class="item-icon fa-solid fa-check"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    class="item-info-deal-card-sub text-capitalize mx-1 position-relative col-9 px-0 ms-2 Select_DropDownDeal">
                                                    <div class="item-text-outside-card-deal itemOpenDropDownCardDeal">
                                                       ${item.cardTitle}
                                                    </div>

                                                    <div class="dropdown-deal position-absolute shadow-sm  border border-1 DropdownDealCSS"
                                                        id="">
                                                        <div class="dropdown-deal-container container py-5 ">
                                                            <div class="dropdown-deal-gird row px-3 ">
                                                                <div class="wrap-parent col-12 d-flex flex-wrap mb-4 ${item.cardTitle === `Chọn loại hàng` ? `d-none` : ''} ">
                                                                    <div class="wrap-color-top d-flex flex-wrap mb-3 ">
                                                                        <span
                                                                            class="item-title-top col-12 text-capitalize mx-2">màu
                                                                            sắc:
                                                                        </span>
                                                                        ${item.cardTitle === `Chọn loại hàng` ? `d-none` : item.Color.map(item1 => `
                                                                            <div class="wrap_item-deal wrap_item-color-deal border border-1 mt-2 mx-2 
                                                                            ${item.cardTitle.includes(item1.title) === true ? "text_ border_" : ``}">
                                                                                <div class="wrap_item-deal-container container px-3 py-2">
                                                                                    <span class="item-title text-capitalize">mk37 ${item1.title}</span>
                                                                                    <span class="id d-none">${item1.id}</span>
                                                                                    <span class="type d-none">${item1.type}</span>
                                                                                    <span class="quantity_color d-none">${item1.quantity}</span>
                                                                                    <span class="price_color d-none">${item1.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        `).join('')}       
                                                                    </div >
    <div class="wrap_deal-type">
        <div class="wrap_deal-type-gird row">
            <span
                class="item-title-type ms-2 text-capitalize  col-12">tròng
                mắt:</span>
            <div
                class="wrap-parent-item-deal-type col-12 d-flex flex-wrap">
                ${item.cardTitle === `Chọn loại hàng` ? `d-none` : item.Type.map(item2 => `
                                                                                    <div class="wrap_item-deal-type  border border-1 mt-2 mx-2 
                                                                                    ${item.cardTitle.includes(item2.title) === true ? "text_ border_" : ``}">
                                                                                        <div class="wrap_item-deal-type-container container px-3 py-2 ">
                                                                                            <span class="item-text text-capitalize">${item2.title}</span>
                                                                                            <span class="id d-none">${item2.id}</span>
                                                                                            <span class="type d-none">${item2.type}</span>
                                                                                        </div>
                                                                                    </div>`).join('')}
            </div>
        </div>
    </div>
                                                                </div >
    <div class="wrap-footer-deal ms-2">
        <div class="wrap-footer-deal-gird row">
            <div class="wrap-quantity-deal col-12 mb-3">
                <div class="wrap-quantity-deal-gird row">
                    <div class="item-text col-3 ">
                        số lượng:
                    </div>
                    <div
                        class="wrap-quantity-items col-4   px-0 ">
                        <div
                            class="wrap-quantity-items-grid   row  mx-0 w-100  border border-1 ">
                            <div class="item-reduce-deal item-reduce-increase  col-3 d-flex align-items-center justify-content-center px-0 ItemReduceDealClass"
                                id="ItemReduceDeal">
                                <i
                                    class="item-icon fa-solid fa-minus"></i>
                            </div>
                            <div
                                class="display-quantity-deal col-6  border-start border-end d-flex align-items-center justify-content-center DisplayQuantityDealClass">
                                1
                            </div>
                            <div class="item-increase-deal item-reduce-increase col-3 d-flex align-items-center justify-content-center px-0 ItemIncreaseDealClass"
                                id="ItemIncreaseDeal">
                                <i
                                    class="item-icon fa-solid fa-plus"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="wrap-submit-back col-12">
                <div
                    class="wrap-submit-back-grid row d-flex align-items-center justify-content-end">
                    <div class="item-back-deal text-uppercase col-4  shadow-sm px-2 py-3 mx-3 ItemBackDeal"
                       >
                        trở lại
                    </div>
                    <div class="item-submit-deal text-uppercase col-4 shadow-sm px-2 py-3 ItemSubmitDeal">
                        
                        xác nhận
                    </div>
                </div>
            </div>
        </div>
    </div>
                                                            </div >
                                                        </div >
                                                    </div >
                                                </div >
    <i class="item-icon fa-solid fa-sort-down col-1 px-0"></i>
                                            </div >
                                        </div >
    <div class="wrap-item-footer-deal-sub col-12">
        <div class="wrap-item-footer-deal-sub-gird d-flex">
            <span class="wrap-item-price-sale">
                <span class="item-unit">đ</span>
                ${item.Cardsale}
            </span>
            <span class="wrap-item-price-buy mx-2">
                <span class="item-unit">đ</span>
                ${item.cardPrice}
            </span>
        </div>
    </div>
                                    </div >

                                </div >
                            </div > 
                             <div class="buy-based-on  mx-5 d-flex align-items-start justify-content-center pt-4 "
                                id="BuyBasedOnDeal">
                                <i class="item-icon fa-solid fa-plus"></i>
                            </div>`
    ).join(''))
    await $('#DealProductsLeftMainGrid').find('#BuyBasedOnDeal').after(value.data.data.map(item =>
        ` <div class="card wrap_deal-card-sub px-0 border border-0 mx-3" style="width: 18rem;">
                                <img src="${item.CardImg}"
                                    class="card-img-top img-fluid" alt="...">
                                    <div
                                    class="item-percent-sale position-absolute  d-flex align-items-center justify-content-center ${item.sale === '' ? `d-none` : ''}">
                                      ${item.sale}
                                </div>
                                <div class="card-body wrap_deal-card-sub-body ps-1">
                                    <div class="wrap_deal-card-sub-body-gird row">
                                        <div class="wrap-item-top-deal-sub  col-12 mb-4">
                                            <span class="item-info border border-1  px-2 ${item.info === '' ? 'd-none' : ''}">
                                                ${item.info}
                                            </span>
                                            <span class="item-title ms-1">
                                                ${item.cartitleTop}
                                            </span>
                                        </div>
                                        <div class="wrap-item-main-deal-sub col-12 mb-3">
                                            <div
                                                class="wrap-item-main-deal-sub-grid d-flex align-items-center justify-content-start row">
                                                <div
                                                    class="wrap-item-icon position-relative border border-1 col-1 deal-cards-parent-check">
                                                    <div
                                                        class="wrap-parent-item-icon position-absolute  deal-cards-check ">
                                                        <div
                                                            class="wrap-final d-flex align-items-center justify-content-center">
                                                            <i class="item-icon fa-solid fa-check"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    class="item-info-deal-card-sub text-capitalize mx-1 position-relative col-9 px-0 ms-2 Select_DropDownDeal">
                                                    <div class="item-text-outside-card-deal itemOpenDropDownCardDeal">
                                                       ${item.cardTitle}
                                                    </div>

                                                    <div class="dropdown-deal position-absolute shadow-sm  border border-1 DropdownDealCSS"
                                                        id="">
                                                        <div class="dropdown-deal-container container py-5 ">
                                                            <div class="dropdown-deal-gird row px-3 ">
                                                                <div class="wrap-parent col-12 d-flex flex-wrap mb-4 ${item.cardTitle === `Chọn loại hàng` ? `d-none` : ''} ">
                                                                    <div class="wrap-color-top d-flex flex-wrap mb-3 ">
                                                                        <span
                                                                            class="item-title-top col-12 text-capitalize mx-2">màu
                                                                            sắc:
                                                                        </span>
                                                                        ${item.cardTitle === `Chọn loại hàng` ? `d-none` : item.Color.map(item1 => `
                                                                            <div class="wrap_item-deal wrap_item-color-deal border border-1 mt-2 mx-2 
                                                                            ${item.cardTitle.includes(item1.title) === true ? "text_ border_" : ``}">
                                                                                <div class="wrap_item-deal-container container px-3 py-2">
                                                                                    <span class="item-title text-capitalize">mk37 ${item1.title}</span>
                                                                                    <span class="id d-none">${item1.id}</span>
                                                                                    <span class="type d-none">${item1.type}</span>
                                                                                    <span class="quantity_color d-none">${item1.quantity}</span>
                                                                                    <span class="price_color d-none">${item1.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        `).join('')}       
                                                                    </div >
    <div class="wrap_deal-type">
        <div class="wrap_deal-type-gird row">
            <span
                class="item-title-type ms-2 text-capitalize  col-12">tròng
                mắt:</span>
            <div
                class="wrap-parent-item-deal-type col-12 d-flex flex-wrap">
                ${item.cardTitle === `Chọn loại hàng` ? `d-none` : item.Type.map(item2 => `
                                                                                    <div class="wrap_item-deal-type  border border-1 mt-2 mx-2 
                                                                                    ${item.cardTitle.includes(item2.title) === true ? "text_ border_" : ``}">
                                                                                        <div class="wrap_item-deal-type-container container px-3 py-2 ">
                                                                                            <span class="item-text text-capitalize">${item2.title}</span>
                                                                                            <span class="id d-none">${item2.id}</span>
                                                                                            <span class="type d-none">${item2.type}</span>
                                                                                        </div>
                                                                                    </div>`).join('')}
            </div>
        </div>
    </div>
                                                                </div >
    <div class="wrap-footer-deal ms-2">
        <div class="wrap-footer-deal-gird row">
            <div class="wrap-quantity-deal col-12 mb-3">
                <div class="wrap-quantity-deal-gird row">
                    <div class="item-text col-3 ">
                        số lượng:
                    </div>
                    <div
                        class="wrap-quantity-items col-4   px-0 ">
                        <div
                            class="wrap-quantity-items-grid   row  mx-0 w-100  border border-1 ">
                            <div class="item-reduce-deal item-reduce-increase  col-3 d-flex align-items-center justify-content-center px-0 ItemReduceDealClass"
                                id="ItemReduceDeal">
                                <i
                                    class="item-icon fa-solid fa-minus"></i>
                            </div>
                            <div
                                class="display-quantity-deal col-6  border-start border-end d-flex align-items-center justify-content-center DisplayQuantityDealClass">
                                1
                            </div>
                            <div class="item-increase-deal item-reduce-increase col-3 d-flex align-items-center justify-content-center px-0 ItemIncreaseDealClass"
                                id="ItemIncreaseDeal">
                                <i
                                    class="item-icon fa-solid fa-plus"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="wrap-submit-back col-12">
                <div
                    class="wrap-submit-back-grid row d-flex align-items-center justify-content-end">
                    <div class="item-back-deal text-uppercase col-4  shadow-sm px-2 py-3 mx-3 ItemBackDeal"
                       >
                        trở lại
                    </div>
                    <div class="item-submit-deal text-uppercase col-4 shadow-sm px-2 py-3 ItemSubmitDeal"
                      >
                        xác nhận
                    </div>
                </div>
            </div>
        </div>
    </div>
                                                            </div >
                                                        </div >
                                                    </div >
                                                </div >
    <i class="item-icon fa-solid fa-sort-down col-1 px-0"></i>
                                            </div >
                                        </div >
    <div class="wrap-item-footer-deal-sub col-12">
        <div class="wrap-item-footer-deal-sub-gird d-flex">
            <span class="wrap-item-price-sale">
                <span class="item-unit">đ</span>
                ${item.Cardsale}
            </span>
            <span class="wrap-item-price-buy mx-2">
                <span class="item-unit">đ</span>
                ${item.cardPrice}
            </span>
        </div>
    </div>
                                    </div >

                                </div >
                            </div > `
    ).join(''))
    await $('#DealProductsRightGrid').empty().append(value.data.data2.map(item =>
        `<div class="wrap-item-right d-flex flex-column">
                                <div class="wrap-item-right-top">
                                    <div class="item-title d-inline-block">tổng cộng:</div>
                                    <span class="item-price-sale d-inline-block text-truncate"><span
                                            class="item-unit">đ</span><span>${item.sale}0</span></span>
                                    <span class="item-buy"><span
                                            class="item-unit me-1">đ</span><span>${item.price}</span></span>
                                </div>
                                <div class="wrap-item-right-main mb-3">
                                    <div class="item-title d-inline-block">
                                        tiết kiệm
                                    </div>
                                    <span class="item-buy ms-4"><span
                                            class="item-unit ">đ</span><span>${item.save}</span></span>
                                </div>
                                <div class="wrap-item-right-footer   border border-1 rounded-1"
                                    id="WrapItemRightFooterDeal">
                                    <div class="wrap-item-right-footer-gird  d-flex align-items-center justify-content-center  w-100 h-100"
                                        id="ExactlyBuyDeal" data-bs-target="#ModalSureBuyDeal">
                                        <i class="item-icon fa-solid fa-cart-shopping"></i>
                                        <div class="item-title text-capitalize  text-center  ms-2 "
                                            id="infoExactlyBuyDeal">
                                            bấm để mua deal sốc
                                        </div>
                                    </div>

                                </div>
                            </div>`
    ).join(''))
}
const handleMouseOver_DropDown_Deal = (itemType, itemColor, dropDownDeal) => {
    itemColor.mouseover(function () {
        itemColor.removeClass('border_hover text_hover')
        if ($(this).hasClass('item-Color-Action') === false) {
            $(this).addClass('border_hover text_hover')
        }
    })
    itemColor.mouseleave(function () {
        $(this).removeClass('border_hover text_hover')
    })
    itemType.mouseover(function () {
        itemType.removeClass('border_hover text_hover')
        if ($(this).hasClass('item-Color-Action') === false) {
            $(this).addClass('border_hover text_hover')
        }
    })
    itemType.mouseleave(function () {

        $(this).removeClass('border_hover text_hover')

    })
}
const handleAnimationShowDown = (value) => {
    value.removeClass('dropdown_down dropdown_up hide_down show_down show_up hide_up dropdown_up-before dropdown_down-before')
    value.addClass('dropdown_down dropdown_down-before')
    value.removeClass('hide_down').addClass(`show_down`).show()
}
const handleAnimationHideDown = (value) => {
    value.removeClass('dropdown_down dropdown_up hide_down show_down show_up hide_up dropdown_up-before dropdown_down-before')
    value.addClass('dropdown_down')
    value.removeClass(`show_down`).addClass(`hide_down`).hide(350)
}
const handleAnimationShowUp = (value) => {
    value.removeClass('dropdown_down dropdown_up hide_down show_down show_up hide_up dropdown_up-before dropdown_down-before')
    value.addClass('dropdown_up dropdown_up-before')
    value.removeClass('hide_up').addClass(`show_up`).show()
}
const handleAnimationHideUp = (value) => {
    value.removeClass('dropdown_down dropdown_up hide_down show_down show_up hide_up dropdown_up-before dropdown_down-before')
    value.addClass('dropdown_up')
    value.removeClass(`show_up`).addClass(`hide_up`).hide(350)
}
const handleBackClick_DropDown_Deal = (btnBackDropDownDeal, dropDownDeal) => {
    btnBackDropDownDeal.click(function () {
        if ($(this).closest(dropDownDeal).hasClass(`show_down`)) {
            handleAnimationHideDown($(this).closest(dropDownDeal))
        }
        if ($(this).closest(dropDownDeal).hasClass(`show_up`)) {
            handleAnimationHideUp($(this).closest(dropDownDeal));
        }
    })
}
const handleSubmitClick_DropDown_Deal = (btnSubmitDropDownDeal, dropDownDeal) => {
    btnSubmitDropDownDeal.click(function () {
    })
}
const handleConditionTriggerSunmit_DropDown_Deal = (dropDownDeal, btnSubmitDropDownDeal, position) => {
    if (selectItem[`item${position}`].color === true && selectItem[`item${position}`].type === true) {
        $(dropDownDeal[position]).find(btnSubmitDropDownDeal).off('click');
        $(dropDownDeal[position]).find(btnSubmitDropDownDeal).removeClass('Submit-disable')
        handleSubmitClick_DropDown_Deal($(dropDownDeal[position]).find(btnSubmitDropDownDeal));
    }
    else {
        $(dropDownDeal[position]).find(btnSubmitDropDownDeal).addClass('Submit-disable')
        $(dropDownDeal[position]).find(btnSubmitDropDownDeal).off('click');
    }
}
const handleMouseSubmit_DropDown_Deal = (btnSubmitDropDownDeal, dropDownDeal) => {
    btnSubmitDropDownDeal.mouseover(function () {
        const position = $(this).closest(dropDownDeal).index('.DropdownDealCSS')
        if (selectItem[`item${position}`].color === true && selectItem[`item${position}`].type === true) {
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).removeClass('Submit-disable')
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).addClass('ItemSubmitDeal_hover')
        }
        else {
            $(dropDownDeal[position]).find(btnSubmitDropDownDeal).removeClass('ItemSubmitDeal_hover')
        }
    })

}
const handleBuy_Card_Deal = (exactlyBuy, infoExactlyBuy, modalExactlyBuy) => {
    exactlyBuy.click(function () {
        if (infoExactlyBuy.text().trim() === 'đến giỏ hàng') {
            alert("1")
        }
        else {
            infoExactlyBuy.text('đến giỏ hàng');
            modalExactlyBuy.modal('show')
        }
    })
}
const handleSetup_BackDrop_ModalDeal = (modalExactlyBuy) => {
    modalExactlyBuy.on('shown.bs.modal', function () {
        $(`.modal-backdrop`).addClass('BackDropAndgroundModalDeal');
    })
}
const selectItem = {
    item0: {
        color: true,
        valueColor: "",
        type: true,
        valueType: "",
        check: true
    },
    item1: {
        color: true,
        valueColor: "",
        type: true,
        valueType: "",
        check: true
    },
    item2: {
        color: true,
        valueColor: "",
        type: true,
        valueType: "",
        check: true
    },
    item3: {
        color: true,
        valueColor: "",
        type: true,
        valueType: "",
        check: true
    },
    item4: {
        color: true,
        valueColor: "",
        type: true,
        valueType: "",
        check: true
    }
}
const quantityProduct = {
    quantity0: 1,
    quantity1: 1,
    quantity2: 1,
    quantity3: 1,
    quantity4: 1,
}
const historyDeal = {
    historyQuantity: [],
    historySelectItem: [],
}
export const AllHandleDeal = () => {
    handleShow_cardDeal()
    setTimeout(() => {
        const dealProducts = $('#DealProducts')
        const btnOpenDropDownDeal = $('.itemOpenDropDownCardDeal')
        const dropDownDeal = $('.DropdownDealCSS')
        const checkCardsDeal = $('.deal-cards-check')
        const checkParentCardsDeal = $('.deal-cards-parent-check')
        const increaseQuantityDeal = $(`.ItemIncreaseDealClass`)
        const reduceQuantityDeal = $(`.ItemReduceDealClass`)
        const displayQuantity = $('.DisplayQuantityDealClass')
        const itemType = $('.wrap_item-deal-type')
        const itemColor = $('.wrap_item-color-deal')
        const btnBackDropDownDeal = $('.ItemBackDeal')
        const btnSubmitDropDownDeal = $('.ItemSubmitDeal')
        const exactlyBuy = $('#ExactlyBuyDeal')
        const infoExactlyBuy = $('#infoExactlyBuyDeal')
        const modalExactlyBuy = $('#ModalSureBuyDeal')
        handleShow_DropDown_Deal(btnOpenDropDownDeal, dropDownDeal, dealProducts, btnSubmitDropDownDeal);
        handleClickCheck_Carts_Deal(checkCardsDeal, checkParentCardsDeal, dealProducts, dropDownDeal);
        handleIncreaseAndDecrease_DropDown_deal(increaseQuantityDeal, reduceQuantityDeal, displayQuantity, itemType, dropDownDeal);
        handleItemClick_DropDown_Deal(itemType, itemColor, dropDownDeal, btnOpenDropDownDeal, btnSubmitDropDownDeal);
        handleMouseOver_DropDown_Deal(itemType, itemColor, dropDownDeal);
        handleBackClick_DropDown_Deal(btnBackDropDownDeal, dropDownDeal);
        handleMouseSubmit_DropDown_Deal(btnSubmitDropDownDeal, dropDownDeal);
        handleBuy_Card_Deal(exactlyBuy, infoExactlyBuy, modalExactlyBuy)
        handleSetup_BackDrop_ModalDeal(modalExactlyBuy);
    }, 900);
}
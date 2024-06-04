const handleShow_DropDown_Deal = (btnOpenDropDownDeal, dropDownDeal, dealProducts) => {
    $(document).click(function (e) {
        // var left = window.pageXOffset;
        // var top = window.pageYOffset;
        // var offset = dealProducts.offset();
        // console.log(top);
        if ($(e.target).closest(dropDownDeal).length === 0 && dropDownDeal.css('display') === 'block' && $(e.target).closest(btnOpenDropDownDeal).length === 0) {
            dropDownDeal.removeClass(`show_up`).addClass(`hide_up`).hide(350)
        }
    })
    btnOpenDropDownDeal.click(function () {

        if (dropDownDeal.css('display') === 'none') {
            // $('.DealProducts:before')
            // console.log($('#DealProducts:before'));
            dropDownDeal.removeClass('hide_up').addClass(`show_up`).show()
        }
        else {
            dropDownDeal.removeClass(`show_up`).addClass(`hide_up`).hide(400)
        }
    })
}
const handleClickCheck_Carts_Deal = (checkCardsDeal, checkParentCardsDeal, dealProducts) => {
    checkParentCardsDeal.click(function () {
        const position = checkParentCardsDeal.index(this)
        if (Number($(checkParentCardsDeal[position]).css(`opacity`)) >= 1) {
            $(checkCardsDeal[position]).toggle()
        }
    })
}
const handleDropDown_Up_Deal = (dealProducts) => {

}
export const AllHandleDeal = () => {
    const dealProducts = $('#DealProducts')
    const btnOpenDropDownDeal = $('#ItemTextTitleDealCard')
    const dropDownDeal = $('#DropdownDeal')
    const checkCardsDeal = $('.deal-cards-check')
    const checkParentCardsDeal = $('.deal-cards-parent-check')
    handleShow_DropDown_Deal(btnOpenDropDownDeal, dropDownDeal, dealProducts);
    handleClickCheck_Carts_Deal(checkCardsDeal, checkParentCardsDeal, dealProducts);
}
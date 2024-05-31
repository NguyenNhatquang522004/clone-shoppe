const handleShow_DropDown_Deal = (btnOpenDropDownDeal, dropDownDeal) => {
    $(document).click(function (e) {
        if ($(e.target).closest(dropDownDeal).length === 0 && dropDownDeal.css('display') === 'block' && $(e.target).closest(btnOpenDropDownDeal).length === 0) {
            dropDownDeal.hide().removeClass('show').addClass('hide');
        }
    })
    btnOpenDropDownDeal.click(function () {
        if (dropDownDeal.css('display') === 'none') {
            dropDownDeal.show().removeClass('hide').addClass('show');
        }
        else {
            dropDownDeal.hide().removeClass('show').addClass('hide');
        }
    })
}
export const AllHandleDeal = () => {
    const btnOpenDropDownDeal = $('#ItemTextTitleDealCard')
    const dropDownDeal = $('#DropdownDeal')
    handleShow_DropDown_Deal(btnOpenDropDownDeal, dropDownDeal);
}
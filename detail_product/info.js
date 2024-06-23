
const handleRedirect_right_info = (itemEvaluate, itemProduct, itemFeedBack, modalFeedBack) => {
    let count = 0;
    itemEvaluate.click(function () {
        count++;
        console.log("check >>", count);

    })
    itemProduct.click(function () {
        console.log(count);

    })
    itemFeedBack.click(function () {
        modalFeedBack.modal('show')
    })
}
const handleClickPreventCloseOutside_ModalFeedBack_Info = (modalFeedBack) => {
    modalFeedBack.modal({ backdrop: 'static', keyboard: false })
}
const handleSetUp_ModalFeedBack_Info = (modalFeedBack) => {
    modalFeedBack.on(`shown.bs.modal`, function () {
        $(`.modal-backdrop`).addClass('BackDropAndgroundModal');
    })
}
const handleBtnClick_ModalFeedBack_Info = (btnFindOutMore, btnSubMitFeedBack, modalFeedBack) => {
    btnFindOutMore.click(function () {
        // redirect
    })
    btnSubMitFeedBack.click(function () {
        modalFeedBack.modal('hide')
    })

}
const handleBtnClick_info = (btnChatWithShopeInfo, btnSeeShopeInfo) => {
    btnChatWithShopeInfo.click(function () {
        //redirect
    })
    btnSeeShopeInfo.click(function () {
        //redirect
    })

}

export const AllhandleInfo = () => {
    const parentRightItem = $('.ItemInfoLeftTitleParent')
    const rightItem = $('.ItemInfoLeftTitle')
    const itemEvaluate = $(`#ItemEvaluateInfo`)
    const itemProduct = $(`#ItemProductInfo`)
    const itemFeedBack = $(`#ItemFeedBackInfo`)
    const modalFeedBack = $('#ModalFeedBackInfo')
    const btnFindOutMore = $(`#BtnFindOutMoreModalFeedBack`)
    const btnSubMitFeedBack = $(`#BtnSubMitModalFeedBack`)
    const btnChatWithShopeInfo = $('#ChatWithShopeInfo');
    const btnSeeShopeInfo = $('#SeeShopeInfo')
    handleBtnClick_ModalFeedBack_Info(btnFindOutMore, btnSubMitFeedBack, modalFeedBack)
    handleClickPreventCloseOutside_ModalFeedBack_Info(modalFeedBack);
    handleSetUp_ModalFeedBack_Info(modalFeedBack)
    handleRedirect_right_info(itemEvaluate, itemProduct, itemFeedBack, modalFeedBack)
    handleBtnClick_info(btnChatWithShopeInfo, btnSeeShopeInfo);

}
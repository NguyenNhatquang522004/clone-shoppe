import * as fetch from "./fetchdata.js"
import * as ModalProductImg from "./detailModalProductImg.js"
$(document).ready(() => {

    let handleSetupClassname_ModalAddress = (modalSubmitMap, modalMap, modalFirst, modalSecond, modalThird, backDrop) => {
        modalFirst.on('shown.bs.modal', function () {
            $(`.modal-backdrop`).addClass('ModalBackDropNestedFirst BackDropAndgroundModal ');
        })
        modalSecond.on('shown.bs.modal', function () {
            $('.modal-backdrop').each(function (index) {
                if (index === 1) {
                    $(this).addClass('ModalBackDropNestedFirst ');
                }
            })
        })
        modalThird.on('shown.bs.modal', function () {
            $(`.modal-backdrop`).addClass('modal_anddress-thirdwerwer BackDropAndgroundModal');
        })
        modalMap.on('shown.bs.modal', function () {
            $(`.modal-backdrop`).addClass('ModalBackDropNestedMap BackDropAndgroundModal');
        })
        modalSubmitMap.on('shown.bs.modal', function () {
            $('.modal-backdrop').each(function (index) {
                if (index === 1) {
                    $(this).addClass('ModalBackDropNestedMap');
                }
            })
        })
    }
    let handleClickPreventCloseOutside_ModalAddress = (modalSubmitMap, modalMap, modalFirst, modalSecond, modalThird) => {
        modalFirst.modal({ backdrop: 'static', keyboard: false })
        modalSecond.modal({ backdrop: 'static', keyboard: false })
        modalThird.modal({ backdrop: 'static', keyboard: false })
        modalMap.modal({ backdrop: 'static', keyboard: false })
        modalSubmitMap.modal({ backdrop: 'static', keyboard: false })

    }
    let handleNested_ModalAddress = (modalAddressNestedFirstAndSecond, modalAddressNestedMapAndSubmitMap) => {
        modalAddressNestedFirstAndSecond.on('shown.bs.modal', function (e) {
            $('.ModalNestedFirst.show').each(function (index) {
                $(this).css('z-index', 1101 + index * 2);
            });
            $('.modal-backdrop.ModalBackDropNestedFirst').each(function (index) {
                $(this).css('z-index', 1101 + index * 2 - 1);
            });

        });
        modalAddressNestedMapAndSubmitMap.on('shown.bs.modal', function (e) {
            $('.ModalAddressNestedMap.show').each(function (index) {
                $(this).css('z-index', 1101 + index * 2);
            });
            $('.modal-backdrop.ModalBackDropNestedMap').each(function (index) {
                $(this).css('z-index', 1101 + index * 2 - 1);
            });

        });
    }
    let handleClick_Submit_ThirdModal = () => {
        let buttonSubmit = $('#buttonModalThirdSubmit')
        buttonSubmit.click(function (e) {

            CountInputAddress.name = 1;
            CountInputAddress.phone = 1;
            CountInputAddress.address = 1;
            CountInputAddress.DetailAddress = 1;
            if (CountInputAddress.isTruePhone === true && CountInputAddress.isTrueName === true && CountInputAddress.isTrueAddress === true && CountInputAddress.isTrueDetailAddress === true) {
                setTimeout(() => {
                    alert("nice...")
                }, 100);
            }
            else {
                setTimeout(() => {
                    alert("ohhNoo...")
                }, 100)
            }
        })
    }
    let handleClick_Submit_ModalAddressFirst = (itemDelete, btnSubmitModalAddressFirst, itemPoint, modalFirst, dropDownSearch_ModalAddress, inputSearch_ModalAddres) => {
        btnSubmitModalAddressFirst.click(function () {
            if ($(this).prop('disabled') === false) {
                setTimeout(() => {
                    $('#openModalAddressFirst').remove();
                    if (GlobalTransferValue.historyValueSearchModalAddressFirst.length === 1) {
                        itemPoint.after(`<a class="modal_anddress-btn pt-0  ms-2 pb-2 mb-1"
                        href="#modal_transportto-address"
                        data-bs-target="#modal_transportto-address"
                        id="openModalAddressFirst">
                        <span class="item-text text-capitalize">
                      ${GlobalTransferValue.historyValueSearchModalAddressFirst[0]}<i class="item-icon fa-solid fa-angle-down ms-1"></i>
                        </span>
                    </a>`)
                    }
                    if (GlobalTransferValue.historyValueSearchModalAddressFirst.length > 1) {
                        itemPoint.after(`<a class="modal_anddress-btn pt-0  ms-2 pb-2 mb-1"
                        href="#modal_transportto-address"
                        data-bs-target="#modal_transportto-address"
                        id="openModalAddressFirst">
                        <span class="item-text text-capitalize">
                      ${GlobalTransferValue.historyValueSearchModalAddressFirst[GlobalTransferValue.historyValueSearchModalAddressFirst.length - 1][0].name}<i class="item-icon fa-solid fa-angle-down ms-1"></i>
                        </span>
                    </a>`)
                    }
                }, 500);
                setTimeout(() => {
                    isLoad.countSearchModalAddressFirst = 0;
                    inputSearch_ModalAddres.val('')
                    btnSubmitModalAddressFirst.prop('disabled', true)
                    dropDownSearch_ModalAddress.css('z-index', -1)
                    itemDelete.hide();
                    modalFirst.modal("hide")
                }, 600);

            }

        })
    }
    let handleOpenAndClose_ModalAddress = (itemDelete, inputSearch_ModalAddres, dropDownSearch_ModalAddress, itemPoint, btnSubmitModalAddressFirst, btnBackModalMapAndSubmitMap, btnBackModalMapFromSubmitMap, btnOpenModalSubmitMap, modalSubmitMap, btnOpenModalMap, btnBackModalThirdFromMap, iconBackModalThirdFromMap, modalMap, modalFirst, modalSecond, modalThird, btnOpenModalFirst, btnCloseModalFirst, btnOpenModalSecond, btnOpenModalThird, btnBackModalFirstFromThird, btnBackModalFirstFromSecond) => {
        $('#WrapTransportto').on('click', '#openModalAddressFirst', function (e) {
            e.stopPropagation()
            modalFirst.modal(`show`);
        })
        btnCloseModalFirst.click(function (e) {
            e.stopPropagation()
            isLoad.countSearchModalAddressFirst = 0;
            inputSearch_ModalAddres.val('')
            btnSubmitModalAddressFirst.prop('disabled', true)
            dropDownSearch_ModalAddress.css('z-index', -1)
            itemDelete.hide()
            modalFirst.modal(`hide`);
        })
        btnOpenModalSecond.click(function (e) {
            e.stopPropagation()
            modalSecond.modal('show')
        })
        btnBackModalFirstFromSecond.click(function (e) {
            e.stopPropagation()
            modalSecond.modal(`hide`);
            modalFirst.modal('show')
        })
        btnOpenModalThird.click(function (e) {
            e.stopPropagation()
            isLoad.countSearchModalAddressFirst = 0;
            inputSearch_ModalAddres.val('')
            btnSubmitModalAddressFirst.prop('disabled', true)
            dropDownSearch_ModalAddress.css('z-index', -1)
            itemDelete.hide()
            modalFirst.modal('hide');
            modalThird.modal('show')

        })
        btnBackModalFirstFromThird.click(function (e) {
            CountInputAddress.address = 0;
            CountInputAddress.name = 0;
            CountInputAddress.phone = 0;
            CountInputAddress.DetailAddress = 0;
            CountInputAddress.isTrueName = false;
            CountInputAddress.isTruePhone = false
            isSuccess.isCity = false;
            isSuccess.isDistrict = false;
            isSuccess.isWards = false;
            isLoad.isCity = false;
            isLoad.isDistrict = false;
            isLoad.isWards = false;
            isLoad.Past = [];
            isLoad.value = {};
            $('.btn_address_detail').removeClass('input-red-boder input-red-text');
            modalThird.modal(`hide`)
            modalFirst.modal('show');
        })
        iconBackModalThirdFromMap.click(function (e) {
            e.stopPropagation();
            modalMap.modal('hide');
            modalThird.modal('show')
        })
        btnBackModalThirdFromMap.click(function (e) {
            e.stopPropagation();
            modalMap.modal('hide');
            modalThird.modal('show')
        })
        btnOpenModalMap.click(function (e) {
            e.stopPropagation();
            handleShow_ModalMap()
            modalThird.modal('hide');
            modalMap.modal('show');
        })
        btnOpenModalSubmitMap.click(function (e) {
            e.stopPropagation();
            modalSubmitMap.modal('show');
        })
        btnBackModalMapFromSubmitMap.click(function (e) {
            e.stopPropagation();
            modalSubmitMap.modal('hide');
        })
        btnBackModalMapAndSubmitMap.click(async function (e) {
            e.stopPropagation();
            setTimeout(() => {
                alert("okkkkkk")
            }, 10);
            modalSubmitMap.modal('hide');
        })
        handleClick_Submit_ThirdModal()
        handleClick_Submit_ModalAddressFirst(itemDelete, btnSubmitModalAddressFirst, itemPoint, modalFirst, dropDownSearch_ModalAddress, inputSearch_ModalAddres)
    }
    let handleModalAddress = () => {
        let modalFirst = $('#modal_transportto-address');
        let modalSecond = $('#modal_anddress-sec');
        let modalThird = $('#modal_anddress-third');
        let modalMap = $('#ModalAddressMap')
        let modalSubmitMap = $('#ModalSubmitModalMap')
        let btnOpenModalFirst = $('#openModalAddressFirst')
        let btnCloseModalFirst = $('#CloseModalAddressFirst')
        let btnOpenModalSecond = $('#openModalAddressSecond')
        let btnBackModalFirstFromSecond = $('#BackModalAddressFirstFromSecond')
        let btnOpenModalThird = $('#openModalAddressThird')
        let btnBackModalFirstFromThird = $('#BackModalAddressFirstFromThird')
        let btnOpenModalMap = $('#mapBarrierCurtain');
        let iconBackModalThirdFromMap = $('#BackModalAddressThirdFromMap_Icon')
        let btnBackModalThirdFromMap = $('#BackModalAddressThirdFromMap_Button')
        let btnOpenModalSubmitMap = $('#openModalAddressSubmitMap')
        let btnBackModalMapFromSubmitMap = $('#BackModalAddressMapFromSubmitMap')
        let btnBackModalMapAndSubmitMap = $('#BackModalAddressMapAndSubmit')
        let modalAddressNestedFirstAndSecond = $('.ModalNestedFirst')
        let modalAddressNestedMapAndSubmitMap = $('.ModalAddressNestedMap')
        let btnSubmitModalAddressFirst = $('#BtnSubmitModalAddressFirst')
        let itemPoint = $('#ItemPointAppearOpenModalAddressFirst')
        let dropDownSearch_ModalAddress = $(`#modalAddressFirstDropDown`)
        let inputSearch_ModalAddres = $('#SearchModalAddressFirst')
        let itemDelete = $('#ItemDeleteModalAddressFirst')
        let backDrop = $(`.modal-backdrop`)
        handleSetupClassname_ModalAddress(modalSubmitMap, modalMap, modalFirst, modalSecond, modalThird, backDrop);
        handleNested_ModalAddress(modalAddressNestedFirstAndSecond, modalAddressNestedMapAndSubmitMap);
        handleClickPreventCloseOutside_ModalAddress(modalSubmitMap, modalMap, modalFirst, modalSecond, modalThird)
        handleOpenAndClose_ModalAddress(itemDelete, inputSearch_ModalAddres, dropDownSearch_ModalAddress, itemPoint, btnSubmitModalAddressFirst, btnBackModalMapAndSubmitMap, btnBackModalMapFromSubmitMap, btnOpenModalSubmitMap, modalSubmitMap, btnOpenModalMap, btnBackModalThirdFromMap, iconBackModalThirdFromMap, modalMap, modalFirst, modalSecond, modalThird, btnOpenModalFirst, btnCloseModalFirst, btnOpenModalSecond, btnOpenModalThird, btnBackModalFirstFromThird, btnBackModalFirstFromSecond)
    }
    let checkRexName = (name) => {
        let regex = /^[a-zA-Z ]+$/;
        return regex.test(name);
    }
    let checkRexPhoneBasic = (Phone) => {
        let regex = /^0\d{9}$/;
        return regex.test(Phone);
    }
    let checkRexPhone = (Phone) => {
        let regex = /^\(\+84\) \d{3} \d{3} \d{3}$/;
        return regex.test(Phone);
    }
    let handleInputPhone = () => {
        value = $('#modalAddress_InputPhone').val();
        let slicevalue = value.trim().slice(1, value.length);
        let spaceValue = slicevalue.substr(0, 3) + ' ' +
            slicevalue.substr(3, 3) + ' ' +
            slicevalue.substr(6, 4);
        let areaCode = "(+84)"
        let successValue = `${areaCode} ${spaceValue}`;
        $(inputPhoneId).attr('value', `${successValue}`)
        $(this).removeClass('input-red-boder input-red-placeholder-trans');
        $('#itemSubPhone').hide();
        $('#modalAddress_InputPhone').val(``)
        $('#modalAddress_InputPhone').val(`${successValue}`)
    }
    let handleClickOutSideForm_ModalAddress = () => {
        $(document).on('click', function (e) {
            const ThisInputName = $('#modalAddress_InputName');
            const ThisInputPhone = $('#modalAddress_InputPhone');
            if ($('#modal_anddress-third').hasClass('show') === true) {
                if ($(e.target).closest('#modalAddress_InputName').length === 0 && $(e.target).closest('#BackModalAddressFirstFromThird').length === 0) {
                    if (ThisInputName.val() === '' && CountInputAddress.name === 0) {
                        ThisInputName.removeClass('input-red-placeholder input-red-boder');
                    }
                    if (ThisInputName.val() === '' && CountInputAddress.name != 0) {
                        ThisInputName.addClass('input-red-placeholder input-red-boder')
                        $('#item-placeholders-name').hide();
                        $('#itemSubName').hide();
                        $('#itemSubNameLength').hide();
                    }
                    if (ThisInputName.val() != "" && checkRexName(ThisInputName.val()) != true && CountInputAddress.name != 0) {
                        ThisInputName.removeClass('input-red-placeholder input-red-boder');
                        ThisInputName.addClass(`input-red-placeholder input-red-boder input-red-placeholder-trans `);
                        $("#item-placeholders-name").show();
                        $("#item-placeholders-name").addClass('input-red-text')
                        if (ThisInputName.val().length <= 1) {
                            $('#itemSubName').hide();
                            $('#itemSubNameLength').show();
                        }
                        else {
                            $('#itemSubNameLength').hide();
                            $('#itemSubName').show();
                        }
                    }
                    if (ThisInputName.val() != "" && checkRexName(ThisInputName.val()) === true && CountInputAddress.name != 0) {
                        ThisInputName.removeClass('input-red-placeholder input-red-boder');
                        $('#itemSubName').hide();
                        $('#itemSubNameLength').hide();
                        $("#item-placeholders-name").hide();
                        CountInputAddress.isTrueName = true;
                    }
                }
                if ($(e.target).closest('#modalAddress_InputPhone').length === 0 && $(e.target).closest('#BackModalAddressFirstFromThird').length === 0) {
                    if (ThisInputPhone.val() === '' && CountInputAddress.phone === 0) {
                        ThisInputPhone.removeClass('input-red-placeholder input-red-boder');
                    }
                    if (ThisInputPhone.val() === '' && CountInputAddress.phone != 0) {
                        ThisInputPhone.addClass('input-red-placeholder input-red-boder')
                        $('#item-placeholders-Phone').hide();
                        $('#itemSubPhone').hide();
                    }
                    if (ThisInputPhone.val() != '' && CountInputAddress.phone != 0 && checkRexPhoneBasic(ThisInputPhone.val()) != true && checkRexPhone(ThisInputPhone.val()) != true) {
                        ThisInputPhone.addClass('input-red-placeholder input-red-boder');
                        $('#item-placeholders-Phone').show();
                        $('#item-placeholders-Phone').addClass('input-red-text');
                        $('#itemSubPhone').show();

                    }
                    if (ThisInputPhone.val() != '' && CountInputAddress.phone != 0 && checkRexPhoneBasic(ThisInputPhone.val()) === true || checkRexPhone(ThisInputPhone.val()) === true) {
                        ThisInputPhone.removeClass('input-red-placeholder input-red-boder');
                        $('#item-placeholders-Phone').show();
                        $('#item-placeholders-Phone').removeClass('input-red-text');
                        $('#itemSubPhone').hide();

                    }
                    if (ThisInputPhone.val() != '' && checkRexPhone(ThisInputPhone.val()) === false && checkRexPhoneBasic(ThisInputPhone.val()) === true && CountInputAddress.phone != 0) {
                        value = $('#modalAddress_InputPhone').val();
                        let slicevalue = value.trim().slice(1, value.length);
                        let spaceValue = slicevalue.substr(0, 3) + ' ' +
                            slicevalue.substr(3, 3) + ' ' +
                            slicevalue.substr(6, 4);
                        let areaCode = "(+84)"
                        let successValue = `${areaCode} ${spaceValue}`;
                        ThisInputPhone.attr('value', `${successValue}`)
                        ThisInputPhone.removeClass('input-red-boder input-red-placeholder-trans');
                        $('#itemSubPhone').hide();
                        $('#modalAddress_InputPhone').val(``)
                        $('#modalAddress_InputPhone').val(`${successValue}`)
                        CountInputAddress.isTruePhone = true;
                    }

                }
            }
            if ($(e.target).closest('#BackModalAddressFirstFromThird').length != 0 && $(e.target).closest('#modalAddress_InputPhone').length === 0 && $(e.target).closest('#modalAddress_InputName').length === 0) {
                ThisInputName.removeClass('input-red-placeholder input-red-boder input-red-placeholder-trans')
                $("#item-placeholders-name").removeClass('input-red-text');
                $("#item-placeholders-name").hide();
                $('#itemSubName').hide()
                $('#itemSubNameLength').hide();
                ThisInputName.val(``)
                ThisInputPhone.removeClass('input-red-placeholder input-red-boder')
                $('#itemSubPhone').hide();
                $('#item-placeholders-Phone').removeClass('input-red-text');
                $('#item-placeholders-Phone').hide();
                ThisInputPhone.val(``)
            }
        })
    }

    let handleGetvalidateform = (inputNameId, NameSubId, inputPhoneId, PhonesubId) => {
        $("#item-placeholders-name").hide();
        let handleGetvalidateName = () => {
            handleClickOutSideForm_ModalAddress();
            $('#modalAddress_InputName').click(function () {
                if ($(this).val() != "") {
                    $(this).removeClass(`input-red-boder input-red-placeholder `)
                    $('#itemSubNameLength').hide();
                    $("#item-placeholders-name").show();
                    $('#itemSubName').hide()
                    $("#item-placeholders-name").removeClass('input-red-text')
                }
                else {
                    $("#item-placeholders-name").hide();
                    $(this).removeClass('input-red-boder input-red-placeholder');
                    $('#itemSubName').hide();
                    $('#itemSubNameLength').hide();
                }
            })
            $('#modalAddress_InputName').on('keyup change', function () {
                CountInputAddress.name = 1
                if (CountInputAddress.name != 0 && $(this).val() === "") {
                    $(this).removeClass(`input-red-boder input-red-placeholder `)
                    $("#item-placeholders-name").removeClass('input-red-text');
                    $("#item-placeholders-name").hide();
                    $('#itemSubNameLength').hide();
                    $('#itemSubName').hide();
                }
                if ($(this).val() != '' && CountInputAddress.name != 0) {
                    $("#item-placeholders-name").show();
                }


            })
        }
        let handleGetvalidatePhone = () => {
            $('#modalAddress_InputPhone').click(function () {
                if ($(this).val() === '') {
                    $(this).removeClass('input-red-placeholder input-red-boder')
                    $('#item-placeholders-Phone').hide();
                    $('#itemSubPhone').hide();
                }
                if ($(this).val() != '' && checkRexPhoneBasic($(this).val()) != true && checkRexPhone($(this).val()) != true) {
                    $(this).removeClass('input-red-placeholder input-red-boder')
                    $('#item-placeholders-Phone').removeClass('input-red-text');
                    $('#item-placeholders-Phone').show();
                    $('#itemSubPhone').hide();
                }
                if ($(this).val() != '' && checkRexPhone($(this).val()) === false && checkRexPhoneBasic($(this).val()) === true) {
                    value = $('#modalAddress_InputPhone').val();
                    let slicevalue = value.trim().slice(1, value.length);
                    let spaceValue = slicevalue.substr(0, 3) + ' ' +
                        slicevalue.substr(3, 3) + ' ' +
                        slicevalue.substr(6, 4);
                    let areaCode = "(+84)"
                    let successValue = `${areaCode} ${spaceValue}`;
                    $(inputPhoneId).attr('value', `${successValue}`)
                    $(this).removeClass('input-red-boder input-red-placeholder-trans');
                    $('#itemSubPhone').hide();
                    $('#modalAddress_InputPhone').val(``)
                    $('#modalAddress_InputPhone').val(`${successValue}`)
                    CountInputAddress.isTruePhone = true;
                }
            })
            $('#modalAddress_InputPhone').on('keyup', function () {
                CountInputAddress.phone = 1;
                if ($(this).val() != '') {
                    $(this).removeClass('input-red-placeholder input-red-boder')
                    $('#item-placeholders-Phone').removeClass('input-red-text');
                    $('#item-placeholders-Phone').show();
                }
                else {
                    $('#item-placeholders-Phone').hide();
                }
            })
        }
        handleGetvalidateName();
        handleGetvalidatePhone();

    }
    let handleAnimationInputAddress = async () => {
        let ListProvince = await fetch.getData("../province.json");
        let listDistrict = await fetch.getData(`./District/District${1}.json`)
        let listWards = await fetch.getData(`./District/District${2}.json`)
        $('#wrapProvincecity').mouseover(function (e) {
            if (isSuccess.isCity === false) {
                $(this).css('cursor', 'no-drop');
            }

            else {
                $(this).css('cursor', 'pointer');
            }
        });
        $('#wrapProvinceDistrict').mouseover(function (e) {
            if (isSuccess.isDistrict === false) {
                $(this).css('cursor', 'no-drop');
            }

            else {
                $(this).css('cursor', 'pointer');
            }
        });

        $('#wrapProvincewards').mouseover(function () {

            if (isSuccess.isWards === false) {
                $(this).css('cursor', 'no-drop');
            }

            else {
                $(this).css('cursor', 'pointer');
            }
        });
        $('#wrapProvincecity').click(function (e) {
            if ((isSuccess.isCity === true && isSuccess.isDistrict === true) || (isSuccess.isCity === true && isSuccess.isWards === true)) {
                isLoad.isCity = true
                isLoad.isDistrict = false
                isLoad.isWards = false
                handleShow();
                if ($("#horizoneProvince").position().left > 150.4000244140625 && $("#horizoneProvince").position().left < 300 && (isSuccess.isCity === true && isSuccess.isDistrict === true)) {
                    $("#horizoneProvince").css("left", `0%`);

                }

                else if ($("#horizoneProvince").position().left > 300.79998779296875 && (isSuccess.isCity === true && isSuccess.isWards === true)) {
                    $("#horizoneProvince").css("left", `0%`)
                    $("#horizoneProvince").css('transform', 'translate(0,0)');
                }
            }
        });
        $('#wrapProvinceDistrict').click(function (e) {
            if (((isSuccess.isCity === true && isSuccess.isDistrict === true) || (isSuccess.isDistrict === true && isSuccess.isWards === true))) {
                isLoad.isCity = false
                isLoad.isDistrict = true
                isLoad.isWards = false
                handleShow();

                if ($("#horizoneProvince").position().left === 0 && (isSuccess.isCity === true && isSuccess.isDistrict === true)) {
                    $("#horizoneProvince").css("left", `33.333333333%`);

                }
                else if ($("#horizoneProvince").position().left > 300.79998779296875 && (isSuccess.isDistrict === true && isSuccess.isWards === true)) {
                    $("#horizoneProvince").css("left", `33.333333333%`)
                    $("#horizoneProvince").css('transform', 'translate(0,0)');

                }
            }
        });

        $('#wrapProvincewards').click(function () {
            if ((isSuccess.isWards === true && isSuccess.isCity === true) || (isSuccess.isWards === true && isSuccess.isDistrict === true)) {
                isLoad.isCity = false
                isLoad.isDistrict = false
                isLoad.isWards = true
                handleShow();
                if ($("#horizoneProvince").position().left === 0 && (isSuccess.isWards === true && isSuccess.isCity === true)) {
                    $("#horizoneProvince").css("left", `100%`);
                    $("#horizoneProvince").css('transform', 'translate(-100%,0)');

                }
                else if ($("#horizoneProvince").position().left > 150.4000244140625 && (isSuccess.isWards === true && isSuccess.isDistrict === true)) {
                    $("#horizoneProvince").css("left", `100%`);
                    $("#horizoneProvince").css('transform', 'translate(-100%,0)');

                }
            }

        });
    }
    let handleCloseOutside = () => {
        $(document).on('click', function (event) {
            let $target = $(event.target);
            if ($('#modal_anddress-third').hasClass('show') === true) {
                if (!$target.closest('#wrapItemProvincegird').length && !$target.closest('#inputProvince').length && !$target.closest('#wrapProvincecity').length && !$target.closest('#wrapProvinceDistrict').length && !$target.closest('#wrapProvincewards').length || $target.closest('#BackModalAddressFirstFromThird').length != 0) {
                    $("#dropdownaddress").hide();
                }
            }
        });
    }
    let handleShow = async () => {
        try {
            let ListProvince = await fetch.getData("../province.json");
            let listDistrict = await fetch.getData(`./District/District${1}.json`)
            let listWards = await fetch.getData(`./District/District${2}.json`)
            if (isLoad.isCity === true) {
                $('#wrapProvincecity').addClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').removeClass('intputCity_animation-color')
                $('#wrapProvincewards').removeClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameProvince === "object") {
                    $("#wrapItemProvincegird").empty().append(ListProvince.data.data.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"   id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')

                    $(`#wrapItemProvincegird #${isLoad.value.getNameProvince[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(ListProvince.data.data.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"   id="${item.id}">${item.name}</div>`)
                    );
                }
            }
            if (isLoad.isDistrict === true) {
                $('#wrapProvincecity').removeClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').addClass('intputCity_animation-color')
                $('#wrapProvincewards').removeClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameDistrict === "object") {
                    $("#wrapItemProvincegird").empty().append(listDistrict.data.District.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')
                    $(`#wrapItemProvincegird #${isLoad.value.getNameDistrict[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(listDistrict.data.District.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                }
            }
            if (isLoad.isWards === true) {
                $('#wrapProvincecity').removeClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').removeClass('intputCity_animation-color')
                $('#wrapProvincewards').addClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameWards === "object") {
                    $("#wrapItemProvincegird").empty().append(listWards.data.District.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')
                    $(`#wrapItemProvincegird #${isLoad.value.getNameWards[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(listWards.data.District.map(item => `<div class="item-text-Province col-12 p-3 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    let handlePreventCopy = () => {
        $(document).on("cut copy ", "#inputProvince", function (event) {
            event.preventDefault();
        });
    }
    let handleActionClickItem = async () => {
        let getNameProvince
        let getNameDistrict
        let getNameWards

        $('#wrapItemProvincegird').on('click', '.item-text-Province ', async function () {
            let index = $(this).attr('id')
            if (isLoad.isCity === true) {

                let ListProvince = await fetch.getData("../province.json");
                getNameProvince = ListProvince.data.data.filter(item => {
                    if (item.id === Number(index)) {

                        return item
                    }
                })
                CountInputAddress.address = 1;
                isLoad.Past = [...isLoad.Past, getNameProvince]
                isLoad.value = { ...isLoad.value, getNameProvince }
                $('#inputProvince').val('');
                $('#inputProvince').val(`${isLoad.value.getNameProvince[0].name}`);
                $('#inputProvince').removeClass('input-red-boder input-red-text')
                $('#inputProvince').attr("placeholder", `${isLoad.value.getNameProvince[0].name} `)
                $('#horizoneProvince').css("left", "33.333333333%")
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = false
                isLoad.isCity = false;
                isLoad.isDistrict = true;
                isLoad.isWards = false
                CountInputAddress.isTrueAddress = false
                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                $('#itemIconSearch').hide();
                $('#itemIconDelete').show();
                handleShow();

            }
            else if (isLoad.isDistrict === true) {

                let listDistrict = await fetch.getData(`./District/District${1}.json`)
                getNameDistrict = listDistrict.data.District.filter(item => {
                    if (item.id === Number(index)) {
                        return item
                    }
                })
                CountInputAddress.address = 1;
                isLoad.Past = [...isLoad.Past, getNameDistrict]
                isLoad.value = { ...isLoad.value, getNameDistrict }
                $('#inputProvince').val('')
                $('#inputProvince').val(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name}`);
                $('#inputProvince').attr("placeholder", `${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} `)
                $("#horizoneProvince").css("left", `100%`);
                $("#horizoneProvince").css('transform', 'translate(-100%,0)');
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = true
                isLoad.isCity = false;
                isLoad.isDistrict = false;
                isLoad.isWards = true
                CountInputAddress.isTrueAddress = false
                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                $('#itemIconSearch').hide();
                $('#itemIconDelete').show();
                handleShow();
            }
            else if (isLoad.isWards === true) {

                let listWards = await fetch.getData(`./District/District${2}.json`)
                getNameWards = listWards.data.District.filter(item => {
                    if (item.id === Number(index)) {
                        return item
                    }
                })
                CountInputAddress.address = 1;
                isLoad.Past = [...isLoad.Past, getNameWards]
                isLoad.value = { ...isLoad.value, getNameWards }
                $('#inputProvince').val('')
                $('#inputProvince').val(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`);
                $('#inputProvince').attr("placeholder", `${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name} `)
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = true
                isLoad.isCity = false;
                isLoad.isDistrict = false;
                isLoad.isWards = false
                CountInputAddress.isTrueAddress = true;
                $("#horizoneProvince").css("left", `0%`)
                $("#horizoneProvince").css('transform', 'translate(0,0)');
                $("#dropdownaddress").hide();
                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                $('#itemIconDelete').hide();
                $('#itemIconSearch').hide();
                handleInputAddressSpecifically();
            }
        });

    }
    let ActionDropDownAddress = async () => {
        $('#inputProvince').on("click ", function (e) {
            $("#itemSubProvince").hide();
            $(this).removeClass('input-red-boder input-red-text input-red-placeholder')
            $("#dropdownaddress").show()
            if (isLoad.Past.length <= 3) {
                $(this).val('');

            }
            if (isLoad.Past.length < 3 && typeof isLoad.value.getNameProvince === 'undefined' && typeof isLoad.value.getNameDistrict === "undefined" && typeof isLoad.value.getNameWards === 'undefined') {
                isLoad.isCity = true
                isLoad.isDistrict = false;
                isLoad.isWards = false
                handleShow();
            }
            if (isLoad.Past.length === 3) {
                isLoad.isCity = true;
                isLoad.isDistrict = false;
                isLoad.isWards = false;

                handleShow();
            }
            if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                if ($(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === false && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === false) {
                    isLoad.isCity = false
                    isLoad.isDistrict = true;
                    isLoad.isWards = false;
                    $(this).val('')
                    handleShow();
                }

            }
            if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                if ($(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === false) {
                    isLoad.isCity = false
                    isLoad.isDistrict = false;
                    isLoad.isWards = true;

                    $(this).val('')
                    handleShow();
                }

            }
            if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                if ($(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === true) {
                    isLoad.isCity = true
                    isLoad.isDistrict = false;
                    isLoad.isWards = false;
                    $(this).val('')
                    handleShow();
                }

            }
            if ($(this).val() === '') {
                $('#itemIconSearch').show();

            }
            if ($(this).attr("placeholder") === 'Tỉnh/Thành phố, Quận/Huyện, Phường/Xã') {
                $(this).val('');
                $('#itemIconDelete').hide();
            }
            if ($(this).attr("placeholder") != 'Tỉnh/Thành phố, Quận/Huyện, Phường/Xã') {
                $('#itemIconDelete').show();
            }
        })
        $('#itemIconDelete').click(function (e) {
            e.stopPropagation();
            isLoad.Past = []
            $('#itemSubProvince').removeClass('input-red-text')
            $('#itemSubProvince').hide();
            $('#itemIconDelete').hide();
            $('#inputProvince').val('');
            $('#inputProvince').attr("placeholder", `Tỉnh/Thành phố, Quận/Huyện, Phường/Xã`)
            $('#inputProvince').removeClass('input-red-text  input-red-boder')
            isLoad.isCity = true;
            isLoad.isDistrict = false;
            isLoad.isWards = false;
            isLoad.value.getNameDistrict = 'undefined'
            isLoad.value.getNameProvince = 'undefined'
            isLoad.value.getNameWards = 'undefined'
            isSuccess.isCity = false;
            isSuccess.isDistrict = false;
            isSuccess.isWards = false
            CountInputAddress.isTrueAddress = false;
            CountInputAddress.address = 0;
            $("#horizoneProvince").css("left", `0%`)
            $("#horizoneProvince").css('transform', 'translate(0,0)');
            handleShow();
        })
        $(document).on('click', function (event) {
            if ($('#modal_anddress-third').hasClass('show') === true) {
                if ($(event.target).closest('#wrapInputCity').length === 0 && $('#inputProvince').val() != '' && CountInputAddress.address === 1) {
                    $('#itemIconSearch').hide();
                    $('#itemIconDelete').hide();
                    if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                        if ($('#inputProvince').val().includes(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`) === false && event.target.id != 'itemIconDelete') {
                            $("#itemSubProvince").addClass("input-red-text")
                            $("#itemSubProvince").show();
                            $('#inputProvince').addClass('input-red-boder')
                        }
                    }

                    if ($('#inputProvince').attr('placeholder') != 'Tỉnh/Thành phố, Quận/Huyện, Phường/Xã') {

                        $('#inputProvince').val(`${$('#inputProvince').attr('placeholder')}`)
                    }
                }
                if (CountInputAddress.address === 1 && $('#inputProvince').val() === "" && $(event.target).closest('#wrapInputCity').length === 0) {
                    $('#inputProvince').addClass('input-red-boder')
                }
            }
            if ($(event.target).closest('#BackModalAddressFirstFromThird').length != 0) {
                $("#dropdownaddress").hide()
                $('#itemIconSearch').hide();
                $('#itemIconDelete').hide();
                $("#itemSubProvince").hide();
                $('#inputProvince').removeClass('input-red-boder input-red-text')
                $("#horizoneProvince").css("left", `0%`)
                $("#horizoneProvince").css('transform', 'translate(0,0)');
                $('#inputProvince').attr("placeholder", `Tỉnh/Thành phố, Quận/Huyện, Phường/Xã`)
                $('#inputProvince').val(``)
            }
        });
        $('#inputProvince').on('keyup', function (e) {
            CountInputAddress.address = 1;
            let value = $(this).val().toLowerCase();
            $('.item-text-Province').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            })

        })

    }
    let handleActionInputAddress = async () => {
        ActionDropDownAddress();
        handlePreventCopy()
    }
    let handleInputAddress = async () => {
        handlePreventCopy();
        handleActionClickItem()
        handleActionInputAddress()
        handleCloseOutside();
        handleAnimationInputAddress();
    }
    let handleMouseoverDisabled_DropDown_DetailAddress = (mainValue, dropdown, itemSub, itemPlaceholder) => {
        $(document).on('mouseover', function (e) {
            let veillayer = $('#mapVeilLayer');
            let coverWarning = $('#wrapMap')
            let coverMap = $('#wrapMapGoogle');
            let curtainPrevent = $('#mapBarrierCurtain');
            let embedGoogle = $('#embedGoogle')
            if ($('#modal_anddress-third').hasClass('show') === true) {
                if (isLoad.Past.length <= 3 && typeof isLoad.value.getNameProvince === 'undefined' && typeof isLoad.value.getNameDistrict === "undefined" && typeof isLoad.value.getNameWards === 'undefined') {
                    mainValue.prop("disabled", true)

                }
                if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince != 'undefined' && typeof isLoad.value.getNameDistrict != "undefined" && typeof isLoad.value.getNameWards != 'undefined') {
                    if ($('#inputProvince').val().includes(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`) === false) {
                        mainValue.prop("disabled", true)
                    }
                }
                if ($('#inputProvince').val() != "" && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object' && isLoad.Past.length <= 3) {
                    mainValue.prop("disabled", false)

                }
                if (isLoad.Past.length > 3 && typeof isLoad.value.getNameProvince != 'undefined' && typeof isLoad.value.getNameDistrict != "undefined" && typeof isLoad.value.getNameWards != 'undefined') {
                    if ($('#inputProvince').val().includes(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`) === true) {
                        mainValue.prop("disabled", false)
                    }
                }
            }
            if (mainValue.prop('disabled') === false && CountInputAddress.DetailAddress === 0) {
                veillayer.show();
                embedGoogle.hide();
                coverWarning.hide();
                curtainPrevent.hide();
                coverMap.addClass('mt-4')
            }
            if (mainValue.prop('disabled') === false && CountInputAddress.DetailAddress === 1) {
                coverWarning.show();
                embedGoogle.show();
                curtainPrevent.show();
                veillayer.hide();
                coverMap.removeClass('mt-4')
            }
            if (mainValue.prop('disabled') === true) {
                veillayer.show();
                embedGoogle.hide();
                coverWarning.hide();
                curtainPrevent.hide();
                coverMap.addClass('mt-4')
            }
        })
    }
    let handleClickDisabled_DropDown_DetailAddress = (mainValue, dropdown, itemSub, itemPlaceholder) => {
        $(document).on('click', function (e) {
            if ($('#modal_anddress-third').hasClass('show') === true) {
                if ($(e.target).closest('#inputaddressspecifically').length === 0 && $(e.target).closest('#BackModalAddressFirstFromThird').length === 0) {
                    dropdown.css('z-index', -1)
                    mainValue.val($.trim(mainValue.val()));
                    if (mainValue.val().length < 5 && mainValue.val().length > 0 && mainValue.prop('disabled') === false && mainValue.val() != '' && CountInputAddress.DetailAddress === 1) {
                        CountInputAddress.isTrueDetailAddress = false
                        mainValue.addClass('input-red-boder')
                        itemSub.show();
                        itemPlaceholder.addClass(`input-red-text`)
                        itemPlaceholder.show()

                    }
                    if (mainValue.val().length > 5 && mainValue.val() != '' && CountInputAddress.DetailAddress === 1) {
                        CountInputAddress.isTrueDetailAddress = true
                        itemPlaceholder.show()
                        itemPlaceholder.removeClass('input-red-text')
                        mainValue.removeClass('input-red-boder input-red-placeholder');
                        itemSub.hide();

                    }
                    if (CountInputAddress.DetailAddress === 0) {
                        CountInputAddress.isTrueDetailAddress = false
                        mainValue.removeClass('input-red-boder input-red-text');
                        itemSub.hide();
                        itemPlaceholder.hide()

                    }
                    if (CountInputAddress.DetailAddress === 1 && mainValue.val().length === 0 && mainValue.prop('disabled') === false && mainValue.val() === '') {
                        CountInputAddress.isTrueDetailAddress = false
                        mainValue.addClass('input-red-boder input-red-placeholder')
                        itemPlaceholder.removeClass('input-red-text')
                        itemSub.hide();
                        itemPlaceholder.hide()

                    }
                    if (CountInputAddress.DetailAddress === 1 && mainValue.val().length === 0 && mainValue.prop('disabled') === true && mainValue.val() === '') {
                        CountInputAddress.isTrueDetailAddress = false
                        mainValue.addClass('input-red-boder input-red-placeholder')
                        mainValue.removeClass('input-red-placeholder')
                    }

                }
            }
            if ($(e.target).closest('#BackModalAddressFirstFromThird').length != 0) {
                mainValue.removeClass('input-red-boder input-red-placeholder')
                itemSub.hide();
                itemPlaceholder.removeClass('input-red-text')
                itemPlaceholder.hide()
                dropdown.hide();
                mainValue.val("")
                mainValue.prop('disabled', true)
            }
        })
    }
    let handleShow_Dropdown_DetailAddress = async (mainValue, dropdown) => {
        let DataDetailAddress = await fetch.getData('../province.json');
        $('#dropdrownDetailAddressGird').empty().append(DataDetailAddress.data.data.map(item => `<div class="item-detailAddress col-12  p-2" id="${item.id}">${item.name} </div>`))
        $('#dropdrownDetailAddressGird').find('#1.item-detailAddress').addClass('item-detailAddress-active')
    }
    let handleClick_DropDown_DetailAddress = (mainValue, dropdown, itemSub, itemPlaceholder) => {
        mainValue.click(function (e) {
            $(".modal_anddress-third-down-body").scrollTop(mainValue.offset().top);
            mainValue.removeClass('input-red-boder input-red-placeholder')
            itemPlaceholder.removeClass('input-red-text')
            itemSub.hide();
            if ($(this).val().length > 0) {
                itemPlaceholder.show();
            }
            else {
                itemPlaceholder.hide();
            }
        })
    }
    let handleKeyup_Dropdown_DetailAddress = (mainValue, dropdown, itemSub, itemPlaceholder) => {
        let veillayer = $('#mapVeilLayer');
        let coverWarning = $('#wrapMap')
        let coverMap = $('#wrapMapGoogle');
        let curtainPrevent = $('#mapBarrierCurtain');
        let embedGoogle = $('#embedGoogle')
        mainValue.keyup(function (event) {
            event.stopImmediatePropagation();
            let count = 0;
            let min = [];
            itemSub.hide();
            CountInputAddress.DetailAddress = 1;
            let searchValue = $(this).val().trim().toLowerCase();
            if (mainValue.val().trim().length > 0) {
                dropdown.addClass('rounded-2  shadow  border border-2 ')
                dropdown.css('z-index', 3)
            }
            else {
                dropdown.removeClass('rounded-2 border border-2 shadow  ')
                dropdown.css('z-index', -1)
            }
            $('.item-detailAddress').filter(function () {
                if ($(this).text().toLowerCase().indexOf(searchValue) > -1) {
                    $(this).show();
                }
                else {

                    $(this).hide();
                }
            })
            $('.item-detailAddress').each(function () {
                if ($(this).css('display') === 'block') {
                    ++count;
                    min.push($(this).attr('id'))
                }

            })
            if (min.length > 0) {
                $('#dropdrownDetailAddressGird').find(`.item-detailAddress`).removeClass('item-detailAddress-active')
                $('#dropdrownDetailAddressGird').find(`#${min[0]}.item-detailAddress`).addClass('item-detailAddress-active')
            }
            if (mainValue.val().trim().length <= 0) {
                count = 0
            }
            if (count > 0) {
                dropdown.addClass('rounded-2  shadow  border border-2 ')
            }
            else {
                dropdown.removeClass('rounded-2 border border-2 shadow')
            }
            console.log(count);
            mainValue.removeClass('input-red-boder input-red-placeholder')
            itemPlaceholder.removeClass('input-red-text')
            if ($(this).val().length > 0) {
                itemPlaceholder.show();
            }
            else {
                itemPlaceholder.hide();
            }
            if (mainValue.prop('disabled') === true) {
                CountInputAddress.isTrueDetailAddress = false;
            }
            if (mainValue.prop('disabled') === false && mainValue.val().trim().length > 0 && mainValue.val().trim().length <= 5) {
                CountInputAddress.isTrueDetailAddress = false;
            }
            if (mainValue.prop('disabled') === false && mainValue.val().trim().length > 5) {
                CountInputAddress.isTrueDetailAddress = true;
            }
            if (mainValue.prop('disabled') === false && CountInputAddress.DetailAddress === 0) {
                veillayer.show();
                embedGoogle.hide();
                coverWarning.hide();
                curtainPrevent.hide();
                coverMap.addClass('mt-4')
            }
            if (mainValue.prop('disabled') === false && CountInputAddress.DetailAddress === 1) {
                coverWarning.show();
                embedGoogle.show();
                curtainPrevent.show();
                veillayer.hide();
                coverMap.removeClass('mt-4')
            }
            if (mainValue.prop('disabled') === true) {
                veillayer.show();
                embedGoogle.hide();
                coverWarning.hide();
                curtainPrevent.hide();
                coverMap.addClass('mt-4')
            }
        })

    }
    let handleAction_Dropdown_DetailAddress = async (mainValue, dropdown, itemSub, itemPlaceholder) => {
        let DataDetailAddress = await fetch.getData('../province.json');
        $('#dropdrownDetailAddressGird').on('click', `.item-detailAddress`, function (e) {
            let position = $(this).prop('id');
            let valuesDetailAddress = DataDetailAddress.data.data.filter((item) => {
                if (item.id === Number(position)) {
                    return item
                }
            })
            mainValue.val('');
            mainValue.val(`${valuesDetailAddress[0].name}`);
        })
    }

    let handleInputAddressSpecifically = () => {
        let mainValue = $('#inputaddressspecifically')
        let dropdown = $('#dropdrownDetailAddress')
        let itemSub = $('#itemSubSpecificallyLength')
        let itemPlaceholder = $(`#itemPlaceholdersSpecifically`)
        let itemMain = $('.item-detailAddress');
        handleMouseoverDisabled_DropDown_DetailAddress(mainValue, dropdown, itemSub, itemPlaceholder);
        handleClickDisabled_DropDown_DetailAddress(mainValue, dropdown, itemSub, itemPlaceholder);
        handleClick_DropDown_DetailAddress(mainValue, dropdown, itemSub, itemPlaceholder)
        handleKeyup_Dropdown_DetailAddress(mainValue, dropdown, itemSub, itemPlaceholder, itemMain);
        handleShow_Dropdown_DetailAddress(mainValue, dropdown);
        handleAction_Dropdown_DetailAddress(mainValue, dropdown, itemSub, itemPlaceholder);
    }
    let handleButtonTypeAddress = () => {
        $('.btn_address_detail').click(function (e) {
            var index = $(this).index();
            $('.btn_address_detail').removeClass('input-red-boder input-red-text');
            $($('.btn_address_detail')[index]).addClass('input-red-boder input-red-text')
        })
    }
    let handleShow_ModalMap = () => {
        let inputDetailAddress = $('#inputaddressspecifically');
        let valueInput = inputDetailAddress.val().trim();
        GlobalTransferValue.historyDetailAddress = [...GlobalTransferValue.historyDetailAddress, valueInput]
        $('#itemTextFromDetailAddress').remove();
        $(`#wrapItemTextModalAddress`).append(`<div class="item-text-FromDetailAddress" id="itemTextFromDetailAddress">${GlobalTransferValue.historyDetailAddress[GlobalTransferValue.historyDetailAddress.length - 1]}</div>`)
    }
    let handleShow_DropDown_ModalAddressFirst = async (girdDropDown) => {
        let ListProvince = await fetch.getData("../province.json");
        girdDropDown.empty().append(ListProvince.data.data.map(item => `<div class="modalAddressFirst_dropdown-item col-12 py-2"id='${item.id}'>${item.name}</div>`))
    }
    let handleClickItem_DropDown_ModalAddressFirst = async (girdDropDown, inputSearch, btnSubmit, dropdown) => {
        let ListProvince = await fetch.getData("../province.json");
        let value = null;
        girdDropDown.on('click', `.modalAddressFirst_dropdown-item`, function () {
            let position = $(this).prop('id')
            value = ListProvince.data.data.filter((item) => {
                if (item.id === Number(position)) {
                    return item
                }
            })
            inputSearch.val('')
            inputSearch.val(`${value[0].name}`)
            btnSubmit.prop('disabled', false);
            dropdown.css('z-index', -1)
            GlobalTransferValue.historyValueSearchModalAddressFirst = [...GlobalTransferValue.historyValueSearchModalAddressFirst, value]
        })
    }
    let handleSearchItem_DropDown_ModalAddressFirst = async (inputSearch, dropdown, modalAddressDialog, itemDelete) => {
        let formatCheckSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let formatCheckNumber = /^[0-9]+$/;
        inputSearch.keyup(function () {
            isLoad.countSearchModalAddressFirst = 0
            modalAddressDialog.css('overflow', 'hidden')
            let valueInput = $(this).val().toLowerCase();
            $('#ModalAddressFirstDropdownGird .modalAddressFirst_dropdown-item').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(valueInput) > -1)
            })
            if (inputSearch.val().trim().length > 0) {
                dropdown.addClass("border border-2 shadow-lg mt-1 rounded-2")
                dropdown.css('z-index', 3)
                itemDelete.show();
            }
            else {
                dropdown.removeClass("border border-2 shadow-lg mt-1 rounded-2")
                dropdown.css('z-index', -1)
                itemDelete.hide();
            }
            $('#ModalAddressFirstDropdownGird .modalAddressFirst_dropdown-item').each(function () {
                if ($(this).css('display') === 'block') {
                    ++isLoad.countSearchModalAddressFirst
                }
            })
            if (inputSearch.val().trim().length <= 0) {
                isLoad.countSearchModalAddressFirst = 0
            }
            if (isLoad.countSearchModalAddressFirst > 0) {
                modalAddressDialog.css('overflow-y', 'auto')
                dropdown.addClass('border border-2 shadow-lg mt-1 rounded-2 ')
            }
            else {
                modalAddressDialog.css('overflow-y', 'none')
                dropdown.removeClass('border border-2 shadow-lg mt-1 rounded-2')
            }
            // if (isLoad.countSearchModalAddressFirst === 0) {
            //     modalAddressDialog.css('overflow-y', 'none')
            //     dropdown.removeClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (inputSearch.val().trim().length === 0) {
            //     isLoad.countSearchModalAddressFirst = GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 1]
            // }
            // GlobalTransferValue.historyCountSearchModalAddressFirst = [...GlobalTransferValue.historyCountSearchModalAddressFirst, isLoad.countSearchModalAddressFirst]

            // if (isLoad.countSearchModalAddressFirst === 0) {
            //     modalAddressDialog.css('overflow-y', 'none')
            //     dropdown.removeClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (GlobalTransferValue.historyCountSearchModalAddressFirst.length === 1 && GlobalTransferValue.historyCountSearchModalAddressFirst[0] > 0) {
            //     modalAddressDialog.css('overflow-y', 'auto')
            //     dropdown.addClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (GlobalTransferValue.historyCountSearchModalAddressFirst.length === 1 && GlobalTransferValue.historyCountSearchModalAddressFirst[0] === 0) {
            //     modalAddressDialog.css('overflow-y', 'auto')
            //     dropdown.removeClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 2] != GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 1] && GlobalTransferValue.historyCountSearchModalAddressFirst.length > 1) {
            //     modalAddressDialog.css('overflow-y', 'auto')
            //     dropdown.addClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 2] === GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 1] && GlobalTransferValue.historyCountSearchModalAddressFirst.length > 1) {
            //     modalAddressDialog.css('overflow-y', 'none')
            //     dropdown.removeClass("border border-2 shadow-lg mt-1 rounded-2")
            // }
            // if (inputSearch.val().trim().length === 0 || formatCheckSpecialCharacters.test(inputSearch.val().trim()) || formatCheckNumber.test(inputSearch.val().trim())) {
            //     isLoad.countSearchModalAddressFirst = GlobalTransferValue.historyCountSearchModalAddressFirst[GlobalTransferValue.historyCountSearchModalAddressFirst.length - 1];

            // }

        })
    }
    let handleDelete_DropDown_ModalAddressFirst = (itemDelete, inputSearch, dropdown, btnSubmit) => {
        itemDelete.click(function () {
            isLoad.countSearchModalAddressFirst = 0;
            GlobalTransferValue.historyCountSearchModalAddressFirrst = []
            btnSubmit.prop('disabled', true)
            inputSearch.val('')
            dropdown.css('z-index', -1);
        })

    }
    let handleModalAddressFirst = () => {
        let inputSearch = $('#SearchModalAddressFirst');
        let btnSubmit = $('#BtnSubmitModalAddressFirst');
        let girdDropDown = $('#ModalAddressFirstDropdownGird')
        let item = $('.modalAddressFirst_dropdown-item');
        let dropdown = $('#modalAddressFirstDropDown')
        let modalAddressDialog = $('#modalAnddressDialog')
        let itemDelete = $('#ItemDeleteModalAddressFirst')
        modalAddressDialog.css('overflow', 'hidden')
        handleClickItem_DropDown_ModalAddressFirst(girdDropDown, inputSearch, btnSubmit, dropdown)
        handleShow_DropDown_ModalAddressFirst(girdDropDown)
        handleSearchItem_DropDown_ModalAddressFirst(inputSearch, dropdown, modalAddressDialog, itemDelete);
        handleDelete_DropDown_ModalAddressFirst(itemDelete, inputSearch, dropdown, btnSubmit)
    }
    let CountInputAddress = {
        name: 0,
        isTrueName: false,
        phone: 0,
        isTruePhone: false,
        address: 0,
        isTrueAddress: false,
        DetailAddress: 0,
        isTrueDetailAddress: false,
    }
    let isSuccess = {
        isCity: false,
        isDistrict: false,
        isWards: false
    }
    let isLoad = {
        isCity: false,
        isDistrict: false,
        isWards: false,
        Past: [],
        value: {},
        countSearchModalAddressFirst: 0,
    }
    let GlobalTransferValue = {
        historyDetailAddress: [],
        historyValueSearchModalAddressFirst: ["huyện ba vì"],
    }
    let autoshow = () => {
        $('#modal_transportto-address').modal('show')
    }
    // autoshow()
    handleGetvalidateform(modalAddress_InputName, itemSubName, modalAddress_InputPhone, itemSubPhone);
    // handle_slide_img();
    handleModalAddress();
    handleModalAddressFirst()
    handleInputAddress()
    handleInputAddressSpecifically();
    handleButtonTypeAddress();
    ModalProductImg.AllHandleModalProductsImg();
})

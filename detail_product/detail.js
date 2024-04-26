
$(document).ready(() => {

    let changeImg = () => {
        $(".products_left .detail_img .detail_img-gird .item-img").each((index, item) => {
            $(item).on("mouseover", (e) => {
                $(".detail_products .detail_products-container  .detail_products-grid .products_left .item-img")[0].src = $(item).attr('src')
            })
        })
    }
    let scrollslidecart = () => {
        $(".products_left .detail_img .detail_img-button-next").on('click', (e) => {
            $('.detail_products-grid .products_left .detail_img .detail_img-gird').scrollLeft(+200)
        })
        $(".products_left .detail_img .detail_img-button-prev").on('click', (e) => {
            $('.detail_products-grid .products_left .detail_img .detail_img-gird').scrollLeft(-200)
        })
    }
    let handle_slide_img = () => {
        changeImg();
        scrollslidecart();

    }
    let setup_ClassName_ModalBackDrop = () => {
        $('.modal_anddress').on('shown.bs.modal', () => {
            $('.modal-backdrop').each(function (index) {
                if (index == 0) {
                    $(this).addClass('modal_anddress modal_anddress-up background_modal ');
                }
                else {
                    $(this).addClass('modal_anddress modal_anddress-up');
                }
            })
        })
        $('#modal_anddress-third').on('shown.bs.modal', () => {
            $(this).addClass('modal_anddress modal_anddress-down background_modal');
        })
        $('#modal_anddress-sec').modal({ backdrop: 'static', keyboard: false })
    }
    let modal_inside_modal_modalanddress = () => {
        setup_ClassName_ModalBackDrop();
        $('.modal_anddress').on('shown.bs.modal', function (e) {
            $('.modal_anddress.show').each(function (index) {
                $(this).css('z-index', 1101 + index * 2);
            });
            $('.modal-backdrop').each(function (index) {
                $(this).css('z-index', 1101 + index * 2 - 1);

            });

        });
    }

    let handle_modal_down = () => {
        $("#itembtnaddaddress").click(() => {
            $("#modal_anddress-third").modal().show();
            $("#modal_transportto-address").modal().hide();
            $("#modal_anddress-sec").modal().hide();
            $('.modal_anddress.modal-backdrop').modal().hide();
        });
    }
    let handle_modal_transportto = () => {
        modal_inside_modal_modalanddress();
        handle_modal_down();
    }

    let auto_show = () => {
        $('#modal_anddress-third').modal().show();
    }
    let checkRexName = (name) => {
        let regex = /^[a-zA-Z ]+$/;
        return regex.test(name);
    }
    let checkRexPhone = (Phone) => {
        let regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return regex.test(Phone);
    }
    let handleGetvalidateform = (inputNameId, NameSubId, inputPhoneId, PhonesubId) => {

        let handleGetvalidateName = (inputNameId, NameSubId) => {
            $(inputNameId).on('keypress keyup blur change click ', function (e) {

                if ($(this).val() === "") {
                    $(NameSubId).css("display", "none")

                    $(this).blur(() => {
                        $(this).addClass('input-red-boder input-red-placeholder')
                        $(NameSubId).css("display", "block")
                    })
                    $(this).keyup(() => {
                        $(this).removeClass('input-red-boder input-red-placeholder')
                    })
                    $(this).click(() => {
                        $(this).removeClass('input-red-boder input-red-placeholder')
                    })
                }
                else {
                    if (checkRexName($(this).val()) === false) {
                        $(this).on('change', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                        })
                        $(this).on('blur', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                            $(NameSubId).css("display", "block")
                        })
                        $(this).on('click', () => {
                            $(this).addClass(' input-red-placeholder-trans')
                            $(NameSubId).css("display", "none")
                        })
                    }
                    else {
                        $(this).on('click', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                            $(this).removeClass('input-red-boder')
                            $(NameSubId).css("display", "none")
                        })
                        $(this).on('blur', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                            $(this).removeClass('input-red-boder')
                            $(NameSubId).css("display", "none")
                        })
                        $(NameSubId).css("display", "none")
                    }
                }
            })

        }
        let handleGetvalidatePhone = (inputPhoneId, PhonesubId) => {
            $(inputPhoneId).on('keypress keyup blur change click ', function (e) {

                if ($(this).val() === "") {
                    $(PhonesubId).css("display", "none")
                    // $(this).removeClass('input-red-boder input-red-placeholder .input-red-text ')
                    $(this).blur(() => {
                        $(this).addClass('input-red-boder input-red-placeholder')
                        $(PhonesubId).css("display", "block")
                    })
                    $(this).keyup(() => {
                        $(this).removeClass('input-red-boder input-red-placeholder')
                    })
                    $(this).click(() => {
                        $(this).removeClass('input-red-boder input-red-placeholder')
                    })
                }
                else {
                    if (checkRexPhone($(this).val()) === false) {
                        $(this).on('change', () => {
                            $(this).addClass('input-red-boder  input-red-placeholder-trans')

                        })
                        $(this).on('blur', () => {
                            $(this).addClass('input-red-boder  input-red-placeholder-trans')
                            $(PhonesubId).css("display", "block")

                        })
                        $(this).on('click', () => {
                            $(this).addClass(' input-red-placeholder-trans')
                            $(PhonesubId).css("display", "none")

                        })
                    }
                    else {
                        handleInputPhone(modalAddress_InputPhone, itemSubPhone);
                        $(this).on('click', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                            $(this).removeClass('input-red-boder')
                            $(PhonesubId).css("display", "none")

                        })
                        $(this).on('blur', () => {
                            $(this).addClass('input-red-boder input-red-placeholder-trans')
                            $(this).removeClass('input-red-boder')
                            $(PhonesubId).css("display", "none")

                        })
                        $(PhonesubId).css("display", "none")
                    }
                }
            })
        }
        handleGetvalidateName(inputNameId, NameSubId);
        handleGetvalidatePhone(inputPhoneId, PhonesubId)

    }
    let handleInputPhone = (inputPhoneId, PhonesubId) => {
        $(inputPhoneId).on('change', function (e) {
            value = $(this).val();
            let slicevalue = value.trim().slice(1, value.length);
            let spaceValue = slicevalue.substr(0, 3) + ' ' +
                slicevalue.substr(3, 3) + ' ' +
                slicevalue.substr(6, 4);
            let areaCode = "(+84)"
            let successValue = `${areaCode} ${spaceValue}`;
            $(inputPhoneId).attr('value', `${successValue}`)
            $(this).removeClass('input-red-boder input-red-placeholder-trans');
            $(PhonesubId).css("display", "none");
            $('#modalAddress_InputPhone').val(``)
            $('#modalAddress_InputPhone').val(`${successValue}`)

        })
    }

    const getData = (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                let province = {};
                provincedata = await axios.get(`${url}`);

                if (provincedata) {
                    resolve(provincedata)
                }
                else {
                    province.mess = "not data ...."
                    alert(province.mess);
                }
            }
            catch (e) {
                console.log(e);
                reject(e)
            }
        })
    };
    let handleAnimationInputAddress = async () => {
        let haveValue = await getValueIsSuccess();
        let ListProvince = await getData("../province.json");
        let listDistrict = await getData(`./District/District${1}.json`)
        let listWards = await getData(`./District/District${2}.json`)
        $('#wrapProvincecity').mouseover(function (e) {
            if (haveValue.isCity === false) {
                $(this).css('cursor', 'no-drop');
            }

            else {
                $(this).css('cursor', 'pointer');
            }
        });
        $('#wrapProvinceDistrict').mouseover(function (e) {
            if (haveValue.isDistrict === false) {
                $(this).css('cursor', 'no-drop');
            }

            else {
                $(this).css('cursor', 'pointer');
            }
        });

        $('#wrapProvincewards').mouseover(function () {

            if (haveValue.isWards === false) {
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
            if (!$target.closest('#wrapItemProvincegird').length && !$target.closest('#inputProvince').length && !$target.closest('#wrapProvincecity').length && !$target.closest('#wrapProvinceDistrict').length && !$target.closest('#wrapProvincewards').length) {
                $("#dropdownaddress").hide();
            }
        });
    }


    let getValueIsSuccess = () => {
        return isSuccess
    }
    let handleShow = async () => {
        try {
            let ListProvince = await getData("../province.json");
            let listDistrict = await getData(`./District/District${1}.json`)
            let listWards = await getData(`./District/District${2}.json`)

            if (isLoad.isCity === true) {
                // console.log(isLoad.value.getNameProvince[0].name);
                $('#wrapProvincecity').addClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').removeClass('intputCity_animation-color')
                $('#wrapProvincewards').removeClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameProvince === "object") {
                    $("#wrapItemProvincegird").empty().append(ListProvince.data.data.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"   id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')
                    $(`#wrapItemProvincegird #${isLoad.value.getNameProvince[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(ListProvince.data.data.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"   id="${item.id}">${item.name}</div>`)
                    );
                }

            }
            if (isLoad.isDistrict === true) {
                $('#wrapProvincecity').removeClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').addClass('intputCity_animation-color')
                $('#wrapProvincewards').removeClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameDistrict === "object") {
                    $("#wrapItemProvincegird").empty().append(listDistrict.data.District.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')
                    $(`#wrapItemProvincegird #${isLoad.value.getNameDistrict[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(listDistrict.data.District.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );

                }
            }
            if (isLoad.isWards === true) {
                $('#wrapProvincecity').removeClass('intputCity_animation-color')
                $('#wrapProvinceDistrict').removeClass('intputCity_animation-color')
                $('#wrapProvincewards').addClass('intputCity_animation-color')
                if (typeof isLoad.value.getNameWards === "object") {
                    $("#wrapItemProvincegird").empty().append(listWards.data.District.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"    id="${item.id}">${item.name}</div>`)
                    );
                    $(`#wrapItemProvincegird .item-text-Province`).removeClass('intputCity_animation-color')
                    $(`#wrapItemProvincegird #${isLoad.value.getNameDistrict[0].id}.item-text-Province`).addClass('intputCity_animation-color')
                }
                else {
                    $("#wrapItemProvincegird").empty().append(listWards.data.District.map(item => `<div class="item-text-Province col-12 p-4 text-capitalize"    id="${item.id}">${item.name}</div>`)
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
        let ListProvince = await getData("../province.json");
        let listDistrict = await getData(`./District/District${1}.json`)
        let listWards = await getData(`./District/District${2}.json`)
        let getNameProvince
        let getNameDistrict
        let getNameWards

        $('#wrapItemProvincegird').on('click', '.item-text-Province ', function () {
            let index = $('#wrapItemProvincegird .item-text-Province').index(this);
            if (isLoad.isCity === true) {

                getNameProvince = ListProvince.data.data.filter(item => {
                    if (item.id === index + 1) {

                        return item
                    }
                })

                $('#inputProvince').val(`${getNameProvince[0].name} ,`);
                $('#horizoneProvince').css("left", "33.333333333%")
                isLoad.value = { getNameProvince }
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = false
                isLoad.isCity = false;
                isLoad.isDistrict = true;
                isLoad.isWards = false
                handleShow();

            }
            else if (isLoad.isDistrict === true) {
                getNameDistrict = listDistrict.data.District.filter(item => {
                    if (item.id === index + 1) {
                        return item
                    }
                })
                $('#inputProvince').val('')
                $('#inputProvince').val(`${getNameProvince[0].name} ,${getNameDistrict[0].name}`);
                $("#horizoneProvince").css("left", `100%`);
                $("#horizoneProvince").css('transform', 'translate(-100%,0)');
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = true
                isLoad.isCity = false;
                isLoad.isDistrict = false;
                isLoad.isWards = true
                isLoad.value = { getNameProvince, getNameDistrict }
                handleShow();


            }
            else if (isLoad.isWards === true) {
                getNameWards = listWards.data.District.filter(item => {
                    if (item.id === index + 1) {
                        return item
                    }
                })
                $('#inputProvince').val('')
                $('#inputProvince').val(`${getNameProvince[0].name} ,${getNameDistrict[0].name} ,${getNameWards[0].name}`);
                isLoad.value = { getNameProvince, getNameDistrict, getNameWards }
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = true
                isLoad.isCity = false;
                isLoad.isDistrict = false;
                isLoad.isWards = false
                $("#horizoneProvince").css("left", `0%`)
                $("#horizoneProvince").css('transform', 'translate(0,0)');
                $("#dropdownaddress").hide();
            }
        });

    }
    let ActionDropDownAddress = async () => {
        $("#dropdownaddress").hide()
        $('#inputProvince').on("keyup click ", function () {
            $("#dropdownaddress").show()
            isLoad.isCity = true;
            isSuccess.isCity = true
            handleShow()
            $('#inputProvince').on('keyup', function (e) {
                let value = $(this).val().toLowerCase();
                $('.item-text-Province').each(function () {
                    if ($(this).html().toLowerCase().indexOf(value) != -1) {
                        $(this).show()
                    }
                    else {
                        $(this).hide();
                    }

                })

            })
            if ($(this).val() != "" && $(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`)) {
                $(this).attr("placeholder", `${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`).val("").blur();
                isLoad.isCity = true;
                isLoad.isWards = false;
                handleShow()
                $("#horizoneProvince").css("left", `0%`)
                $("#horizoneProvince").css('transform', 'translate(0,0)');
            }
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
    let SuccessForm = {
        count: 0,
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
        value: [],
    }
    let handleDetailAddress = () => {

    }
    handleGetvalidateform(modalAddress_InputName, itemSubName, modalAddress_InputPhone, itemSubPhone);
    // handleInputPhone(modalAddress_InputPhone, itemSubPhone);
    // auto_show();
    handle_modal_transportto();
    handle_slide_img();
    handleInputAddress(inputProvince)
    handleDetailAddress();
})

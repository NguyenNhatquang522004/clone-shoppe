
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
    let checkRexPhoneBasic = (Phone) => {
        let regex = /^0\d{9}$/;
        return regex.test(Phone);
    }
    let checkRexPhone = (Phone) => {
        let regex = /^\(\+84\) \d{3} \d{3} \d{3}$/;
        return regex.test(Phone);
    }
    CountInputAddress = {
        name: 0,
        isTrueName: false,
        phone: 0,
        isTruePhone: false,
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
    let handleGetvalidateform = (inputNameId, NameSubId, inputPhoneId, PhonesubId) => {
        $("#item-placeholders-name").hide();
        let handleGetvalidateName = () => {
            $('#modalAddress_InputName').blur(function () {
                if ($(this).val() === '' && CountInputAddress.name === 0) {
                    $(this).removeClass('input-red-placeholder input-red-boder');
                }
                if ($(this).val() === '' && CountInputAddress.name != 0) {
                    $(this).addClass('input-red-placeholder input-red-boder')
                    $('#item-placeholders-name').hide();
                    $('#itemSubName').hide();
                    $('#itemSubNameLength').hide();
                }
                if ($(this).val() != "" && checkRexName($(this).val()) != true && CountInputAddress.name != 0) {
                    $(this).removeClass('input-red-placeholder input-red-boder');
                    $(this).addClass(`input-red-placeholder input-red-boder input-red-placeholder-trans `);
                    $("#item-placeholders-name").show();
                    $("#item-placeholders-name").addClass('input-red-text')
                    if ($(this).val().length <= 1) {
                        $('#itemSubName').hide();
                        $('#itemSubNameLength').show();
                    }
                    else {
                        $('#itemSubNameLength').hide();
                        $('#itemSubName').show();
                    }
                }
                if ($(this).val() != "" && checkRexName($(this).val()) === true && CountInputAddress.name != 0) {
                    $(this).removeClass('input-red-placeholder input-red-boder');
                    $('#itemSubName').hide();
                    $('#itemSubNameLength').hide();
                    $("#item-placeholders-name").hide();
                    CountInputAddress.isTrueName = true;
                }

            })
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

            $('#modalAddress_InputPhone').blur(function () {
                if ($(this).val() === '' && CountInputAddress.phone === 0) {
                    $(this).removeClass('input-red-placeholder input-red-boder');
                }
                if ($(this).val() === '' && CountInputAddress.phone != 0) {
                    $(this).addClass('input-red-placeholder input-red-boder')
                    $('#item-placeholders-Phone').hide();
                    $('#itemSubPhone').hide();
                }
                if ($(this).val() != '' && CountInputAddress.phone != 0 && checkRexPhoneBasic($(this).val()) != true && checkRexPhone($(this).val()) != true) {
                    $(this).addClass('input-red-placeholder input-red-boder');
                    $('#item-placeholders-Phone').show();
                    $('#item-placeholders-Phone').addClass('input-red-text');
                    $('#itemSubPhone').show();

                }
                if ($(this).val() != '' && CountInputAddress.phone != 0 && checkRexPhoneBasic($(this).val()) === true || checkRexPhone($(this).val()) === true) {
                    $(this).removeClass('input-red-placeholder input-red-boder');
                    $('#item-placeholders-Phone').show();
                    $('#item-placeholders-Phone').removeClass('input-red-text');
                    $('#itemSubPhone').hide();

                }
                if ($(this).val() != '' && checkRexPhone($(this).val()) === false && checkRexPhoneBasic($(this).val()) === true && CountInputAddress.phone != 0) {
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

        let ListProvince = await getData("../province.json");
        let listDistrict = await getData(`./District/District${1}.json`)
        let listWards = await getData(`./District/District${2}.json`)
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
        let ListProvince = await getData("../province.json");
        let listDistrict = await getData(`./District/District${1}.json`)
        let listWards = await getData(`./District/District${2}.json`)
        let getNameProvince
        let getNameDistrict
        let getNameWards

        $('#wrapItemProvincegird').on('click', '.item-text-Province ', function () {
            let index = $(this).attr('id')
            if (isLoad.isCity === true) {
                getNameProvince = ListProvince.data.data.filter(item => {
                    if (item.id === Number(index)) {

                        return item
                    }
                })
                isLoad.Past = [...isLoad.Past, getNameProvince]
                isLoad.value = { ...isLoad.value, getNameProvince }
                $('#inputProvince').val('');
                $('#inputProvince').val(`${isLoad.value.getNameProvince[0].name}`);
                $('#inputProvince').attr("placeholder", `${isLoad.value.getNameProvince[0].name} `)
                $('#horizoneProvince').css("left", "33.333333333%")
                isSuccess.isCity = true;
                isSuccess.isDistrict = true;
                isSuccess.isWards = false
                isLoad.isCity = false;
                isLoad.isDistrict = true;
                isLoad.isWards = false
                $('#inputProvince').attr("placeholder", `${isLoad.value.getNameProvince[0].name} `)
                console.log();
                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                handleShow();

            }
            else if (isLoad.isDistrict === true) {
                getNameDistrict = listDistrict.data.District.filter(item => {
                    if (item.id === Number(index)) {
                        return item
                    }
                })
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

                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                handleShow();
            }
            else if (isLoad.isWards === true) {
                getNameWards = listWards.data.District.filter(item => {
                    if (item.id === Number(index)) {
                        return item
                    }
                })
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

                $("#horizoneProvince").css("left", `0%`)
                $("#horizoneProvince").css('transform', 'translate(0,0)');
                $("#dropdownaddress").hide();
                $("#itemSubProvince").removeClass('input-red-text')
                $("#itemSubProvince").show();
                handleInputAddressSpecifically();
            }
        });

    }
    let checkPastValue = () => {

    }
    let ActionDropDownAddress = async () => {
        $("#dropdownaddress").hide()
        $('#inputProvince').on("click ", function () {
            $("#itemSubProvince").hide();
            $(this).removeClass('input-red-boder  input-red-text input-red-placeholder')
            $("#dropdownaddress").show()

            if (isLoad.Past.length === 0 && typeof isLoad.value.getNameProvince === 'undefined' && typeof isLoad.value.getNameDistrict === "undefined" && typeof isLoad.value.getNameWards === 'undefined') {
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
            if (isLoad.Past.length > 3 && $(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === false && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === false && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                isLoad.isCity = false
                isLoad.isDistrict = true;
                isLoad.isWards = false;

                handleShow();
            }
            if (isLoad.Past.length > 3 && $(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === false && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                isLoad.isCity = false
                isLoad.isDistrict = false;
                isLoad.isWards = true;
                handleShow();
            }
            if (isLoad.Past.length > 3 && $(this).val().includes(`${isLoad.value.getNameProvince[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameDistrict[0].name}`) === true && $(this).val().includes(`${isLoad.value.getNameWards[0].name}`) === true && typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
                isLoad.isCity = true
                isLoad.isDistrict = false;
                isLoad.isWards = false;
                handleShow();
            }
            if ($(this).val() != '') {
                $(this).attr("placeholder", `${$(this).val()} `).val("").blur();
            }
        })
        $(document).on('click', function (event) {
            let $target = $(event.target);
            if (!$target.closest('#inputProvince').length && !$target.closest('#dropdownaddress').length) {
                if (isLoad.Past.length > 3) {
                    if ($('#inputProvince').val().includes(`${isLoad.value.getNameProvince[0].name} ,${isLoad.value.getNameDistrict[0].name} ,${isLoad.value.getNameWards[0].name}`) === false) {
                        $("#itemSubProvince").addClass("input-red-text")
                        $("#itemSubProvince").show();
                        $('#inputProvince').addClass('input-red-boder')
                    }
                }

                $('#inputProvince').val(`${$('#inputProvince').attr('placeholder')}`)
            }
        });
        $('#inputProvince').on('keyup', function (e) {
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
    CountInputAddress = {
        name: 0,
        isTrueName: false,
        phone: 0,
        isTruePhone: false,
        address: 0,
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
    }
    let handleInputAddressSpecifically = () => {

        if (typeof isLoad.value.getNameProvince === 'object' && typeof isLoad.value.getNameDistrict === "object" && typeof isLoad.value.getNameWards === 'object') {
            $('#inputaddressspecifically').prop("disabled", false)
        }
        else {
            $('#inputaddressspecifically').prop("disabled", true)
        }


    }
    handleGetvalidateform(modalAddress_InputName, itemSubName, modalAddress_InputPhone, itemSubPhone);
    // handleInputPhone(modalAddress_InputPhone, itemSubPhone);
    auto_show();
    handle_modal_transportto();
    handle_slide_img();
    handleInputAddress()
    handleInputAddressSpecifically();

})

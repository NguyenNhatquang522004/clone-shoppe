
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
            e.target.value = successValue;

        })
    }

    const getprovince = (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                let province = {};
                provincedata = await axios.get(`${url}`);

                if (provincedata) {
                    resolve(provincedata.data.data)
                }
                else {
                    province.mess = "not data ...."
                    alert(province.mess);
                }
            }
            catch (e) {
                console.log(e);
            }
        })
    };
    let loopProvince = async (inputProvince) => {

        let get = await getprovince("../province.json");
        get.map(item => {
            let newElementDiv = document.createElement('div')
            let newElementspan = document.createElement('span');
            // $(newElement).addClass('item-text-Province col-12 p-4 text-capitalize').attr("id", `${item.id}`).html(`${item.name}`).appendTo("#wrapItemProvincegird");
            $(newElementspan).addClass('itemId d-none').html(`${item.id}`).appendTo("#itemtextProvince")
        })

    }
    handleGetvalidateform(modalAddress_InputName, itemSubName, modalAddress_InputPhone, itemSubPhone);
    handleInputPhone(modalAddress_InputPhone, itemSubPhone);
    auto_show();
    handle_modal_transportto();
    handle_slide_img();
    // GetApiProvince();

    getprovince("../province.json");
})

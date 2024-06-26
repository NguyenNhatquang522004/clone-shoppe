const handleAnimationBtnNextPrev_Carousel_Evaluate = (btnCarouselNext, btnCarouselPrev, carousel, carouselItem, itemImg, grandParentEvaluateUser) => {
    let positionNextAndPrev = undefined
    let lengthItem = undefined
    btnCarouselNext.click(function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        lengthItem = selectPositioncurrent.find(carouselItem).length
        positionNextAndPrev = selectPositioncurrent
        selectPositioncurrent.find(carousel).carousel(`next`)
    })
    btnCarouselPrev.click(function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        lengthItem = selectPositioncurrent.find(carouselItem).length
        positionNextAndPrev = selectPositioncurrent
        selectPositioncurrent.find(carousel).carousel(`prev`)
    })
    carousel.on(`slide.bs.carousel`, function (event) {
        if (positionNextAndPrev != undefined) {
            if (positionNextAndPrev.find(carouselItem).eq([event.to]).find(itemImg).hasClass("d-none") === true) {
                positionNextAndPrev.find(btnCarouselNext).css({
                    left: 100 + `%`
                })
                positionNextAndPrev.find(btnCarouselNext).css('transform', `translate(-50%, -50%)`);
            }
            else {
                positionNextAndPrev.find(btnCarouselNext).css({
                    left: 80 + `%`
                })
                positionNextAndPrev.find(btnCarouselNext).css('transform', `translate(-100%, -50%)`);
            }
        }
    })
    carousel.on(`slid.bs.carousel`, function (event) {
        if (lengthItem != undefined) {
            if (event.to === lengthItem - 1) {
                positionNextAndPrev.find(btnCarouselNext).addClass(`d-none`)
            }
            else {
                positionNextAndPrev.find(btnCarouselNext).removeClass(`d-none`)
            }
            if (event.to === 0) {
                positionNextAndPrev.find(btnCarouselPrev).addClass(`d-none`)
            }
            else {
                positionNextAndPrev.find(btnCarouselPrev).removeClass(`d-none`)
            }
        }
    })

}
const initCarousel = (btnCarouselNext, btnCarouselPrev, carouselItem, itemImg, index, lengthCarouselItem) => {
    if (carouselItem.find(itemImg).hasClass("d-none") === true) {
        btnCarouselNext.css({
            left: 100 + `%`
        })
        btnCarouselNext.css('transform', `translate(-50%, -50%)`);
    }
    else {
        btnCarouselNext.css({
            left: 80 + `%`
        })
        btnCarouselNext.css('transform', `translate(-100%, -50%)`);
    }
    if (lengthCarouselItem - 1 === 0) {
        btnCarouselNext.removeClass(`d-none`)
        btnCarouselPrev.removeClass(`d-none`)
    }
    if (index === lengthCarouselItem - 1) {
        btnCarouselNext.addClass(`d-none`)
    }
    else {
        btnCarouselNext.removeClass(`d-none`)
    }
    btnCarouselPrev.addClass(`d-none`)
    if (index === 0) {
        btnCarouselPrev.addClass(`d-none`)
    }
    else {
        btnCarouselPrev.removeClass(`d-none`)
    }
}
const handleBtnNextPrev_Carousel_Evaluate = (carouselItem, btnCarousel, grandParentEvaluateUser, item) => {
    carouselItem.find(item).mouseover(function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        selectPositioncurrent.find(btnCarousel).css({
            height: 5.5 + 'rem',
            width: 5.5 + 'rem',
            opacity: 1,
            color: `#000000`
        })
        selectPositioncurrent.find(btnCarousel).css(`font-size`, 2.5 + 'rem')
    })
    carouselItem.find(item).mouseleave(function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        selectPositioncurrent.find(btnCarousel).css({
            height: 3.5 + 'rem',
            width: 3.5 + 'rem',
            opacity: 1,
            color: `#000000`
        })
        selectPositioncurrent.find(btnCarousel).css(`font-size`, 2 + 'rem')
    })
    btnCarousel.mouseover(function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        selectPositioncurrent.find(btnCarousel).css({
            height: 5.5 + 'rem',
            width: 5.5 + 'rem',
            opacity: 1,
            color: `#000000`
        })
        selectPositioncurrent.find(btnCarousel).css(`font-size`, 2.5 + 'rem')
    })

}
const handleShowCarousel_Evaluate = (itemWarpImgSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, itemImg, carousel, grandParentEvaluateUser) => {
    itemWarpImgSubEvaluate.on(`click`, function () {
        const selectPositioncurrent = $(this).closest(grandParentEvaluateUser)
        const index = selectPositioncurrent.find(itemWarpImgSubEvaluate).index(this)
        const lengthCarouselItem = selectPositioncurrent.find(carouselItem).length
        if (selectPositioncurrent.find($(this)).hasClass(`outLine-img-sub-evaluate`) === false) {
            selectPositioncurrent.find(itemWarpImgSubEvaluate).removeClass(`outLine-img-sub-evaluate`)
            selectPositioncurrent.find($(this)).addClass("outLine-img-sub-evaluate")
            selectPositioncurrent.find(carousel).removeClass(`d-none`)
            selectPositioncurrent.find(carouselItem).removeClass(`active`)
            selectPositioncurrent.find(carouselItem).eq(index).addClass(`active`)
            initCarousel($(selectPositioncurrent).find(btnCarouselNext), $(selectPositioncurrent).find(btnCarouselPrev), selectPositioncurrent.find(carouselItem).eq(index), itemImg, index, lengthCarouselItem)
        }
        else {
            selectPositioncurrent.find($(this)).removeClass("outLine-img-sub-evaluate")
            selectPositioncurrent.find(carousel).addClass(`d-none`)
        }
    })
}
const init = (itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser) => {
    grandParentEvaluateUser.map((index, item) => {
        $(item).find(carouselItem).removeClass(`active`)
        $(item).find(itemWarpImgSubEvaluate).eq(0).removeClass("mx-3")
        if ($(item).find(itemWarpImgSubEvaluate).eq(0).find(videoSrc).text().trim() != '') {
            const video = $('<video>', {
                src: $(item).find(itemWarpImgSubEvaluate).eq(0).find(videoSrc).text().trim()
            })[0];
            video.addEventListener('loadedmetadata', function () {
                const duration = Math.round(video.duration);
                $(item).find(displayTimeDuration).text(`0:${duration}`)
            });
        }
        else {
            $(item).find(displayTimeDuration).addClass('d-none')
        }
    })
}
const handleShow_Carousel = async () => {
    const grandParentEvaluateUser = $(`.EvaluateUserClass`)
    const parentCarouselItem = $(`.CarouselEvaluateVideoImgUserInnerClass`)
    const videoSrc = $(`.videoSrc`)
    const itemImg = (".item-img")
    const itemWarpImgSubEvaluate = $('.WrapItemImgSubEvaluate')
    const a = false
    parentCarouselItem.empty()
    await parentCarouselItem.map((index, item) => {
        $(item).append($(item).closest(grandParentEvaluateUser).find(itemWarpImgSubEvaluate).map((index1, item1) => {
            return `
            <div
 class="carousel-item ${index1 === 0 ? `active` : ` `} CarouselItemEvaluateVideoImgUserClass">
 <video width="100%" height="100%" autoplay="" loop="" muted=""
class="item-video item ${$(item1).find(videoSrc).text().trim() === '' && index1 === 0 ? `d-none` : ``} ${index1 > 0 ? `d-none` : ``}">
<source
src="${$(item1).find(videoSrc).text().trim()}"
type="video/mp4">
 </video>
<img src="${$(item1).find(itemImg).attr(`src`)}"
 alt="" class="item img-fluid item-img ${$(item1).find(videoSrc).text().trim() != '' && index1 === 0 ? `d-none` : ``} ${index1 > 0 ? `` : ``}">
 </div>
           `
        }).get().join(''))
    })
    return true
}
const handleClick_ConsensusQuantity = (itemConsensusQuantity, parentItemConsensusQuantity) => {
    parentItemConsensusQuantity.click(function () {
        const index = parentItemConsensusQuantity.index(this)
        if ($(this).hasClass(`Consensus_Quantity_color`) === true) {
            $(this).removeClass(`Consensus_Quantity_color`)
            $(itemConsensusQuantity[index]).text(`${Number($(itemConsensusQuantity[index]).text().trim()) - 1}`)
        }
        else {
            $(this).addClass(`Consensus_Quantity_color`)
            $(itemConsensusQuantity[index]).text(`${Number($(itemConsensusQuantity[index]).text().trim()) + 1}`)
        }
    })
}
const handleInit_Pagination = (itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber) => {
    const postionDestination = $(itemEvaluateUser[0]).position()
    btnPaginationNext.click(function () {
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 10);
    })
    btnPaginationPrev.click(function () {
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 10);
    })
    btnPaginationNumber.click(function () {
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 10);
    })

}
export const handleAllEvaluateUser = async () => {
    let x = await handleShow_Carousel()
    const btnCarouselNext = $('.CarouselControlEvaluateVideoImgUserNextClass')
    const btnCarouselPrev = $('.CarouselControlEvaluateVideoImgUserPrevClass')
    const btnCarousel = $('.CarouselControlEvaluateVideoImgUserClass')
    const carousel = $('.CarouselEvaluateVideoImgUserClass')
    const carouselItem = $(`.CarouselItemEvaluateVideoImgUserClass`)
    const item = (".item")
    const itemVideo = (".item-video")
    const itemImg = (".item-img")
    const itemWarpImgSubEvaluate = $('.WrapItemImgSubEvaluate')
    const srcSubEvaluate = $(`.src`)
    const videoSrc = $(`.videoSrc`)
    const displayTimeDuration = $('.TimeDurationClass')
    const parentDisplayTimeDuration = $('.WrapTimeDurationClass')
    const parentCarouselItem = $(`.CarouselEvaluateVideoImgUserInnerClass`)
    const itemConsensusQuantity = $(`.ItemConsensusQuantityClass`)
    const parentItemConsensusQuantity = $(`.WarpItemConsensusManyUserClass`)
    const itemEvaluateUser = $('.EvaluateUserClass')
    const btnPaginationPrev = $(`#BtnControlPaginationPrev`)
    const btnPaginationNext = $(`#BtnControlPaginationNext`)
    const btnPaginationNumber = $(`.ItemNumberPaginationSelect`)
    const grandParentEvaluateUser = $(`.EvaluateUserClass`)
    handleInit_Pagination(itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber);
    handleClick_ConsensusQuantity(itemConsensusQuantity, parentItemConsensusQuantity);
    init(itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser)
    handleBtnNextPrev_Carousel_Evaluate(carouselItem, btnCarousel, grandParentEvaluateUser, item)
    handleAnimationBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, itemImg, grandParentEvaluateUser);
    handleShowCarousel_Evaluate(itemWarpImgSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, itemImg, carousel, grandParentEvaluateUser);
}
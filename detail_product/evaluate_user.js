
const handleAnimationBtnNextPrev_Carousel_Evaluate = (btnCarouselNext, btnCarouselPrev, carousel, carouselItem, item, itemVideo, itemImg) => {
    carousel.on(`slide.bs.carousel`, function (event) {
        const carouselItemLength = carouselItem.length

        if ($(carouselItem[event.to]).find(itemImg).hasClass("d-none") === true) {
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
    })
    carousel.on(`slid.bs.carousel`, function (event) {
        const carouselItemLength = carouselItem.length
        if (event.to === carouselItemLength - 1) {
            btnCarouselNext.addClass(`d-none`)
        }
        else {
            btnCarouselNext.removeClass(`d-none`)
        }
        if (event.to === 0) {
            btnCarouselPrev.addClass(`d-none`)
        }
        else {
            btnCarouselPrev.removeClass(`d-none`)
        }
    })
}
const initCarousel = (btnCarouselNext, btnCarouselPrev, carouselItem, item, itemVideo, itemImg, index) => {
    const carouselItemLength = carouselItem.length
    if ($(carouselItem[index]).find(itemImg).hasClass("d-none") === true) {
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
    if (carouselItemLength - 1 === 0) {
        btnCarouselNext.removeClass(`d-none`)
        btnCarouselPrev.removeClass(`d-none`)
    }
    if (index === carouselItemLength - 1) {
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
const handleBtnNextPrev_Carousel_Evaluate = (btnCarouselNext, btnCarouselPrev, carousel, carouselItem, item, itemVideo, itemImg, btnCarousel) => {
    carouselItem.find(item).mouseover(function () {
        btnCarousel.css({
            height: 5.5 + 'rem',
            width: 5.5 + 'rem',
            opacity: 1,
        })
        btnCarousel.css(`font-size`, 2.5 + 'rem')
    })
    carouselItem.find(item).mouseleave(function () {
        btnCarousel.css({
            height: 3.5 + 'rem',
            width: 3.5 + 'rem',
            opacity: 1,
        })
        btnCarousel.css(`font-size`, 2 + 'rem')
    })
    btnCarousel.mouseover(function () {
        btnCarousel.css({
            height: 5.5 + 'rem',
            width: 5.5 + 'rem',
            opacity: 1,
        })
        btnCarousel.css(`font-size`, 2.5 + 'rem')
    })

}
const handleShowCarousel_Evaluate = (itemWarpImgSubEvaluate, srcSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, item, itemVideo, itemImg, carousel) => {

    itemWarpImgSubEvaluate.on(`click`, carouselItem, function () {
        const index = itemWarpImgSubEvaluate.index(this)

        if ($(this).hasClass(`outLine-img-sub-evaluate`) === false) {
            itemWarpImgSubEvaluate.removeClass(`outLine-img-sub-evaluate`)
            $(this).addClass("outLine-img-sub-evaluate")
            carousel.removeClass(`d-none`)
            carouselItem.removeClass(`active`)
            $(carouselItem.get(index)).addClass('active');

            initCarousel(btnCarouselNext, btnCarouselPrev, carouselItem, item, itemVideo, itemImg, index)
        }
        else {
            $(this).removeClass("outLine-img-sub-evaluate")
            carousel.addClass(`d-none`)
        }
    })
}
const init = (itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, parentDisplayTimeDuration, carouselItem) => {
    carouselItem.removeClass(`active`)
    $(itemWarpImgSubEvaluate[0]).removeClass("mx-3")
    if (videoSrc.text().trim() != '') {
        const video = $('<video>', {
            src: videoSrc.text().trim()
        })[0];
        video.addEventListener('loadedmetadata', function () {
            const duration = Math.round(video.duration);
            displayTimeDuration.text(`0:${duration}`)
        });
    }
    else {
        parentDisplayTimeDuration.addClass('d-none')
    }

}
const handleShow_Carousel = async () => {
    const parentCarouselItem = $(`#CarouselEvaluateVideoImgUserInner`)
    const videoSrc = $(`#videoSrc`)
    const itemImg = (".item-img")
    const itemWarpImgSubEvaluate = $('.WrapItemImgSubEvaluate')
    const a = false
    const carouselItem = $(`#CarouselEvaluateVideoImgUser`).find(`.carousel-item-evaluate-video-img-user`)
    await parentCarouselItem.empty().append(itemWarpImgSubEvaluate.map((index, item) => {
        return `
         <div
                                                        class="carousel-item ${index === 0 ? `active` : ` `} carousel-item-evaluate-video-img-user">
                                                        <video width="100%" height="100%" autoplay="" loop="" muted=""
                                                            class="item-video item ${$(item).find(videoSrc).text().trim() === '' && index === 0 ? `d-none` : ``} ${index > 0 ? `d-none` : ``}">
                                                            <source
                                                                src="${$(item).find(videoSrc).text().trim()}"
                                                                type="video/mp4">
                                                        </video>
                                                        <img src="${$(item).find(itemImg).attr(`src`)}"
                                                            alt="" class="item img-fluid item-img ${$(item).find(videoSrc).text().trim() != '' && index === 0 ? `d-none` : ``} ${index > 0 ? `` : ``}">
                                                    </div>
        `

    }).get().join(''))
    return true
}
const handleClick_ConsensusQuantity = (itemConsensusQuantity, parentItemConsensusQuantity) => {
    parentItemConsensusQuantity.click(function () {
        if ($(this).hasClass(`Consensus_Quantity_color`) === true) {
            $(this).removeClass(`Consensus_Quantity_color`)
            itemConsensusQuantity.text(`${Number(itemConsensusQuantity.text().trim()) - 1}`)
        }
        else {
            $(this).addClass(`Consensus_Quantity_color`)
            itemConsensusQuantity.text(`${Number(itemConsensusQuantity.text().trim()) + 1}`)
        }
    })
}
const handleInit_Pagination = (itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber) => {
    const postionDestination = $(itemEvaluateUser[0]).position()

    console.log(postionDestination.top);
    btnPaginationNext.click(function () {
        const a = window.pageYOffset
        console.log(a);
        console.log(Number(a) - Number(postionDestination.top));
        window.scrollTo({ top: 20 , behavior: 'smooth' });
    })
    btnPaginationPrev.click(function () {

    })
    btnPaginationNumber.click(function () {

    })

}
export const handleAllEvaluateUser = async () => {
    let x = await handleShow_Carousel()
    const btnCarouselNext = $('#CarouselControlEvaluateVideoImgUserNext')
    const btnCarouselPrev = $('#CarouselControlEvaluateVideoImgUserPrev')
    const btnCarousel = $('.CarouselControlEvaluateVideoImgUserPrevClass')
    const carousel = $('#CarouselEvaluateVideoImgUser')
    const carouselItem = $(`#CarouselEvaluateVideoImgUser`).find(`.carousel-item-evaluate-video-img-user`)
    const item = (".item")
    const itemVideo = (".item-video")
    const itemImg = (".item-img")
    const itemWarpImgSubEvaluate = $('.WrapItemImgSubEvaluate')
    const srcSubEvaluate = $(`.src`)
    const videoSrc = $(`#videoSrc`)
    const displayTimeDuration = $('#TimeDuration')
    const parentDisplayTimeDuration = $('#WrapTimeDuration')
    const parentCarouselItem = $(`#CarouselEvaluateVideoImgUserInner`)
    const itemConsensusQuantity = $(`#ItemConsensusQuantity`)
    const parentItemConsensusQuantity = $(`#WarpItemConsensusManyUser`)
    const itemEvaluateUser = $('.EvaluateUserClass')
    const btnPaginationPrev = $(`#BtnControlPaginationPrev`)
    const btnPaginationNext = $(`#BtnControlPaginationNext`)
    const btnPaginationNumber = $(`.ItemNumberPaginationSelect`)
    handleInit_Pagination(itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber);
    handleClick_ConsensusQuantity(itemConsensusQuantity, parentItemConsensusQuantity);
    init(itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, parentDisplayTimeDuration, carouselItem)
    handleBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, item, itemVideo, itemImg, btnCarousel)
    handleAnimationBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, item, itemVideo, itemImg);
    handleShowCarousel_Evaluate(itemWarpImgSubEvaluate, srcSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, item, itemVideo, itemImg, carousel);
}
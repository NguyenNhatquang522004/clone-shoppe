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
const init = (itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser, btnPaginationNumber) => {
    const lengthPanigation = btnPaginationNumber.length
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
    $(btnPaginationNumber[0]).addClass('Animation-click-back-color')
    $(btnPaginationNumber[lengthPanigation - 1]).text(`...`)
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
const handleAnimationDirect_Pagination = (itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber, parentNumberPagination) => {
    const postionDestination = $(itemEvaluateUser[0]).position()
    let current = 1
    const limitPage = 9
    btnPaginationNext.click(function () {
        const limitLoadItemZero = 6
        const limitLoadItemFirst = 8
        const limitLoadItemSec = 9
        const limitLoadItemlimitPage = 8
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 1);
        if (current != limitPage) {
            ++current
        }
        const distanceLimitPage = limitPage - current
        if (current <= 5) {
            let valueIncreaseLoadFirst = 0
            parentNumberPagination.empty()
            if (current === 5) {
                for (let IndexFirst = 0; IndexFirst < limitLoadItemFirst; IndexFirst++) {
                    if (IndexFirst < 7) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${valueIncreaseLoadFirst + 1}
                                            </div>
                    `
                        )
                        ++valueIncreaseLoadFirst
                    }
                    else {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                }
            }
            if (current < 5) {
                let valueIncreaseLoadZero = 0
                parentNumberPagination.empty()
                for (let IndexZero = 0; IndexZero < limitLoadItemZero; IndexZero++) {
                    if (IndexZero < 5) {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ${valueIncreaseLoadZero + 1}
                                                </div>
                        `
                        )
                        ++valueIncreaseLoadZero
                    }
                    else {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ...
                                                </div>
                        `
                        )
                    }
                }

            }

        }
        if (current >= 6 && distanceLimitPage > 2) {
            let cloneCurrent = current
            let valueIncreaseFirstPart = 0
            let valueReduceMiddlePartFirst = 2
            let saveValueReduceMiddlePartFirst = 0
            let valueIncreaseMiddlePartSecond = 1
            let saveValueIncreaseMiddlePartSecond = 0
            parentNumberPagination.empty()
            for (let indexSec = 0; indexSec < limitLoadItemSec; indexSec++) {
                if (indexSec < 5) {
                    if (indexSec <= 1) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseFirstPart += 1}
                                        </div>
                `
                        )
                    }
                    if (indexSec === 2) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                    if (indexSec >= 3 && indexSec <= 4) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${saveValueReduceMiddlePartFirst = cloneCurrent - valueReduceMiddlePartFirst}
                                            </div>
                    `
                        )
                        --valueReduceMiddlePartFirst
                    }
                }
                if (indexSec === 5) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${cloneCurrent}
                                    </div>
            `
                    )
                }
                if (indexSec > 5) {
                    if (indexSec >= 6 && indexSec <= 7) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${saveValueIncreaseMiddlePartSecond = cloneCurrent + valueIncreaseMiddlePartSecond}
                                        </div>
                `
                        )
                        ++valueIncreaseMiddlePartSecond
                    }
                    if (indexSec === 8) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                        )
                    }
                }
            }

        }
        if (current >= 6 && distanceLimitPage <= 2) {
            let CloneLimitPage = limitPage
            let cloneCurrentLimitPage = current
            let saveValueLimitPage = 0
            let valueIncreaseLimitPage = CloneLimitPage - 4;

            let valueIncreaseLimitPageFirstPart = 1
            parentNumberPagination.empty()
            for (let indexLimitPage = 0; indexLimitPage < limitLoadItemlimitPage; indexLimitPage++) {
                if (indexLimitPage <= 1) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${valueIncreaseLimitPageFirstPart}
                                    </div>
            `
                    )
                    ++valueIncreaseLimitPageFirstPart
                }
                if (indexLimitPage === 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                    )
                }
                if (indexLimitPage > 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseLimitPage}
                                        </div>
                `
                    )
                    ++valueIncreaseLimitPage
                }

            }
        }
        $(`.ItemNumberPaginationSelect`).map((index, item) => {
            if ($(item).text().trim() === `${current}` && $(item).text().trim() != '...') {
                $(`.ItemNumberPaginationSelect`).removeClass(`Animation-click-back-color`)
                $(item).addClass(`Animation-click-back-color`)
            }
        })

    })
    btnPaginationPrev.click(function () {
        const limitLoadItemZero = 6
        const limitLoadItemFirst = 8
        const limitLoadItemSec = 9
        const limitLoadItemlimitPage = 8
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 1);
        --current
        if (current === 0) {
            current = 1
        }
        const distanceLimitPage = limitPage - current
        if (current <= 5) {
            let valueIncreaseLoadFirst = 0
            parentNumberPagination.empty()
            if (current === 5) {
                for (let IndexFirst = 0; IndexFirst < limitLoadItemFirst; IndexFirst++) {
                    if (IndexFirst < 7) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${valueIncreaseLoadFirst + 1}
                                            </div>
                    `
                        )
                        ++valueIncreaseLoadFirst
                    }
                    else {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                }
            }
            if (current < 5) {
                let valueIncreaseLoadZero = 0
                parentNumberPagination.empty()
                for (let IndexZero = 0; IndexZero < limitLoadItemZero; IndexZero++) {
                    if (IndexZero < 5) {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ${valueIncreaseLoadZero + 1}
                                                </div>
                        `
                        )
                        ++valueIncreaseLoadZero
                    }
                    else {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ...
                                                </div>
                        `
                        )
                    }
                }

            }

        }
        if (current >= 6 && distanceLimitPage > 2) {
            let cloneCurrent = current
            let valueIncreaseFirstPart = 0
            let valueReduceMiddlePartFirst = 2
            let saveValueReduceMiddlePartFirst = 0
            let valueIncreaseMiddlePartSecond = 1
            let saveValueIncreaseMiddlePartSecond = 0
            parentNumberPagination.empty()
            for (let indexSec = 0; indexSec < limitLoadItemSec; indexSec++) {
                if (indexSec < 5) {
                    if (indexSec <= 1) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseFirstPart += 1}
                                        </div>
                `
                        )
                    }
                    if (indexSec === 2) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                    if (indexSec >= 3 && indexSec <= 4) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${saveValueReduceMiddlePartFirst = cloneCurrent - valueReduceMiddlePartFirst}
                                            </div>
                    `
                        )
                        --valueReduceMiddlePartFirst
                    }
                }
                if (indexSec === 5) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${cloneCurrent}
                                    </div>
            `
                    )
                }
                if (indexSec > 5) {
                    if (indexSec >= 6 && indexSec <= 7) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${saveValueIncreaseMiddlePartSecond = cloneCurrent + valueIncreaseMiddlePartSecond}
                                        </div>
                `
                        )
                        ++valueIncreaseMiddlePartSecond
                    }
                    if (indexSec === 8) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                        )
                    }
                }
            }

        }
        if (current >= 6 && distanceLimitPage <= 2) {
            let CloneLimitPage = limitPage
            let cloneCurrentLimitPage = current
            let saveValueLimitPage = 0
            let valueIncreaseLimitPage = CloneLimitPage - 4;

            let valueIncreaseLimitPageFirstPart = 1
            parentNumberPagination.empty()
            for (let indexLimitPage = 0; indexLimitPage < limitLoadItemlimitPage; indexLimitPage++) {
                if (indexLimitPage <= 1) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${valueIncreaseLimitPageFirstPart}
                                    </div>
            `
                    )
                    ++valueIncreaseLimitPageFirstPart
                }
                if (indexLimitPage === 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                    )
                }
                if (indexLimitPage > 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseLimitPage}
                                        </div>
                `
                    )
                    ++valueIncreaseLimitPage
                }

            }
        }
        $(`.ItemNumberPaginationSelect`).map((index, item) => {
            if ($(item).text().trim() === `${current}` && $(item).text().trim() != '...') {
                $(`.ItemNumberPaginationSelect`).removeClass(`Animation-click-back-color`)
                $(item).addClass(`Animation-click-back-color`)
            }
        })

    })
    $(document).on('click', '.ItemNumberPaginationSelect', function () {
        const limitLoadItemZero = 6
        const limitLoadItemFirst = 8
        const limitLoadItemSec = 9
        const limitLoadItemlimitPage = 8
        const position = $(`.ItemNumberPaginationSelect`).index(this)
        $('html, body').animate({
            scrollTop: postionDestination.top - 100
        }, 1);
        if ($(this).text().trim() != '...') {
            current = Number($(this).text().trim())
        }
        const distanceLimitPage = limitPage - current
        if (current <= 5) {
            let valueIncreaseLoadFirst = 0
            parentNumberPagination.empty()
            if (current === 5) {
                for (let IndexFirst = 0; IndexFirst < limitLoadItemFirst; IndexFirst++) {
                    if (IndexFirst < 7) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${valueIncreaseLoadFirst + 1}
                                            </div>
                    `
                        )
                        ++valueIncreaseLoadFirst
                    }
                    else {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                }
            }
            if (current < 5) {
                let valueIncreaseLoadZero = 0
                parentNumberPagination.empty()
                for (let IndexZero = 0; IndexZero < limitLoadItemZero; IndexZero++) {
                    if (IndexZero < 5) {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ${valueIncreaseLoadZero + 1}
                                                </div>
                        `
                        )
                        ++valueIncreaseLoadZero
                    }
                    else {
                        parentNumberPagination.append(
                            `
                         <div
                                                    class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                    ...
                                                </div>
                        `
                        )
                    }
                }

            }

        }
        if (current >= 6 && distanceLimitPage > 2) {
            let cloneCurrent = current
            let valueIncreaseFirstPart = 0
            let valueReduceMiddlePartFirst = 2
            let saveValueReduceMiddlePartFirst = 0
            let valueIncreaseMiddlePartSecond = 1
            let saveValueIncreaseMiddlePartSecond = 0
            parentNumberPagination.empty()
            for (let indexSec = 0; indexSec < limitLoadItemSec; indexSec++) {
                if (indexSec < 5) {
                    if (indexSec <= 1) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseFirstPart += 1}
                                        </div>
                `
                        )
                    }
                    if (indexSec === 2) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ...
                                            </div>
                    `
                        )
                    }
                    if (indexSec >= 3 && indexSec <= 4) {
                        parentNumberPagination.append(
                            `
                     <div
                                                class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                                ${saveValueReduceMiddlePartFirst = cloneCurrent - valueReduceMiddlePartFirst}
                                            </div>
                    `
                        )
                        --valueReduceMiddlePartFirst
                    }
                }
                if (indexSec === 5) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${cloneCurrent}
                                    </div>
            `
                    )
                }
                if (indexSec > 5) {
                    if (indexSec >= 6 && indexSec <= 7) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${saveValueIncreaseMiddlePartSecond = cloneCurrent + valueIncreaseMiddlePartSecond}
                                        </div>
                `
                        )
                        ++valueIncreaseMiddlePartSecond
                    }
                    if (indexSec === 8) {
                        parentNumberPagination.append(
                            `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                        )
                    }
                }
            }

        }
        if (current >= 6 && distanceLimitPage <= 2) {
            let CloneLimitPage = limitPage
            let cloneCurrentLimitPage = current
            let saveValueLimitPage = 0
            let valueIncreaseLimitPage = CloneLimitPage - 4;

            let valueIncreaseLimitPageFirstPart = 1
            parentNumberPagination.empty()
            for (let indexLimitPage = 0; indexLimitPage < limitLoadItemlimitPage; indexLimitPage++) {
                if (indexLimitPage <= 1) {
                    parentNumberPagination.append(
                        `
             <div
                                        class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                        ${valueIncreaseLimitPageFirstPart}
                                    </div>
            `
                    )
                    ++valueIncreaseLimitPageFirstPart
                }
                if (indexLimitPage === 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ...
                                        </div>
                `
                    )
                }
                if (indexLimitPage > 2) {
                    parentNumberPagination.append(
                        `
                 <div
                                            class="item-number-Pagination mx-3 d-flex align-items-center justify-content-center ItemNumberPaginationSelect">
                                            ${valueIncreaseLimitPage}
                                        </div>
                `
                    )
                    ++valueIncreaseLimitPage
                }

            }
        }
        $(`.ItemNumberPaginationSelect`).map((index, item) => {
            if ($(item).text().trim() === `${current}` && $(item).text().trim() != '...') {
                $(`.ItemNumberPaginationSelect`).removeClass(`Animation-click-back-color`)
                $(item).addClass(`Animation-click-back-color`)
            }
        })
    })

}
const handleShowPage_Pagination = () => {

}
const currentPage = {
    position: 1,
}
export const handleAllEvaluateUser = async () => {
    let x = await handleShow_Carousel()
    const btnCarouselNext = $('.CarouselControlEvaluateVideoImgUserNextClass')
    const btnCarouselPrev = $('.CarouselControlEvaluateVideoImgUserPrevClass')
    const btnCarousel = $('.CarouselControlEvaluateVideoImgUserClass')
    const carousel = $('.CarouselEvaluateVideoImgUserClass')
    const carouselItem = $(`.CarouselItemEvaluateVideoImgUserClass`)
    const item = (".item")
    const itemImg = (".item-img")
    const itemWarpImgSubEvaluate = $('.WrapItemImgSubEvaluate')
    const videoSrc = $(`.videoSrc`)
    const displayTimeDuration = $('.TimeDurationClass')
    const itemConsensusQuantity = $(`.ItemConsensusQuantityClass`)
    const parentItemConsensusQuantity = $(`.WarpItemConsensusManyUserClass`)
    const itemEvaluateUser = $('.EvaluateUserClass')
    const btnPaginationPrev = $(`#BtnControlPaginationPrev`)
    const btnPaginationNext = $(`#BtnControlPaginationNext`)
    const btnPaginationNumber = $(`.ItemNumberPaginationSelect`)
    const grandParentEvaluateUser = $(`.EvaluateUserClass`)
    const parentNumberPagination = $(`#WrapItemNumberPaginationGrid`)
    handleShowPage_Pagination()
    handleAnimationDirect_Pagination(itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber, parentNumberPagination);
    handleClick_ConsensusQuantity(itemConsensusQuantity, parentItemConsensusQuantity);
    init(itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser, btnPaginationNumber)
    handleBtnNextPrev_Carousel_Evaluate(carouselItem, btnCarousel, grandParentEvaluateUser, item)
    handleAnimationBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, itemImg, grandParentEvaluateUser);
    handleShowCarousel_Evaluate(itemWarpImgSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, itemImg, carousel, grandParentEvaluateUser);
}
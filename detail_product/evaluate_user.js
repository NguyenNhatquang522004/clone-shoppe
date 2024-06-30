import * as fetch from "./fetchdata.js"

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
    btnPaginationNext.click(async function () {
        var data = {
            City: 'Moscow',
            Age: 25
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:5500/detail_product/Evaluate.json', true); // Thay thế bằng URL mock API của bạn
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                } else {

                }
            }
        };

        xhr.send(JSON.stringify(data));
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
        await handleShowPage_Pagination(current)
        handleReIncreate()
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
    btnPaginationPrev.click(async function () {
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
        await handleShowPage_Pagination(current)
        handleReIncreate()
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
    $(document).on('click', '.ItemNumberPaginationSelect', async function () {
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
            await handleShowPage_Pagination(current)
            handleReIncreate()
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
const handleShowPage_Pagination = async (index) => {
    const parentItemFilter = $(`#EvaluateProductsFilter`)
    const itemEvaluate = $(`.EvaluateUserClass`)
    await itemEvaluate.remove()
    await parentItemFilter.after(`
     <div class="evaluate-user col-12 pe-0 ps-5 pb-4 border-bottom EvaluateUserClass mb-4">
                        <div class="evaluate-user-grid row mx-0 d-flex align-items-start">
                            <div
                                class="evaluate-user-left col-1  d-flex align-items-center justify-content-center pe-0">
                                <div class="wrap-avatar-user w-75 ">
                                    <img src="https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lluccqpwh71bb4_tn"
                                        alt="" class="item-img img-fluid">
                                </div>
                            </div>
                            <div class="evaluate-user-right col-11 ps-0 EvaluateUserRightClass ">
                                <div class="evaluate-user-right-grid row ">
                                    <span class="item-name-user col-12 mb-2">${index}</span>
                                    <div class="wrap-item-evaluate-user col-12 mb-2">
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                    </div>
                                    <div class="wrap-item-date-evaluate-user col-12 mb-4">
                                        <div class="wrap-item-date-evaluate-user-grid d-flex">
                                            <span class="item-date">2023-05-08 </span>
                                            <span class="item-time mx-2">12:06</span>
                                            <div class="vertical "></div>
                                            <span class="item-type-user mx-2">Phân loại hàng: MK37 Đen lì,Mắt 0độ</span>
                                        </div>
                                    </div>
                                    <div class="wrap-item-products-user col-12 mb-4">
                                        <div class="wrap-item-products-user-grid row">
                                            <div class="wrap-item col-12 d-flex my-1">
                                                <div class="item-describe-product-brand">màu sắc:</div>
                                                <div class="item-describe-user mx-2">đen</div>
                                            </div>
                                            <div class="wrap-item col-12 d-flex my-1">
                                                <div class="item-describe-product-brand">chất liệu:</div>
                                                <div class="item-describe-user mx-2">đen</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-item-evaluate-text col-12 mb-4">
                                        Tại vì mình chọn loại 0 độ nên trồng kính nó màu hơi xanh, nhưng kính cầm lên đã
                                        tay lắm mọi người, nên mua mọi người
                                    </div>
                                    <div class="wrap-item-evaluate-img mb-4">
                                        <div class="wrap-item-evaluate-img-grid row mx-0 ">
                                            <div
                                                class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3 position-relative">
                                                <img src="https://down-tx-sg.img.susercontent.com/vn-11110103-7r98o-lmsgq3cx4e5pff"
                                                    alt="" class="item-img img-fluid ">
                                                <span
                                                    class="src d-none videoSrc">https://down-cvs-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke16-lmsgpxxl63tr0d.default.mp4</span>
                                                <div
                                                    class="item-time-video position-absolute d-flex align-items-center justify-content-between px-3 WrapTimeDurationClass">
                                                    <i class="item-icon fa-solid fa-video TimeDuration"></i>
                                                    <span class="TimeDurationClass"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3">
                                                <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uhk9rd8_tn.webp"
                                                    alt="" class="item-img img-fluid ">
                                                <span class="src d-none videoSrc"></span>
                                            </div>
                                            <div class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3">
                                                <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uiyu734_tn.webp"
                                                    alt="" class="item-img img-fluid ">
                                                <span class="src d-none videoSrc"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-carousel-evaluate-video-img-user col-12 mb-4">
                                        <div class="wrap-carousel-evaluate-video-img-user-grid ">
                                            <div
                                                class="carousel slide col-6  carousel-evaluate-video-img-user d-none CarouselEvaluateVideoImgUserClass">
                                                <div
                                                    class="carousel-inner carousel-evaluate-video-img-user-inner  CarouselEvaluateVideoImgUserInnerClass">
                                                    <div
                                                        class="carousel-item active  CarouselItemEvaluateVideoImgUserClass">
                                                        <video width="100%" height="100%" autoplay="" loop="" muted=""
                                                            class="item-video item">
                                                            <source
                                                                src=""
                                                                type="video/mp4">
                                                        </video>
                                                        <img src=""
                                                            alt="" class="item img-fluid item-img d-none">
                                                    </div>
                                                    <div class="carousel-item  CarouselItemEvaluateVideoImgUserClass">
                                                        <img src=""
                                                            alt="" class="item img-fluid item-img ">
                                                    </div>
                                                    <div class="carousel-item   CarouselItemEvaluateVideoImgUserClass">
                                                        <img src=""
                                                            alt="" class="item img-fluid item-img ">
                                                    </div>
                                                </div>
                                                <button
                                                    class="carousel-control-prev d-flex align-items-center justify-content-center CarouselControlEvaluateVideoImgUserClass CarouselControlEvaluateVideoImgUserPrevClass"
                                                    type="button" data-bs-target="#CarouselEvaluateVideoImgUser"
                                                    data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"><i
                                                            class="fa-solid fa-angle-left"></i></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button
                                                    class="carousel-control-next d-flex align-items-center justify-content-center CarouselControlEvaluateVideoImgUserClass CarouselControlEvaluateVideoImgUserNextClass"
                                                    type="button" data-bs-target="#CarouselEvaluateVideoImgUser"
                                                    data-bs-slide="next">
                                                    <span class="" aria-hidden="true"><i class="fa-solid fa-angle-right"
                                                            id="a"></i></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="warp-item-consensus-many-user WarpItemConsensusManyUserClass"><i
                                            class="item-icon fa-solid fa-thumbs-up"></i> <span
                                            class="item-consensus-quantity ItemConsensusQuantityClass">1</span></span>
                                </div>
                            </div>

                        </div>
                    </div>   
        
        `)
    let x = await handleShow_Carousel()
    return true
}
const handleInitShowPage_Pagination = async () => {
    const getData = await fetch.getData(`./Evaluate.json`)
    currentPage.position = getData.data.data
    console.log(getData.data.data);
    // Dữ liệu cần gửi

    // formData = {
    //     name: "quang"
    // }
    // axios({
    //     method: 'post',
    //     url: './Evaluate.json',
    //     data: data,
    //     header: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'multipart/form-data',
    //     },
    // })
    const parentItemFilter = $(`#EvaluateProductsFilter`)
    const itemEvaluate = $(`.EvaluateUserClass`)
    await itemEvaluate.remove()
    await parentItemFilter.after(`
     <div class="evaluate-user col-12 pe-0 ps-5 pb-4 border-bottom EvaluateUserClass mb-4">
                        <div class="evaluate-user-grid row mx-0 d-flex align-items-start">
                            <div
                                class="evaluate-user-left col-1  d-flex align-items-center justify-content-center pe-0">
                                <div class="wrap-avatar-user w-75 ">
                                    <img src="https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lluccqpwh71bb4_tn"
                                        alt="" class="item-img img-fluid">
                                </div>
                            </div>
                            <div class="evaluate-user-right col-11 ps-0 EvaluateUserRightClass ">
                                <div class="evaluate-user-right-grid row ">
                                    <span class="item-name-user col-12 mb-2">nguyennhatquang</span>
                                    <div class="wrap-item-evaluate-user col-12 mb-2">
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                        <i class="item-icon fa-solid fa-star"></i>
                                    </div>
                                    <div class="wrap-item-date-evaluate-user col-12 mb-4">
                                        <div class="wrap-item-date-evaluate-user-grid d-flex">
                                            <span class="item-date">2023-05-08 </span>
                                            <span class="item-time mx-2">12:06</span>
                                            <div class="vertical "></div>
                                            <span class="item-type-user mx-2">Phân loại hàng: MK37 Đen lì,Mắt 0độ</span>
                                        </div>
                                    </div>
                                    <div class="wrap-item-products-user col-12 mb-4">
                                        <div class="wrap-item-products-user-grid row">
                                            <div class="wrap-item col-12 d-flex my-1">
                                                <div class="item-describe-product-brand">màu sắc:</div>
                                                <div class="item-describe-user mx-2">đen</div>
                                            </div>
                                            <div class="wrap-item col-12 d-flex my-1">
                                                <div class="item-describe-product-brand">chất liệu:</div>
                                                <div class="item-describe-user mx-2">đen</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-item-evaluate-text col-12 mb-4">
                                        Tại vì mình chọn loại 0 độ nên trồng kính nó màu hơi xanh, nhưng kính cầm lên đã
                                        tay lắm mọi người, nên mua mọi người
                                    </div>
                                    <div class="wrap-item-evaluate-img mb-4">
                                        <div class="wrap-item-evaluate-img-grid row mx-0 ">
                                            <div
                                                class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3 position-relative">
                                                <img src="https://down-tx-sg.img.susercontent.com/vn-11110103-7r98o-lmsgq3cx4e5pff"
                                                    alt="" class="item-img img-fluid ">
                                                <span
                                                    class="src d-none videoSrc">https://down-cvs-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke16-lmsgpxxl63tr0d.default.mp4</span>
                                                <div
                                                    class="item-time-video position-absolute d-flex align-items-center justify-content-between px-3 WrapTimeDurationClass">
                                                    <i class="item-icon fa-solid fa-video TimeDuration"></i>
                                                    <span class="TimeDurationClass"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3">
                                                <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uhk9rd8_tn.webp"
                                                    alt="" class="item-img img-fluid ">
                                                <span class="src d-none videoSrc"></span>
                                            </div>
                                            <div class="wrap-item-img-sub col-1 px-0 WrapItemImgSubEvaluate mx-3">
                                                <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uiyu734_tn.webp"
                                                    alt="" class="item-img img-fluid ">
                                                <span class="src d-none videoSrc"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-carousel-evaluate-video-img-user col-12 mb-4">
                                        <div class="wrap-carousel-evaluate-video-img-user-grid ">
                                            <div
                                                class="carousel slide col-6  carousel-evaluate-video-img-user d-none CarouselEvaluateVideoImgUserClass">
                                                <div
                                                    class="carousel-inner carousel-evaluate-video-img-user-inner  CarouselEvaluateVideoImgUserInnerClass">
                                                    <div
                                                        class="carousel-item active  CarouselItemEvaluateVideoImgUserClass">
                                                        <video width="100%" height="100%" autoplay="" loop="" muted=""
                                                            class="item-video item">
                                                            <source
                                                                src="https://down-cvs-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke16-lmsgpxxl63tr0d.default.mp4"
                                                                type="video/mp4">
                                                        </video>
                                                        <img src="https://down-vn.img.susercontent.com/file/vn-11134208-7qukw-lg0o87uo1rsn10"
                                                            alt="" class="item img-fluid item-img d-none">
                                                    </div>
                                                    <div class="carousel-item  CarouselItemEvaluateVideoImgUserClass">
                                                        <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uhk9rd8_tn.webp"
                                                            alt="" class="item img-fluid item-img ">
                                                    </div>
                                                    <div class="carousel-item   CarouselItemEvaluateVideoImgUserClass">
                                                        <img src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmsgow1uiyu734_tn.webp"
                                                            alt="" class="item img-fluid item-img ">
                                                    </div>
                                                </div>
                                                <button
                                                    class="carousel-control-prev d-flex align-items-center justify-content-center CarouselControlEvaluateVideoImgUserClass CarouselControlEvaluateVideoImgUserPrevClass"
                                                    type="button" data-bs-target="#CarouselEvaluateVideoImgUser"
                                                    data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"><i
                                                            class="fa-solid fa-angle-left"></i></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button
                                                    class="carousel-control-next d-flex align-items-center justify-content-center CarouselControlEvaluateVideoImgUserClass CarouselControlEvaluateVideoImgUserNextClass"
                                                    type="button" data-bs-target="#CarouselEvaluateVideoImgUser"
                                                    data-bs-slide="next">
                                                    <span class="" aria-hidden="true"><i class="fa-solid fa-angle-right"
                                                            id="a"></i></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="warp-item-consensus-many-user WarpItemConsensusManyUserClass"><i
                                            class="item-icon fa-solid fa-thumbs-up"></i> <span
                                            class="item-consensus-quantity ItemConsensusQuantityClass">1</span></span>
                                </div>
                            </div>

                        </div>
                    </div>   
        
        `)
    let x = await handleShow_Carousel()
    return true
}
const currentPage = {
    position: 1,
}
const handleReIncreate = () => {
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
    const btnPaginationNumber = $(`.ItemNumberPaginationSelect`)
    const grandParentEvaluateUser = $(`.EvaluateUserClass`)
    handleClick_ConsensusQuantity(itemConsensusQuantity, parentItemConsensusQuantity);
    init(itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser, btnPaginationNumber)
    handleBtnNextPrev_Carousel_Evaluate(carouselItem, btnCarousel, grandParentEvaluateUser, item)
    handleAnimationBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, itemImg, grandParentEvaluateUser);
    handleShowCarousel_Evaluate(itemWarpImgSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, itemImg, carousel, grandParentEvaluateUser);
}
export const handleAllEvaluateUser = async () => {
    let x1 = await handleInitShowPage_Pagination()
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

    handleAnimationDirect_Pagination(itemEvaluateUser, btnPaginationNext, btnPaginationPrev, btnPaginationNumber, parentNumberPagination);
    handleClick_ConsensusQuantity(itemConsensusQuantity, parentItemConsensusQuantity);
    init(itemWarpImgSubEvaluate, videoSrc, displayTimeDuration, carouselItem, grandParentEvaluateUser, btnPaginationNumber)
    handleBtnNextPrev_Carousel_Evaluate(carouselItem, btnCarousel, grandParentEvaluateUser, item)
    handleAnimationBtnNextPrev_Carousel_Evaluate(btnCarouselNext, btnCarouselPrev, carousel, carouselItem, itemImg, grandParentEvaluateUser);
    handleShowCarousel_Evaluate(itemWarpImgSubEvaluate, carouselItem, btnCarouselNext, btnCarouselPrev, itemImg, carousel, grandParentEvaluateUser);

}
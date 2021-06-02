class MainPage{
    get mainePageUrl(){return 'http://automationpractice.com/index.php'}
    get locator_headersPhone(){ return  $(`//span[@class ='shop-phone']/strong`)}
    get locator_footerPhone(){ return  $(`//ul[@class ='toggle-footer']//span`)}
    get locator_headerContactUs(){ return  $(`//a[@title ='Contact Us']`)}
    get locator_headerLogIn(){ return $(`//a[@title ='Log in to your customer account']`)}
    get locator_headerBanner(){ return $(`.img-responsive`)}

    get rightArrowButton(){return $(`.bx-next`)}
    get leftArrowButton(){return $(`.bx-prev`)}
    get firstLitleImage(){return $(`.htmlcontent-item-1`)}
    get secondLitleImage(){return $(`.htmlcontent-item-2`)}
    get bigImage(){return $(`//a[@title = "sample-2"]`)}


    checktoVisibleandClickable(part1, part2){
        for(let i = 1; i < 6; i++){
            let locator = part1 + i + part2
            expect($(locator)).toBeDisplayed()
            expect($(locator)).toBeClickable()
        }
    }

    checkSocialLink(locator, href){
        expect(locator).toHaveHref(href)
    }

    checkLinksfromList(count, locatorPart1, locatorPart2){
        for(let i = 1; i < count + 1; i++){
            let locator = $(locatorPart1 + i + locatorPart2)
            expect(locator).toBeClickable()
            expect(locator).toBeClickable()
        }
    }
    checkToEqual(locator, phone){
        expect((locator).getText()).toEqual(phone)
    }
}

module.exports = new MainPage();

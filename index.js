const puppeteer = require('puppeteer')

async function asyncCall() {
    const browser = await puppeteer.launch({
        headless: true
    })
    const page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080
    })

    await page.setDefaultNavigationTimeout(0)
    await page.goto(
        'https://ccc.eu/pl/meskie/buty/trzewiki/trzewiki-gino-rossi-mi08-c535-537-07-granatowy'
    )
    await page.waitForSelector('.a-price_price')
    await page.screenshot({ path: 'example.png' })
    const search_in = await page.evaluate(
        () => document.querySelector('.a-price_price').innerHTML
    )    
    await page.screenshot({ path: 'example1.png' })
    const string_context = search_in.toString()

    console.log('Cena produktu:', string_context, 'zł')
    await browser.close();    
}

asyncCall();


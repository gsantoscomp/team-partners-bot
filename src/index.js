import teamsInformation from "./teamsInformation.js";
import puppeteer from "puppeteer";
import randomUserAgent from "random-useragent";

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36';

const teamsByPartners = await Promise.all(
    teamsInformation.map(async (team) => {
        const userAgent = randomUserAgent.getRandom();
        const UA = userAgent || DEFAULT_USER_AGENT;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setUserAgent(UA);
        await page.setRequestInterception(true);

        page.on('request', (req) => {
            if (req.resourceType() === 'image' || req.resourceType() === 'stylesheet' || req.resourceType() === 'font') {
                req.abort();
            } else {
                req.continue();
            }
        });

        let amountPartners = '';
        if (team.hasApiCall) {
            const response = await page.goto(team.apiLink);
            const result = await response.json();

            amountPartners = result.res.toString();
        } else {
            await page.goto(team.linkPartnersInformation);
            const partners = await page.$(team.classToFind);
            amountPartners = await partners.evaluate(el => el.textContent)
        }

        await browser.close();

        return {
            team: team.name,
            partners: amountPartners.replaceAll('.', '').trim()
        };
    })
);

console.log(teamsByPartners);
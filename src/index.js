import teamsInformation from "./config/teamsInformation.js";
import getPartnersByTeam from "./getPartnersByTeam.js";
import organizeTweet from "./organizeTweet.js";
import getTwitterClient from "./getTwitterClient.js";

try {
    const partnersByTeam = await getPartnersByTeam(teamsInformation);
    const tweet = organizeTweet(partnersByTeam);

    const twitterClient = await getTwitterClient();

    await twitterClient.v2.tweet(tweet);
} catch (err) {
    console.error(err);
}

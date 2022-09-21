import teamsInformation from "./teamsInformation.js";
import getPartnersByTeam from "./getPartnersByTeam.js";

try {
    const partnersByTeam = await getPartnersByTeam(teamsInformation);
    console.log(partnersByTeam);
} catch (err) {
    console.error(err);
}
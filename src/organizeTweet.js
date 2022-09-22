export default (teamsToOrganize) => {
    teamsToOrganize.sort((current, next) => {
        const currentTeamPartnersNumber = Number(current.partners);
        const nextTeamPartnersNumber = Number(next.partners);

        if (currentTeamPartnersNumber === nextTeamPartnersNumber) {
            return 0;
        }

        const  difference = currentTeamPartnersNumber - nextTeamPartnersNumber;

        return difference / Math.abs(difference) * -1;
    });

    return teamsToOrganize.reduce((previous, current, index) => {
        return previous + ++index + '. ' + current.team + ': ' + current.partners + '\n';
    }, 'Sócio-torcedores por time:\n');
}
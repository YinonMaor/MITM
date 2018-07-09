const {exec} = require('child_process')
let card = null, internalCard = null, name = null;
process.argv.forEach((val, index, array) => {
    if (val === '-card' && array[index + 1]) {
        card = array[index + 1];
    } else if (val === '-internalCard' && array[index + 1]) {
        internalCard = array[index + 1];
    } else if (val === '-name' && array[index + 1]) {
        name = array[index + 1];
    }
});
exec(`sudo dhclient ${internalCard} && sudo ifconfig ${card} down && sudo iwconfig ${card} mode managed && sudo ifconfig ${card} up && sudo python honey.py -c 6 -u ${card} -i ${internalCard} -s ${name}`)

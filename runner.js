const {exec} = require('child_process')
const internalCard = null;
process.argv.forEach((val, index, array) => {
    if (val === '-card' && array[index + 1]) {
        internalCard = array[index + 1] || ip;
    }
});
exec(`sudo systemctl stop NetworkManager.service && sudo systemctl disable NetworkManager.service && sudo wpa_supplicant -Dwext  -i ${internalCard} -c/etc/or.conf && sudo dhclient ${internalCard}`)
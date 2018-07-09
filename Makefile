all: dhclient modeManaged start
pre: disableNetwork loginNetwork
disableNetwork:
	sudo systemctl stop NetworkManager.service
	sudo systemctl disable NetworkManager.service
loginNetwork:
	sudo wpa_supplicant -Dwext  -i wlp3s0f0 -c/etc/or.conf
modeManaged:
	sudo ifconfig wlxa0f3c12e0fa3 down
	sudo iwconfig wlxa0f3c12e0fa3 mode managed
	sudo ifconfig wlxa0f3c12e0fa3 up
start:
	sudo python mitm.py -c 6 -u wlxa0f3c12e0fa3 -i wlp3s0f0 -s my_essid
dhclient:
	sudo dhclient wlp3s0f0

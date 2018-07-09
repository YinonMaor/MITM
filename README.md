Honey Pot Software:
1. [Introduction](#introduction)  
2. [Dependencies:](#dependencies)  
3. [Installation:](#installation)  

## Introduction
This project is about generating a hotspot which some random person can connect to, and by that he would be browsing when you're on the middle.  
Activating a sniffer like `Wireshark` could demonstrate to you how packets are being transfered with through your computer.  
This software is designed with [Electron](https://github.com/electron/electron).  
This project is inspired from `evil_twin` software from [here](http://solstice.sh/python/wireless/2015/11/01/python-evil-twin/).

## Dependencies:
* Ubuntu
* Node.js ^8.7.0
* Python ^2.7.0
* External network card
* Git

## Installation:
1. Clone the repository:  
    ```
    $ git clone https://github.com/yinonc/HoneyPot
    ```
2. Enter the project's directory:
    ```
    $ cd HoneyPot
    ```
3. Install dependent packages:
    ```
    $ npm install
    ```
    Or, if you have yarn installed:
    ```
    $ yarn
    ```
4. Go to another directory, and run:
    ```
    $ git clone https://github.com/singe/sslstrip2.git
    $ cd sslstrip2
    $ sudo python setup.py install
    ```
5. Download hostapd from [here](https://pkgs.org/download/hostapd) (Also on HoneyPot/Installations). Install it (recommended with ubuntu software center). Make sure that /etc/hostapd/hostapd.conf file is existed. If not, just create it and it would be configured during run.
6. Download dnsmasq from [here](https://linux.softpedia.com/get/Internet/DNS/?utm_source=spd&utm_campaign=postdl_redir) (Also on HoneyPot/Installations). Install it (recommended with ubuntu software center).
7. Run `Honey Pot` software with root permissions:
    ```
    $ sudo -s
    $ npm start
    ```
8. Insert your real network connection by name and password.
9. Insrty your desired ESSID (network name) to be in the middle, and your external card's name.
10. Click `Start Honey Pot` button.
11. After you are finished, you might want to return your network service:
    ```
    service network-manager restart
    ```
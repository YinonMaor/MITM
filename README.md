Man In The Middle Software:
1. [Introduction](#introduction)  
2. [Dependencies:](#dependencies)  
3. [Installation:](#installation)  

## Introduction
This project is about generating a hotspot which some random person can connect to, and by that he would be browsing when you're on the middle.  
Activating a sniffer like `Wireshark` could demonstrate to you how packets are being transfered with through your computer.

## Dependencies:
* MacOS / Linux
* Node.js ^8.7.0
* External network card
* Git

## Installation:
1. Clone the repository:  
    ```
    $ git clone https://github.com/YinonMaor/MITM.git
    ```
2. Enter the project's directory:
    ```
    $ cd MITM
    ```
3. Install dependent packages:
    ```
    $ npm install
    ```
    Or, if you have yarn installed:
    ```
    $ yarn
    ```
4. Run the software by:
    ```
    $ npm start
    ```
5. Insert your real network connection by name and password.
6. Insrty your desired ESSID (network name) to be in the middle, and your external card's name.
7. Click `Start MITM` button.
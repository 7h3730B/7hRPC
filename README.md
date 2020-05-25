<div align="center">
    <h1>~ 7hRPC ~</h1>
    <strong>
       Have you ever wanted to show people on Discord how good or bad your PC is? <br/>
        No?<br/>
        But now you can.
    </strong><br/><br/>
    <img height="28" src="https://img.shields.io/github/license/7h3730B/7hRPC?style=for-the-badge">
    <img height="28" src="https://img.shields.io/github/repo-size/7h3730B/7hRPC?style=for-the-badge">
    <img height="28" src="https://img.shields.io/github/stars/7h3730B/7hRPC?style=for-the-badge">
    <img height="28" src="https://forthebadge.com/images/badges/built-with-love.svg">

</div>  

## Table of Contents  

* [Intro](#intro) 
* [Usage](#usage) 
    * [Installation](#installation)
    * [How to use](#how-to-use)
    * [Modes](#modes)
* [Dependencies](#dependencies)  
* [License](#license)
---
## Intro
This Program allows you to show your PC Hardware to Discord Servers threw Discord RPC.

---
## Usage
---
### Installation
Make sure you have [git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed.
From the Commandline:
``` BASH
# Get the Repo
$ git clone https://github.com/7h3730B/7hRPC.git
# go into the directory
$ cd 7hRPC
# get all Dependencies
$ npm i
# Run the Program
$ node index.js
```
---
### How to use
Normaly the Program just runs in cycle mode. That means it changes the mode every 30 seconds.

If you just want to use one mode run your program like this:
``` BASH
$ node index.js <modename>
```
All the Modes are listed down below with screenshots
> Modes are only updated every 60 Seconds
---
### Modes
crusage:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/crusage.png">  
cpuinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/cpuinfo.png">  
raminfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/raminfo.png">  
displayinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/displayinfo.png">  
gpuinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/gpuinfo.png">  
osinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/osinfo.png">  
processinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/processinfo.png">  
motherboardinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/motherboardinfo.png">  
disksinfo:  
<img src="https://raw.github.com/7h3730B/7hRPC/master/images/disksinfo.png">  

---
## Dependencies
- [discord-rich-presence](https://www.npmjs.com/package/discord-rich-presence) to send the Data to Discord  
- [systeminformation](https://www.npmjs.com/package/systeminformation) to get all the Data
---
## License
> You can check out the full license [here](https://github.com/7h3730B/7hRPC/blob/master/LICENSE)   

This project is licensed under the terms of the **MIT** license.
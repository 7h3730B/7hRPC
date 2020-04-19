# 7hRPC
Have you ever wanted to show people on Discord how good or bad your PC is?  
No?   
But now you can.

---
### Installation
Make sure you have [node.js](node.js.org) installed.

1. Download this Repo from [here](https://github.com/7h3730B/7hRPC/releases) or just clone it.
```sh
git clone https://github.com/7h3730B/7hRPC.git
```
2. Go into the directory created and open a terminal in the directory you extracted/cloned the repositorie to.

3. Download all Dependencies
```sh
npm i
```

4. Run the Program
```sh
node index.js
```
--- 
## Usage
Normaly the Program just runs in cycle mode. That means it changes the mode every 30 seconds.

If you just want to use one mode run your program like this:
```sh
node index.js <modename>
```
All the Modes are listed down below with screenshots

---
> Modes are only updated every 60 Seconds
#### Other Modes are:
crusage:

![crusage](/images/crusage.png)

cpuinfo:

![cpuinfo](/images/cpuinfo.png)

raminfo:

![raminfo](/images/raminfo.png)

displayinfo:

![displayinfo](/images/displayinfo.png)

gpuinfo:

![gpuinfo](/images/gpuinfo.png)

osinfo:

![osinfo](/images/osinfo.png)

processinfo:

![processinfo](/images/processinfo.png)

motherboardinfo:

![motherboardinfo](/images/motherboardinfo.png)

disksinfo:

![disksinfo](/images/disksinfo.png)

---
## Dependencies
- [discord-rich-presence](https://www.npmjs.com/package/discord-rich-presence)
- [systeminformation](https://www.npmjs.com/package/systeminformation)

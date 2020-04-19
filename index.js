const si = require("systeminformation");

const id = process.argv[3] || "701098492000469012";
const modeavg = process.argv[2] || "cycle";
let mode = modeavg;
let modenumber = 0;

let modes = ["crusage", "cpuinfo", "raminfo", "displayinfo", "gpuinfo", "osinfo", "processinfo", "motherboardinfo", "disksinfo"];

const client = require("discord-rich-presence")(id);

async function refresh() {
    if (mode.toLowerCase() == "crusage") {
        let cpuCurrentspeed;
        let cpuMaxspeed;
        await si.cpuCurrentspeed().then(cpu => {
            cpuCurrentspeed = cpu.avg;
            cpuMaxspeed = cpu.max;
        });
        let freeMemory;
        let totalMemory;
        await si.mem().then(poll => {
            freeMemory = poll.used / 1048576;
            totalMemory = poll.total / 1048576;
        });
        let cpuUsage;
        await si.currentLoad().then(poll => {
            cpuUsage = poll.currentload;
        });
        client.updatePresence({
            details: "CPU: " + cpuCurrentspeed + " GHz / " + cpuMaxspeed + " GHz Usage: " + "(" + cpuUsage.toFixed(0) + "%)",
            state: "RAM: " + (freeMemory / 1000).toFixed(1) + " GB / " + (totalMemory / 1000).toFixed(0) + " GB",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "cpuinfo") {
        let cpumodel;
        let cpubrand;
        let threads;
        let cores;
        let cpucount;
        await si.cpu().then(pool => {
            cpumodel = pool.manufacturer;
            cpubrand = pool.brand;
            threads = pool.cores;
            cores = pool.physicalCores;
        });
        await si.currentLoad(pool => {
            cpucount = pool.cpus.length;
        });
        client.updatePresence({
            details: "CPU: " + cpumodel + " " + cpubrand,
            state: "Threads: " + threads + " | Cores: " + cores,
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "raminfo") {
        let ramcount;
        let ramtype;
        let ramspeed;
        let ramvoltage;
        await si.memLayout().then(pool => {
            ramcount = pool.length;
            ramtype = pool[0].type;
            ramspeed = pool[0].clockSpeed;
            ramvoltage = pool[0].voltageConfigured;
        });
        client.updatePresence({
            details: "RAMs: " + ramcount + " | Type: " + ramtype,
            state: "Speed: " + ramspeed + "MHz | Voltage: " + ramvoltage + " V",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "displayinfo") {
        let displaycount;
        await si.graphics().then(pool => {
            displaycount = pool.displays.length;
        });
        client.updatePresence({
            details: "Displays: " + displaycount,
            state: "  ",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "gpuinfo") {
        let gpucount;
        let gpumodel;
        let displaycount;
        await si.graphics().then(pool => {
            gpucount = pool.controllers.length;
            gpumodel = pool.controllers[0].model;
            displaycount = pool.displays.length;
        });
        client.updatePresence({
            details: "GPU(s): " + gpucount + "x " + gpumodel,
            state: "Rendering for " + displaycount + " Displays",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "osinfo") {
        let distro;
        let platform;
        await si.osInfo().then(pool => {
            distro = pool.distro;
            platform = pool.platform;
        });
        client.updatePresence({
            details: "Distro: " + distro,
            state: "Platform: " + platform,
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "processinfo") {
        let processcount;
        let cpuload;
        await si.processes().then(pool => {
            processcount = pool.all;
        });
        await si.currentLoad().then(pool => {
            cpuload = pool.currentload;
        });
        client.updatePresence({
            details: "Processes: " + processcount,
            state: "CPU Load: " + cpuload.toFixed(0) + " %",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
    if (mode.toLowerCase() == "motherboardinfo") {
        let manufacturer;
        let model;
        await si.baseboard().then(pool => {
            manufacturer = pool.manufacturer;
            model = pool.model
        });
        client.updatePresence({
            details: "Mainboard by: " + manufacturer,
            state: "Model: " + model,
            startTimestamp: Date.now(),
            instance: false,
        });
    }
    if (mode.toLowerCase() == "disksinfo") {
        let disks;
        let diskscount
        let totalSpace = 0;
        await si.diskLayout().then(pool => {
            disks = pool;
            diskscount = pool.length;
        });

        let HDD = 0;
        let SSD = 0;
        let NVMe = 0;

        for (let disk of disks) {
            totalSpace += disk.size;
            if (disk.type == "HD") HDD += 1;
            if (disk.type == "SSD" && disk.interfaceType == "SATA") SSD += 1;
            if (disk.type == "NVMe" || disk.interfaceType == "PCIe" || disk.interfaceType == "SCSI") NVMe += 1;
        }

        client.updatePresence({
            details: NVMe.toString() + "x NVMe(s) | " + SSD.toString() + "x SSD(s) | " + HDD.toString() + "x HDD(s)",
            state: "TotalSize: " + (totalSpace / 1e+12).toFixed(1) + " TB",
            startTimestamp: Date.now(),
            instance: false,
        });
        return;
    }
}

try {
    console.log("Running in the mode: " + modeavg);
    if (modeavg == "cycle") {
        cycle();
        setInterval(cycle, 30000);
    } else {
        refresh();
        setInterval(refresh, 60000);
    }
} catch (e) {
    console.log("Something went wrong:");
    console.error(e);
    console.log("Something went wrong:");
}

async function cycle() {
    if (modenumber >= modes.length) modenumber = 0;
    mode = modes[modenumber];
    modenumber += 1;
    refresh();
}
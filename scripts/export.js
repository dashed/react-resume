// node imports

const http = require("http");
const path = require("path");

// 3rd-party imports

const mkdirp = require("mkdirp");
const puppeteer = require("puppeteer");

// export code

const SERVER = "http://localhost:3000/";
const OUT_DIR = path.join(__dirname, "../out/");
const PDF_FILENAME = "resume.pdf";

function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

const fetchResponse = () => {
    return new Promise((resolve, reject) => {
        try {
            const request = http.request(SERVER, response =>
                resolve(response.statusCode)
            );
            request.on("error", err => reject(err));
            request.end();
        } catch (err) {
            reject(err);
        }
    });
};

const reachableServer = () => {
    console.log("Connected to server ...");

    return fetchResponse().then(statusCode => {
        if (statusCode === 200) {
            // 200 OK
            return true;
        }

        throw Error(
            `Unable to connect to server. Received status code: ${statusCode}`
        );
    });
};

const makeOutDir = () => {
    return new Promise((resolve, reject) => {
        mkdirp(OUT_DIR, err => {
            if (!err) {
                resolve();
                return;
            }

            reject(err);
        });
    });
};

const convert = async () => {
    await reachableServer();

    console.log("Exporting ...");

    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });

    const page = await browser.newPage();

    await page.goto(SERVER, { waitUntil: "networkidle2" });

    await makeOutDir();

    await sleep(2000);

    await page.pdf({
        path: path.join(OUT_DIR, PDF_FILENAME),
        format: "letter"
    });

    await browser.close();

    console.log("Finished exports.");
};

convert().catch(reason => {
    console.error(`${reason}`);
    process.exit(1);
});

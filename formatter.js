const fs = require("fs");
const fsExtra = require("fs-extra");
async function clMagicFormat() {
    try {
        const outFilesList = await fs.promises.readdir(`${__dirname}/out`);
        outFilesList.forEach(async (i) => {
            if (i.includes(".html") && i !== "index.html" && i !== "404.html") {
                await fs.promises.mkdir(
                    `${__dirname}/out/${i.split(".html").join("")}`,
                    { recursive: true }
                );

                await fs.promises.rename(
                    `${__dirname}/out/${i}`,
                    `${__dirname}/out/${i.split(".html").join("")}/index.html`
                );
            }
        });
    } catch (err) {
        throw new Error(err);
    }
}
clMagicFormat();

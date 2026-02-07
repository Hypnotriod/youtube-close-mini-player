
const waitForElement = (selector) =>
    new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(_ => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });

async function run() {
    (await waitForElement('.ytp-miniplayer-close-button')).click();
    console.log(`The fucking "Continue Watching" YouTube mini-player is successfully closed!`);
}

run();

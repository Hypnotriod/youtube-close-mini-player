
const waitForElement = (selector) =>
    new Promise(resolve => {
        const element = document.querySelector(selector);
        if (element) return resolve(element);
        const observer = new MutationObserver(_ => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });

async function run() {
    (await waitForElement('.ytp-miniplayer-close-button')).click();
    console.log(`The fucking "Continue Watching" YouTube mini-player is successfully closed!`);
}

run();

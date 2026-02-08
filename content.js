
const observeElement = (selector) => new Promise(resolve => {
    const element = document.querySelector(selector);
    if (element) return resolve(element);
    const observer = new MutationObserver(_ => {
        const element = document.querySelector(selector);
        if (!element) return;
        observer.disconnect();
        resolve(element);
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

async function run() {
    (await observeElement('.ytp-miniplayer-close-button')).click();
    console.log(`The fucking "Continue Watching" YouTube mini-player is successfully closed!`);
}

run();

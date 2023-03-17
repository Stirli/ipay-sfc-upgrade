export class ChromeDataStorage {
  #storage;
  /**
   * @param {("local"|"sync")} area
   */
  constructor(area = "sync") {
    this.#storage = chrome.storage[area];
  }

  async get(key) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key]).then((result) => {
        resolve(result[key]);
      });
    });
  }

  async set(valeObj) {
    return new Promise((resolve) => {
      chrome.storage.local.set(valeObj).then(() => {
        resolve();
      });
    });
  }
}

import { ChromeDataStorage } from "../components/ChromeDataStorage";

export class DataProvider {
  #cds;
  constructor() {
    this.#cds = new ChromeDataStorage();
  }

  async getLastPage() {
    return this.#cds.get("lastPage");
  }

  async setLastPage({ lastClass, lastTab }) {
    this.#cds.set({ lastPage: { lastClass, lastTab } });
  }

  async getMenu(date){
    return Promise.resolve();
  }
}

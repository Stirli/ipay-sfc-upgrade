import $ from "jquery";
import { timer } from "../../infrastructure/timer.js";
const regex = /kvp-menu-(.+)/gm;
export class LastPageChecker {
  /**
   * @type {import ("../model/DataProvider.js").DataProvider}
   */
  #dp;

  constructor(dataProvider) {
    this.#dp = dataProvider;
  }

  async onLoadAsync() {
    console.log("onLoadAsync", this);
    const dp = this.#dp;
    const { lastTab, lastClass } = await dp.getLastPage();
    console.log(lastTab, lastClass);
    if (lastClass >= 0) {
      $(`.oak__leaf a`).get(lastClass).click();
    }

    await timer(1000);
    if (lastTab !== undefined) {
      $(`.kvp-menu-${lastTab} a`).get(0).click();
    }
  }

  async beforeUnloadAsync() {
    console.log("beforeUnload", this);

    const selectedTabClasses = Array.from(
      $(".main-navigation").first().children(".selected")[0].classList
    );
    const tab = selectedTabClasses
      .map((e) => regex.exec(e))
      .find((e) => e != null)[1];
    const selectedClass = $(".oak__leaf a").index($(".oak__leaf.selected a"));

    await this.#dp.setLastPage({ lastTab: tab, lastClass: selectedClass });
  }
}

import $ from "jquery";

export class LastPageChecker {
  /**
   * @type {import ("../model/DataProvider.js").DataProvider}
   */
  #dp;

  constructor({ dataProvider }) {
    this.#dp = dataProvider;
  }

  beforeLoad() {
    $(window).on("beforeunload", async function () {
      //   $(".main-navigation").first().children(".selected")[0].classList
      // await this.#dp.setLastPage({lastTab:});

    });
  }
}

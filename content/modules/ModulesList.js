import $ from "jquery";
export class ModulesList {
  #modules;
  constructor(modules) {
    this.#modules = [];
    for (const module of modules) {
      this.#modules.push(module);
      $(async () => await module.onLoadAsync());
      $(window).on("unload", async () => await module.beforeUnloadAsync());
    }

    const mainObserver = new MutationObserver(this.#onCol75Change.bind(this));
    const col25 = $(".page-content > .container > .row > .col-25");
    const col75 = $(".page-content > .container > .row > .col-75");
    mainObserver.observe(col75[0], { childList: true });
  }

  #onCol75Change(mutations) {
    console.log(mutations);
    for (const mutation of mutations) {
      const [type, nodeList] =
        mutation.addedNodes.length > 0
          ? ["added", mutation.addedNodes]
          : mutation.removedNodes.length > 0
          ? ["removed", mutation.removedNodes]
          : ["unknown"];
      const nodeArray = Array.prototype.slice.call(nodeList);

      const block_main = nodeArray.find((e) => e.id == "block_main");
      let page =
      {
        name: $(".main-navigation .selected a").first().text(),
        caption: $(block_main).find("caption").text(),
      }

      this.#modules.forEach((module)=>module.onPageSelected?.(page));
    }
  }
}

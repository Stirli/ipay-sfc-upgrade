import "./content-styles.scss";
import $ from "jquery";
import { ModulesList } from "./modules/ModulesList";
import { LayoutMaker } from "./modules/LayoutMaker";
import { DataProvider } from "./model/DataProvider";
import { LastPageChecker } from "./modules/LastPageChecker";

console.log("injected");

var dp = new DataProvider();
const modules = new ModulesList([new LayoutMaker(), new LastPageChecker(dp)]);

modules.beforeLoad();

// $(document).load(function () {

//   const mainObserver = new MutationObserver(onCol75Change);
//   const col25 = $(".page-content > .container > .row > .col-25");
//   const col75 = $(".page-content > .container > .row > .col-75");
//   mainObserver.observe(col75[0], { childList: true });

//   function onCol75Change(mutations) {
//     console.log(mutations);
//     for (const mutation of mutations) {
//       const [type, nodeList] =
//         mutation.addedNodes.length > 0
//           ? ["added", mutation.addedNodes]
//           : mutation.removedNodes.length > 0
//           ? ["removed", mutation.removedNodes]
//           : ["unknown"];
//       const nodeArray = Array.prototype.slice.call(nodeList);
//       for (const node of nodeArray) {
//         console.log(type, node);
//       }

//       const block_main = nodeArray.find((e) => e.id == "block_main");
//       onBlockMainChanged({
//         page: $(".main-navigation .selected a").first().text(),
//         caption: $(block_main).find("caption").text(),
//       });
//     }
//   }
// });

// function onBlockMainChanged(params) {
//   console.log(params);
// }

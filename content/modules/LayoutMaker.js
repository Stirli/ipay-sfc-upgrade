import $ from "jquery";
export class LayoutMaker {
  beforeLoad() {
    $(".page-content > .container > .row > .col-25")
      .prepend($("#short_info_block"))
      .find(".oak > :not(ul)")
      .remove();
    $(".logout-timer").first().css("color", "red");
  }
}

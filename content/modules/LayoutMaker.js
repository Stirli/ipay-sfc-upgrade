import $ from "jquery";
export class LayoutMaker {
  async onLoadAsync() {
    console.log("beforeLoad", this);
    $(".page-content").css("width", "1300px");
    const col25 = $(".page-content > .container > .row > .col-25");
    col25.prepend($("#short_info_block")); // переместить инфо из центра влево

    $(".logout-timer").first().css("color", "red");

    const groupsByYear = Object.groupBy(
      $(".oak__branch li").toArray(),
      (v) => /\((\d+\/\d+)\)/.exec($(v).find("a").text())?.[1] ?? "Иное"
    );
    const mainUl = $(".oak__branch ul");
    for (const year in groupsByYear) {
      if (Object.hasOwnProperty.call(groupsByYear, year)) {
        console.log(year);
        const groupsByParallel = Object.groupBy(
          groupsByYear[year],
          (v) => /^(\d+)/.exec($(v).find("a").text())?.[1] ?? "Иное"
        );
        console.log(groupsByParallel);
        const yul = $(`<ul class='oak__branch__year'></ul>`)
          .insertBefore(mainUl)
          .wrap("<div class='oak__group'></div>")
          .before(`<strong>${year}</strong>`);
        for (const parallel in groupsByParallel) {
          if (Object.hasOwnProperty.call(groupsByParallel, parallel)) {
            const pul = $(`<ul class='oak__branch__parallel'></ul>`)
              .appendTo(yul)
              .wrap("<li></li>")
              .before(`<strong>${parallel}</strong>`);
            $(groupsByParallel[parallel])
              .appendTo(pul)
              .find("a")
              .text((_, text) => text.replace(/\s\(\d+\/\d+\)/, ""));
          }
        }
      }
    }
    const d = $(".disabled-class").css('display');
    const c = $(".disabled-class").css('color');
    $(".oak__group:has(.disabled-class)").addClass("disabled-class").css('display', d).css('color', c);
  }

  async beforeUnloadAsync() {}
}

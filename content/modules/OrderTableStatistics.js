import $ from "jquery";
export class OrderTableStatistics {
  async onLoadAsync() {}

  async onPageSelected({ name, caption }) {
    if (name === "Ведомость" || name === "ДОП питание") {
      console.log("onPageSelected");

      let breakfast = format($("#table_add td:nth-child(4)"));

      let dinner = format($("#table_add td:nth-child(5)"));

      let secondDinner = format($("#table_add td:nth-child(6)"));

      $("#table")
        .before(
          `<table id="stat_table">
            <tr><td><strong>Завтрак</strong></td><td>${breakfast}</td></tr>
            <tr><td><strong>Обед</strong></td><td>${dinner}</td></tr>
            <tr><td><strong>Полдник</strong></td><td>${secondDinner}</td></tr>
          </table>`
        )
        .find("caption")
        .text((_, text) => /(.+),/.exec(text)[1]);
    } else {
      console.log("anotherSelected");
    }
  }
}

function format(column) {
  const groups = Object.groupBy(
    column
      .map(function () {
        return this.innerText;
      })
      .get(),
    selfSelector
  );
  return Object.keys(groups)
    .map((key) => `<tt>${groups[key].length} (${key}BYN)</tt>`)
    .join(", ");
}

function selfSelector(key) {
  return key;
}

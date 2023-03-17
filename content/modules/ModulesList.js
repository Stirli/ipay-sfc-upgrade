export class ModulesList {
  #modules;
  constructor(modules) {
    this.#modules = [];
    for (const module of modules) {
      this.#modules.push(module);
    }
  }

  beforeLoad() {
    this.#modules.forEach((module) => {
      module.beforeLoad();
    });
  }
}

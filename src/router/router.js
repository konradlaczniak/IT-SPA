import $ from "jquery";
import { routes } from "./routes";
import { oops } from "../views";
import { routeChange } from "./route-change";

export class Router {
  constructor() {
    this.body = $(document.body);
    this.outlet = $("main");
    this.routes = routes;
  }

  mount(outlet) {
    this.outlet = outlet;

    // detail to, np. { path: '/booking' }
    this.body.on(routeChange, (event, detail) => {
      this.navigate(detail.path);
    });

    // TODO: uzyj zdarzenia 'popstate', aby wyrenderowac odpowiednia
    // sciezke, gdy uzytkownik klika Wstecz (<-) lub Naprzod (->)

    //DONE
  }

  init() {
    this.navigate(location.pathname);
  }

  get(path) {
    return this.routes.find((route) => route.path === path);
  }

  has(path) {
    return this.get(path) !== undefined;
  }

  navigate(path) {
    // sciezka istnieje, mozna nawigowac
    if (this.has(path)) {
      // { path: '/booking', data: {}, component: booking }

      const { component } = this.get(path);
      const html = component();
      this.outlet.empty().append(html);
    } else {
      const html = oops();
      this.outlet.empty().append(html);
    }
    if (!history.state || history.state != path) {
      history.pushState(path, "", path);
    }
  }
}

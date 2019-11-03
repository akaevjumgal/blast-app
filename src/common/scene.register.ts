
export interface RouteObject {
  link: string
  name: string
  title: string
  exact: boolean
  component: JSX.Element
}

export default class SceneRegister {
  
    private readonly routes: RouteObject[]

    constructor(routes: RouteObject[]) {
      this.routes = routes
    }

    set(route: RouteObject) {
      this.routes.push(route)
    }

    get() {
      return this.routes
    }

}
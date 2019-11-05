import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SceneRegister from './common/scene.register';
import AboutScene from './scenes/about';
import HomeScene from './scenes/main';
import Navigation from './sections/navigation';

export default class SceneInitializer extends Component {

  private sceneRegisterService: SceneRegister = new SceneRegister([
    {
      link: '/',
      name: 'Главная',
      title: 'Главная',
      exact: true,
      component: <HomeScene />
    },
    {
      link: '/about',
      name: 'О нас',
      title: 'О нас',
      exact: true,
      component: <AboutScene />
    }
  ])

  render() {
    return (
      <BrowserRouter>
        <Navigation routes={this.sceneRegisterService.get()} />

        {this.sceneRegisterService.get().map((scene, index) => (
          <Switch key={index}>
            <Route path={scene.link} exact={scene.exact}>
              {scene.component}
            </Route>
          </Switch>
        ))}
      </BrowserRouter>
    )
  }


}
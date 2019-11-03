import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import SceneRegister from './common/scene.register';
import AboutScene from './scenes/about';
import HomeScene from './scenes/main';
import Navigation from './sections/navigation';

const HISTORY = createBrowserHistory()

export default class SceneInitializer extends Component {

  private sceneRegisterService: SceneRegister = new SceneRegister([
    {
      link: '/',
      name: 'Главная',
      title: 'Главная',
      exact: true,
      component: <HomeScene history={HISTORY} />
    },
    {
      link: '/about',
      name: 'О нас',
      title: 'О нас',
      exact: true,
      component: <AboutScene history={HISTORY} />
    }
  ])

  render() {
    return (
      <Router history={HISTORY}>
        <Navigation routes={this.sceneRegisterService.get()} />

        {this.sceneRegisterService.get().map((scene, index) => (
          <Switch key={index}>
            <Route path={scene.link} exact={scene.exact}>
              {scene.component}
            </Route>
          </Switch>
        ))}
      </Router>
    )
  }


}
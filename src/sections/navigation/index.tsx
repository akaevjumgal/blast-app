import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteObject } from '../../common/scene.register';

interface Props {
  routes: RouteObject[]
}

export default class Navigation extends Component<Props> {

  render() {

    return (
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <Link className="navbar-brand logo_h d-flex align-items-center" to="index.html">
                <img src="img/logo2.png" alt="" width="100%" height="100%" />
                <h2 style={{ margin: '0 20px' }}>Взлёт</h2>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  {this.props.routes.map(this.renderNavigationItems)}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

    )
  }

  private renderNavigationItems = (routeObject: RouteObject, index: number) => (
    <li className={`nav-item`} key={index}>
      <NavLink className="nav-link" to={routeObject.link}>{routeObject.name}</NavLink>
    </li>
  )
}


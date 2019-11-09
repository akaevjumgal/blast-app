import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>О нас</h6>
            <p>
              Мы занимаемся трудойстройством наших граждан зарубеж.
                </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>Навигация</h6>
            <div className="row">
              <div className="col">
                <ul>
                  <li><Link to="#">Главная</Link></li>
                  <li><Link to="#">О нас</Link></li>
                  <li><Link to="#">Вакансии</Link></li>
                  <li><Link to="#">Страны</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>Подпишись</h6>
            <p>
              Подпишись на новостную рассылку чтобы быть в курсе о появлении новых вакансий.
                </p>
            <div id="mc_embed_signup">
              <form target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get" className="subscription relative">
                <div className="input-group d-flex flex-row">
                  <input name="EMAIL" placeholder="@ почта" type="email" />
                  <button className="btn bb-btn"><span className="lnr lnr-location"></span></button>
                </div>
                <div className="mt-10 info"></div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget mail-chimp">
            <h6 className="mb-20">Наш инстаграм</h6>
            <ul className="instafeed d-flex flex-wrap">
              <li><img src="img/instagram/i1.jpg" alt="" /></li>
              <li><img src="img/instagram/i2.jpg" alt="" /></li>
              <li><img src="img/instagram/i3.jpg" alt="" /></li>
              <li><img src="img/instagram/i4.jpg" alt="" /></li>
              <li><img src="img/instagram/i5.jpg" alt="" /></li>
              <li><img src="img/instagram/i6.jpg" alt="" /></li>
              <li><img src="img/instagram/i7.jpg" alt="" /></li>
              <li><img src="img/instagram/i8.jpg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row align-items-center">
          <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
            Copyright &copy;
                {new Date().getFullYear()}
            All rights reserved
            </p>
          <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-dribbble"></i></Link>
            <Link to="#"><i className="fab fa-behance"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection
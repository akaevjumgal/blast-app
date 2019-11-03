import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../../sections/footer';
import BaseScene from '../index';

export default class AboutScene extends BaseScene {
  render() {
    return (
      <div>
        <section className="hero-banner-sm magic-ball magic-ball-banner" id="parallax-1" data-anchor-target="#parallax-1"
          data-300-top="background-position: 0px -80px" data-top-bottom="background-position: 0 100px">
          <div className="container">
            <div className="hero-banner-lg">
              <h1>О нас</h1>
              <p>Кадровое агентство Взлет оказывает качественные услуги по легальному трудоустройству граждан КР за рубежом.
                Мы помогаем нашим соотечественникам найти сезонную или постоянную работу заграницей.
                Предлагаем широкий выбор вакансий для соискателей с разным опытом в сфере обслуживания,
                туристическом бизнесе, на заводах и фабриках, гипермаркетах и т.д.
                причем некоторые из них не требуют очень хорошего знания иностранного языка!
                Большой опыт и многолетние связи нашего агентства с иностранными работодателями служит залогом вашего
                успешного трудоустройства за рубежом! Мы осуществляем свою деятельность в строгом соответствии с нормами
                законодательства на основании лицензии, выданной Информационно-консультационным центром Государственной службы
          миграции КР.</p>
            </div>
            <Link className="button mt-4" to="#">Свяжитесь с нами</Link>
          </div>
        </section>


        <section className="section-padding magic-ball magic-ball-sm magic-ball-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                <div className="about-img">
                  <img className="img-fluid" src="img/home/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 align-self-center about-content">
                <h2>ПОЧЕМУ МЫ</h2>
                <p>Обратившись в компанию Взлет, вы сможете оценить преимущества такого сотрудничества:</p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
          <div className="container">
            <div className="section-intro text-center pb-90px">
              <img className="section-intro-img" src="img/home/section-icon.png" alt="" />
              <h2>Our client says</h2>
              <p>Fowl have fruit moveth male they are that place you will lesser</p>
            </div>


            <div className="owl-carousel owl-theme testimonial pb-xl-5">
              <div className="testimonial__item">
                <div className="row">
                  <div className="col-md-3 col-lg-2 align-self-center">
                    <div className="testimonial__img">
                      <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-10">
                    <div className="testimonial__content mt-3 mt-sm-0">
                      <h3>Daniel heart</h3>
                      <p>Project manager, Nestle</p>
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is
                        gathered god earth light for life may itself shall whales made they're blessed whales also made from
                  give may saying meat. There from heaven it lights face had</p>
                      <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="row">
                  <div className="col-md-3 col-lg-2 align-self-center">
                    <div className="testimonial__img">
                      <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-10">
                    <div className="testimonial__content mt-3 mt-sm-0">
                      <h3>Daniel heart</h3>
                      <p>Project manager, Nestle</p>
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is
                        gathered god earth light for life may itself shall whales made they're blessed whales also made from
                  give may saying meat. There from heaven it lights face had</p>
                      <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="row">
                  <div className="col-md-3 col-lg-2 align-self-center">
                    <div className="testimonial__img">
                      <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-10">
                    <div className="testimonial__content mt-3 mt-sm-0">
                      <h3>Daniel heart</h3>
                      <p>Project manager, Nestle</p>
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is
                        gathered god earth light for life may itself shall whales made they're blessed whales also made from
                  give may saying meat. There from heaven it lights face had</p>
                      <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 align-self-center mb-5 mb-lg-0">
                <div className="search-content">
                  <h2>Search suitable <br className="d-none d-xl-block" /> and affordable plan <br className="d-none d-xl-block" /> for
              your tour</h2>
                  <p>Make she'd moved divided air. Whose tree that replenish tone hath own upon them it multiply was blessed
              is lights make gathering so day dominion so creeping</p>
                  <Link className="button" to="#">Learn More</Link>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 offset-xl-1">
                <div className="search-wrapper">
                  <h3>Search Package</h3>

                  <form className="search-form" action="#">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="ti-search" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <select name="category" id="category">
                        <option value="disabled" disabled>Category</option>
                        <option value="8 AM">8 AM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select name="tourDucation" id="tourDuration">
                        <option value="disabled" disabled>Tour duration</option>
                        <option value="8 AM">8 AM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="date" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="ti-notepad" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <select name="priceRange" id="priceRange">
                        <option value="disabled" disabled>Price range</option>
                        <option value="8 AM">8 AM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="button border-0 mt-3" type="submit">Search Package</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    )
  }
}
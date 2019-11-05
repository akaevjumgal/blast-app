import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../../sections/footer';
import BaseScene from '../index';

export default class HomeScene extends BaseScene {

  render() {

    return (
      <div>
        <section className="hero-banner magic-ball">
          <div className="container">
            <div className="row align-items-center text-center text-md-left">
              <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                <h1>Мы компания <b>ВЗЛЁТ</b></h1>
                <p>РАБОТА ЗАГРАНИЦЕЙ ДЛЯ КЫРГЫЗСТАНЦЕВ</p>
                <Link className="button button-hero mt-4" to={'/about'}>Подробнее</Link>
              </div>
              <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
                <img className="img-fluid" src="img/home/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-margin generic-margin">
          <div className="container">
            <div className="section-intro text-center pb-90px">
              <img className="section-intro-img" src="img/home/section-icon.png" alt="" />
              <h2>ПОЧЕМУ МЫ</h2>
              <p>Обратившись в компанию Взлет, вы сможете оценить преимущества такого сотрудничества:</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="service-card text-center">
                  <div className="service-card-img">
                    <img className="img-fluid" src="img/home/service1.png" alt="" />
                  </div>
                  <div className="service-card-body">
                    <h3>Знание дела</h3>
                    <p>Получение исчерпывающих консультаций по любому вопросу.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="service-card text-center">
                  <div className="service-card-img">
                    <img className="img-fluid" src="img/home/service3.png" alt="" />
                  </div>
                  <div className="service-card-body">
                    <h3>Забота о клиентах</h3>
                    <p>Поиск и подбор вакансии с учетом ваших пожеланий и квалификации.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="service-card text-center">
                  <div className="service-card-img">
                    <img className="img-fluid" src="img/home/service2.png" alt="" />
                  </div>
                  <div className="service-card-body">
                    <h3>Надежность</h3>
                    <p>Трудоустройство с оформлением легальной рабочей визы.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray section-padding magic-ball magic-ball-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                <div className="about-img">
                  <img className="img-fluid" src="img/home/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 align-self-center about-content">
                <h2>Почему <b>ВЗЛЕТ выполняет обещанное?</b></h2>
                <p>Мы – молодая амбициозная команда профессионалов, работающая на
                    принципах доверия, честного выполнения социальной миссии компании – мы с полной ответственностью
                    помогаем Вам добиться поставленных карьерных и финансовых целей, понимая, что на нашей
                    ответственности лежит жизненное благосостояние других людей.

                    Кроме того, работа ВЗЛЕТ базируется на полноценном ресурсном фундаменте: наши контрагенты –
                    проверенные временем и успешным сотрудничеством работодатели и посредники, давно ставшие
                    партнерами и друзьями. Наши информационные базы охватывают вакансии практически всех
                    специализаций и условий трудоустройства.

                    Будем рады получить Ваш звонок или письмо с вопросами по трудоустройству за границей! И будьте
                  готовы: очень скоро Вы обретете работу, которая изменит Вашу жизнь к лучшему!</p>
                <Link className="button" to={'/about'}>Подробнее о нас</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-margin pb-xl-5">
          <div className="container">
            <div className="section-intro text-center pb-90px">
              <h2>Открытые вакансии</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="tour-card">
                  <img className="card-img rounded-0" src="img/mordovia-arena.jpg" alt="" />
                  <div className="tour-card-overlay">
                    <div className="media">
                      <div className="media-body">
                        <h4>Мордовия</h4>
                        <small>Упаковщик</small>
                        <p>Проживание бесплатно</p>
                      </div>
                      <div className="media-price">
                        <h4 className="text-primary">₽106/в час</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="tour-card">
                  <img className="card-img rounded-0" src="img/litva.jpg" alt="" />
                  <div className="tour-card-overlay">
                    <div className="media">
                      <div className="media-body">
                        <h4>Литва</h4>
                        <small>Водитель</small>
                        <p>От 23 до 50 лет</p>
                      </div>
                      <div className="media-price">
                        <h4 className="text-primary">€1250/в день</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="tour-card">
                    <img className="card-img rounded-0" src="img/troitsk.jpg" alt="" />
                    <div className="tour-card-overlay">
                      <div className="media">
                        <div className="media-body">
                          <h4>Россия - г. Троицк</h4>
                          <small>Уборщик</small>
                          <p>Предоставляется спец. одежда</p>
                        </div>
                        <div className="media-price">
                          <h4 className="text-primary">₽35000/в месяц</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="tour-card">
                    <img className="card-img rounded-0" src="img/estonia.jpg" alt="" />
                    <div className="tour-card-overlay">
                      <div className="media">
                        <div className="media-body">
                          <h4>Эстония - г. Таллин</h4>
                          <small>Слесарь - Сборщик</small>
                          <p>Профильное образование будет плюсом</p>
                        </div>
                        <div className="media-price">
                          <h4 className="text-primary">€7,5/в час</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
          <div className="container">
            <div className="section-intro text-center pb-90px">
              <img className="section-intro-img" src="img/home/section-icon.png" alt="" />
              <h2>Отзывы наших клиентов</h2>
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
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                          lights
                          face had is gathered god earth light for life may itself shall whales made they're
                          blessed whales also made from give may saying meat. There from heaven it lights face
                                    had</p>
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
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                          lights
                          face had is gathered god earth light for life may itself shall whales made they're
                          blessed whales also made from give may saying meat. There from heaven it lights face
                                    had</p>
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
                      <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                          lights
                          face had is gathered god earth light for life may itself shall whales made they're
                          blessed whales also made from give may saying meat. There from heaven it lights face
                                    had</p>
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
                  <h2>Заполни анкету <br className="d-none d-xl-block" /> мы подберем работу<br
                    className="d-none d-xl-block" /> и
                            свяжемся с вами</h2>
                  <p>Напишите коротко о себе, кем хотите работать и где работать.</p>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 offset-xl-1">
                <div className="search-wrapper">
                  <h3>Анкета</h3>

                  <form className="search-form" action="#">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Фамилия, имя, отчество" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="ti-user"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <select name="gender" id="gender">
                        <option value="disabled" disabled>Пол</option>
                        <option value="male">Мужчина</option>
                        <option value="female">Женщина</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="date" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="ti-notepad"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control"
                          placeholder="Адрес: село, город, район, область" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control"
                          placeholder="ID Паспорт: серия, номер, район, кем и когда выдан)" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Образование и специальносить" />
                      </div>
                    </div>
                    <div className="form-group">
                      <select name="familyStatus" id="familyStatus">
                        <option value="disabled" disabled>Семейное положение</option>
                        <option value="married">Женат/Замужем</option>
                        <option value="divorced">Разведен/Разведена</option>
                        <option value="single">Холост</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select name="hasChild" id="hasChild">
                        <option value="disabled" disabled>Наличие детей</option>
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                      </select>
                    </div>
                    <div className="form-group text-center">
                      <label>Какими языками владеете</label>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 text-left">
                        Русский
                                      </div>
                      <div className="col-lg-8">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio1" value="option1" />
                          <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio2" value="option2" />
                          <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio3" value="option3" />
                          <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio4" value="option4" />
                          <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio5" value="option5" />
                          <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio0" value="option0" />
                          <label className="form-check-label" htmlFor="inlineRadio0">Нет</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 text-left">
                        Английский
                                </div>
                      <div className="col-lg-8">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english1" value="option1" />
                          <label className="form-check-label" htmlFor="english1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english2" value="option2" />
                          <label className="form-check-label" htmlFor="english2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english3" value="option3" />
                          <label className="form-check-label" htmlFor="english3">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english4" value="option4" />
                          <label className="form-check-label" htmlFor="english4">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english5" value="option5" />
                          <label className="form-check-label" htmlFor="english5">5</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="englishRadioOptions"
                            id="english0" value="option0" />
                          <label className="form-check-label" htmlFor="english0">Нет</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="button border-0 mt-3" type="submit">Отправить</button>
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
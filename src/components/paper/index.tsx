import React from 'react'
import { Link } from 'react-router-dom'

const PaperInfoCard = () => (
  <div className="testimonial__item shadow">
    <div className="row">
      <div className="col-md-3 col-lg-2 align-self-center">
        <div className="testimonial__img">
          <img className="card-img rounded-0" src="img/icons/packing.svg" alt=""/>
        </div>
      </div>
      <div className="col-md-9 col-lg-10">
        <div className="testimonial__content mt-3 mt-sm-0">
          <h3>Мордовия</h3>
          <p>Упаковщик</p>
          <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
            lights
            face had is gathered god earth light for life may itself shall whales made they're
            blessed whales also made from give may saying meat. There from heaven it lights face
            had</p>
        </div>
        <div className="d-flex justify-content-end pt-3">
          <Link className="button" to={'/about'}>Подробнее</Link>
        </div>
      </div>
    </div>
  </div>
)

export default PaperInfoCard
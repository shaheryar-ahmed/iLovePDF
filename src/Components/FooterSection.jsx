import React from 'react'

const FooterSection = () => {
  return (
    <div>
      <section className='py-5' style={{ backgroundColor: "#f5f5fa" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5 className='text-danger fw-bold'>ILOVEPDF</h5>
              <ul className='list-unstyled'>
                <li><a className='nav-link py-1' href="">Home</a></li>
                <li><a className='nav-link py-1' href="">Features</a></li>
                <li><a className='nav-link py-1' href="">Pricing</a></li>
                <li><a className='nav-link py-1' href="">Tools</a></li>
                <li><a className='nav-link py-1' href="">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className='text-danger fw-bold'>PRODUCT</h5>
              <ul className='list-unstyled'>
                <li><a className='nav-link py-1' href="">iLovePDF Desktop</a></li>
                <li><a className='nav-link py-1' href="">iLovePDF Mobile</a></li>
                <li><a className='nav-link py-1' href="">Developers</a></li>
                <li><a className='nav-link py-1' href="">Wordpress Plugin</a></li>
                <li><a className='nav-link py-1' href="">iloveimg.com</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className='text-danger fw-bold'>SOLUTIONS</h5>
              <ul className='list-unstyled'>
                <li><a className='nav-link py-1' href="">Business</a></li>
                <li><a className='nav-link py-1' href="">Education</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 className='text-danger fw-bold'>COMPANY</h5>
              <ul className='list-unstyled'>
                <li><a className='nav-link py-1' href="">Our Story</a></li>
                <li><a className='nav-link py-1' href="">Blog</a></li>
                <li><a className='nav-link py-1' href="">Press</a></li>
                <li><a className='nav-link py-1' href="">Legal & Privacy</a></li>
                <li><a className='nav-link py-1' href="">Contact</a></li>
              </ul>
            </div>
          </div>
          <ul className='list-unstyled d-flex justify-content-end  '>
            <li>
              <a href="">
                <img src="https://www.ilovepdf.com/img/logos/google_play.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className='ps-2' src="https://www.ilovepdf.com/img/logos/app_store.svg" alt="" />
              </a>
            </li>
          </ul>
          <div>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-8">
              
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default FooterSection

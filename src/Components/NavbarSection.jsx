import React from 'react'

const NavbarSection = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className='img-fluid logo-responsive' src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="iLovePDF" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">MERGE PDF</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SPLIT PDF</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">COMPRESS PDF</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CONVERT PDF
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <ul>
                      <li><div>CONVERT TO PDF</div></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          JPG to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-word" style={{ color: '#5e83c7' }} />
                          WORD to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-powerpoint" style={{ color: '#fe7650' }} />
                          POWERPOINT to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          EXCEL to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          HTML to PDF
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><div>CONVERT TO PDF</div></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to JPG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to WORD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to POWERPOINT
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to EXCEL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to PDF/A
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CONVERT PDF
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <ul>
                      <li><div>CONVERT TO PDF</div></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          JPG to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-word" style={{ color: '#5e83c7' }} />
                          WORD to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-powerpoint" style={{ color: '#fe7650' }} />
                          POWERPOINT to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          EXCEL to PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          HTML to PDF
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><div>CONVERT TO PDF</div></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to JPG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to WORD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to POWERPOINT
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to EXCEL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-file-image" style={{ color: '#ffd501' }} />
                          PDF to PDF/A
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="navbar-brand" href="/">
                  <i className="fa-solid fa-desktop" style={{ color: '#000000' }} />
                </a>
             </li>
            </ul>
          </div>
          <div className=''>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Log in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign up</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/">
                  <i className="fa-solid fa-bars" style={{ color: '#000000' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </section>
  )
}

export default NavbarSection

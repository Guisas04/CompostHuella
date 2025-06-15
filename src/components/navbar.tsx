import { useEffect } from 'react';
import { NavbarLogin } from '../ts/login'


export function Navbar() {
  useEffect(() => {
    new NavbarLogin();
  }, []);

return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="/map">
                <i className="fa-solid fa-map-location-dot mr-2"></i>
                Onde estamos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="/formacoes">
                <i className="fa-solid fa-graduation-cap mr-2"></i>
                Formações
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="/info">
                <i className="fa-solid fa-question mr-2"></i>
                Informações
              </a>
            </li>
            
            {/* Login Dropdown */}
            <li className="nav-item dropdown" id="loginDropdown">
              <a 
                className="nav-link dropdown-toggle d-flex align-items-center" 
                href="#" 
                role="button" 
                data-toggle="dropdown"
              >
                <i className="fa-solid fa-right-to-bracket mr-2"></i>
                Login
              </a>
              <div className="dropdown-menu">
                <form className="px-3 py-2 dropdown-item login-dropdown">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="exampleDropdownFormEmail1" 
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="exampleDropdownFormPassword1" 
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="dropdownCheck"
                    />
                    <label className="form-check-label" htmlFor="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Forgot password?
                </a>
              </div>
            </li>

            {/* Account Dropdown */}
            <li className="nav-item dropdown" id="accountDropdown">
              <a 
                className="nav-link dropdown-toggle d-flex align-items-center" 
                href="#" 
                role="button" 
                data-toggle="dropdown"
              >
                <i className="fa-regular fa-circle-user mr-2"></i>
                Conta
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cog mr-2"></i>Configurações
                </a>
                <a className="dropdown-item" href="/dashboard">
                  <i className="fas fa-chart-line mr-2"></i>Dashboard
                </a>
                <a className="dropdown-item text-danger" href="#">
                  <i className="fas fa-sign-out-alt mr-2"></i>Terminar Sessão
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
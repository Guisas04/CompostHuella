export const Navbar = (): string => {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/assets/logo.svg" alt="Logo">
                </a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="/map">
                                <i class="fa-solid fa-map-location-dot mr-2"></i>
                                Onde estamos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="/formacoes">
                                <i class="fa-solid fa-graduation-cap mr-2"></i>
                                Formações
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="/info">
                                <i class="fa-solid fa-question mr-2"></i>
                                Informações
                            </a>
                        </li>                        
                        <li class="nav-item dropdown" id="loginDropdown">
                            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="dropdownMenu" role="button" data-toggle="dropdown">
                                <i class="fa-solid fa-right-to-bracket mr-2"></i>
                                Login
                            </a>
                            <div class="dropdown-menu">
                                <form class="px-3 py-2 dropdown-item login-dropdown">
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                    Forgot password?
                                </a>
                            </div>
                        </li>

                        <li class="nav-item dropdown" id="accountDropdown">
                            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="dropdownMenu" role="button" data-toggle="dropdown">
                                <i class="fa-regular fa-circle-user mr-2"></i>
                                Conta
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cog mr-2"></i>Configurações
                                </a>
                                <a class="dropdown-item" href="/dashboard">
                                    <i class="fas fa-chart-line mr-2"></i>Dashboard
                                </a>
                                <a class="dropdown-item text-danger" href="#">
                                    <i class="fas fa-sign-out-alt mr-2"></i>Terminar Sessão
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <script src="/js/login.js"></script>
        </nav>
    `;
};
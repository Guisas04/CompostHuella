export class NavbarLogin {
  private loginDropdown: HTMLElement | null;
  private accountDropdown: HTMLElement | null;
  private loginForm: HTMLFormElement | null;
  private logoutButton: HTMLElement | null;
  private isLoggedIn: boolean;

  constructor() {
    this.loginDropdown = document.getElementById('loginDropdown');
    this.accountDropdown = document.getElementById('accountDropdown');
    this.loginForm = document.querySelector('.login-dropdown');
    this.logoutButton = document.querySelector('.dropdown-item.text-danger');
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    this.init();
  }

  private init() {
    if (sessionStorage.getItem('isLoggedIn') === null) {
      sessionStorage.setItem('isLoggedIn', 'false');
      this.isLoggedIn = false;
    }

    this.updateNavbarState();
    this.setupEventListeners();
  }

  private updateNavbarState() {
    if (this.loginDropdown && this.accountDropdown) {
      this.loginDropdown.style.display = this.isLoggedIn ? 'none' : 'block';
      this.accountDropdown.style.display = this.isLoggedIn ? 'block' : 'none';
    }
  }

  private setupEventListeners() {
    if (this.loginForm) {
      this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    if (this.logoutButton) {
      this.logoutButton.addEventListener('click', (e) => this.handleLogout(e));
    }
  }

  private handleLogin(e: Event) {
    e.preventDefault();
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.reload();
  }

  private handleLogout(e: Event) {
    e.preventDefault();
    sessionStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
  }
}
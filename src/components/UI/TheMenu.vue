<template>
  <div>
    <slot></slot>
  </div>
  <!-- -->
</template>

<style>
.hamburger-menu {
  display: none;
}
.navbar {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 70%;
  padding: 10px;
}

.scrolled {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background-color: rgba(43, 45, 42, 1);
  border-radius: 20px;
  transition: all 0.5s;
}

.navbar:first-child {
  margin-left: 9rem;
}

.logo img {
  width: 80%;
}
.menu {
  list-style: none;
  padding: 0;
  margin: 0;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.menu li {
  display: inline-block;
  margin-left: 20px;
}

.menu li:first-child {
  margin-left: 0;
}

.menu li:last-child {
  margin-right: 9rem;
}

.menu a {
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}

.menu a:hover {
  color: #99cc00;
}

.active a {
  color: #99cc00;
}

@media only screen and (max-width: 768px) {
  .navbar {
    position: fixed;
    width: 80%;
    padding: 10px;
  }

  .scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    background-color: rgba(43, 45, 42, 1);
    transition: all 0.5s;
    padding-bottom: 15px;
  }

  .logo img {
    width: 60%;
  }

  .navbar:first-child {
    margin-left: 2rem;
  }

  .hamburger-menu {
    position: absolute;
    font-size: 40px;
    top: 1.4rem;
    right: 2rem;
    cursor: pointer;
    display: block;
    color: #99cc00;
  }

  .menu {
    position: absolute;
    top: 8rem;
    right: 2rem;
    padding: 1rem;
    z-index: 101000;
    background-color: #282924;
    border-radius: 20px;
    transition: height 0.3s ease;
  }

  .menu li {
    display: block;
    margin: 30px 0;
    text-align: center;
  }

  .menu li:last-child {
    margin-right: 0; /* Resetuj margines dla ostatniego elementu menu */
  }

  .menu a {
    color: #ffffff; /* Kolor tekstu */
    font-size: 20px; /* Rozmiar czcionki */
    display: block; /* Ustawienie na blok, aby zajmował całą szerokość menu */
    font-weight: normal;
  }

  .menu a:hover {
    color: #99cc00; /* Kolor tekstu po najechaniu */
  }

  .active a {
    color: #99cc00; /* Kolor tekstu dla aktywnego elementu */
  }

  /* Pokaż menu po kliknięciu na ikonę hamburgera */
  .show-menu .menu {
    height: auto;
    opacity: 1;
  }

  .menu-toggle {
    width: 60px;
    height: 40px;
    cursor: pointer;
    position: relative;
  }

  #nav-icon {
    
    margin-bottom: 4px;
    width: 40px;
    height: 35pxpx;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon span:nth-child(1) {
    top: 5px;
  }

  #nav-icon span:nth-child(2),
  #nav-icon span:nth-child(3) {
    top: 20px;
  }

  #nav-icon span:nth-child(4) {
    top: 36px;
  }

  #nav-icon.animate span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon.animate span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: rgb(221, 32, 32);
  }

  #nav-icon.animate span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: rgb(221, 32, 32);
  }

  #nav-icon.animate span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
}
</style>

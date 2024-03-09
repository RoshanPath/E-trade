document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="e-trade.CSS" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="responsive.css">
    <title>E-Trade</title>
  </head>
  <body>

    <div class="nav-bar-section clearfix">
      <div id="nav1" class="navbar1 clearfix">
        <div class="left">
          <ul>
            <li>
              <a href=""
                >English<i
                  class="fa-solid fa-chevron-down fa-sm"
                  style="color: #9dabc3"
                ></i
              ></a>
            </li>
            <li>
              <a href=""
                >USD<i
                  class="fa-solid fa-chevron-down fa-sm"
                  style="color: #9dabc3"
                ></i
              ></a>
            </li>
          </ul>
        </div>

        <div class="right">
          <ul>
            <li><a href="">Help</a></li>
            <li><a href="">Join Us</a></li>
            <li><a href="">Sign In</a></li>
          </ul>
        </div>
      </div>

      <div id="nav2" class="navbar2 clearfix">
        <div id="navigation1">
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
            alt=""
          />
        </div>
        <div id="navigation2">
          <ul>
            <li>
              <a href="index.html"
                >Home</a>
            </li>
            <li>
              <a href="shop.html"
                >Shop</a>
            </li>
            <li>
              <a href="about.html"
                >About</a>
            </li>
            <li>
              <a href=""
                >Contact Us</a>
            </li>
            <li>
              <a href=""
                >Blog</a>
            </li>
          </ul>
        </div>
        <div id="navigation3">
        <div class="link-icon-section">
        <i class="fa-solid fa-user fa-xl"></i>
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
        <i class="fa-regular fa-heart fa-xl"></i>
        </div>
          <button class="menu-btn" onclick="openNav()">
            <i id="bars" class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div id="side-nav" class="slide-menu">
        <button class="close-btn" onclick="closeNav()">&times;</button>
        <a href="index.html" class="slide-link">Home</a>
        <a href="shop.html" class="slide-link">Shop</a>
        <a href="about.html" class="slide-link">About Us</a>
        <a href="" class="slide-link">Contact Us</a>
        <a href="" class="slide-link">Blog</a>
        <a href="" class="slide-link">Help</a>

      </div>
    </div>`)
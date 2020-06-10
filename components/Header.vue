<template>
  <header class="kopa-page-header-1">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-6 col-xs-6 text-left">
          <!-- hamburger-menu -->

          <div class="kopa-logo">
            <nuxt-link to="/">
              <img src="/images/header/logo.png" alt />
            </nuxt-link>
          </div>
          <!-- logo -->
        </div>
        <!-- col-md-2 -->

        <div class="col-md-8 col-sm-0 col-xs-0">
          <nav class="main-nav">
            <ul class="main-menu sf-menu">
              <li class="current-menu-item">
                <nuxt-link to="/">صفحه اصلی</nuxt-link>
              </li>
              <!-- <li>
                  <a href="header-1.html">استایل هدر</a>
                  <ul>
                    <li>
                      <a href="header-1.html">Header Style 1</a>
                    </li>
                    <li>
                      <a href="header-2.html">Header Style 2</a>
                    </li>
                    <li>
                      <a href="header-3.html">Header Style 3</a>
                    </li>
                    <li>
                      <a href="header-4.html">Header Style 4</a>
                    </li>
                  </ul>
              </li>-->
              <li>
                <nuxt-link to="/books">فروشگاه</nuxt-link>
                <ul>
                  <li>
                    <nuxt-link to="/books">دسته بندی</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/cart">سبد خرید</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/check-out">پیش فاکتور</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/about">درباره ما</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/auth">کاربران</nuxt-link>
                <ul>
                  <li>
                    <nuxt-link to="/auth">ثبت نام</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/auth">ورود</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- main-nav -->
        </div>
        <!-- col-md-8 -->

        <div class="col-md-2 col-sm-6 col-xs-6 text-right">
          <div class="kopa-cart kopa-dropdown">
            <b-badge pill variant="danger" class="icon-dan">1</b-badge>
            <span class="ti-shopping-cart kopa-dropdown-btn"></span>

            <div class="kopa-dropdown-content">
              <div class="cart-product-list">
                <ul class="clearfix">
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="/images/header/1.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">این عنوان کتاب است</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="/images/header/2.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">این عنوان کتاب است</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="/images/header/3.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">این عنوان کتاب است</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                </ul>
              </div>
              <div class="cart-product-bottom">
                <div class="kopa-pull-left">
                  <h6>$68.00</h6>
                  <span>04 items</span>
                </div>
                <div class="kopa-pull-right">
                  <a class="kopa-btn-3" href="#">Check out</a>
                </div>
              </div>
            </div>
          </div>
          <!-- cart -->

          <div class="dashboard">
            <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
              <template v-slot:button-content>
                <div class="short-nav kopa-dropdown">
                  <div class="kopa-btn-1 kopa-dropdown-btn">
                    <span></span>
                  </div>
                </div>
              </template>
              <div class="sub-dash">
              <b-dropdown-item>کتاب های من</b-dropdown-item>
              <b-dropdown-item>سبد خرید</b-dropdown-item>
              <b-dropdown-item>حساب کاربری من</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item >خروج از حساب کاربری</b-dropdown-item>
              </div>
            </b-dropdown>
          </div>
          <!-- short-nav -->

          <div class="kopa-search-box-1 kopa-dropdown">
            <span class="ti-search kopa-dropdown-btn"></span>
            <form action="#" class="search-form-1 kopa-dropdown-content" method="get">
              <input
                class="search-text"
                type="text"
                onblur="if (this.value == '')
                                    this.value = this.defaultValue;"
                onfocus="if (this.value == this.defaultValue)
                                    this.value = '';"
                value="Search..."
                placeholder="Search..."
                name="s"
              />
            </form>
          </div>
          <!-- search-box -->
        </div>
        <!-- col-md-2 -->
      </div>
      <!-- row -->
    </div>
  </header>
  <!-- kopa-page-header-1 -->
</template>
<script>
/* eslint-disable */
export default {
  components: {}
};
</script>
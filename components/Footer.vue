<template>
  <div>
    <div class="bottom-sidebar kopa-area white-text-style style-01">
      <div class="kopa-area-tg-4">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-5">
            <div class="widget reading-module-intro-2">
              <div class="widget-content">
                <a href="#">
                  <img src="/images/header/logo.png" class="img-rad" alt />
                </a>
                <p class="para-fot">
                  وقتی وارد یک فروشگاه کتاب می‌شوی، حس خوبی به آدم دست می‌دهد. این ‌که کتاب را برمی‌داری و چند برگی از آن را ورق میزنی، شوق کتاب‌خوانی در وجودت اوج می گیرد. راستش، همین که بوی کتاب نو به مشام می‌رسد، آدم هوس کتاب می‌کند و دوست دارد بیشتر و بیشتر کتاب بخواند.
                  در فروشگاه‌های مجازی، این حس و حال کمتر به چشم می‌خورد و آدم آن نزدیکی واقعی با کتاب را ندارد. اما فروشگاه ما هم حرف‌هایی برای گفتن دارد. اگرچه در فروشگاه اینترنتی ، خبری از بوی کتاب نیست، اما جایی است که برای تجربه‌ی یک خرید خوب می‌شود روی آن حساب کرد.
                </p>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-3 -->

          <div class="col-md-3 col-sm-3 col-xs-3">
            <div class="widget widget_nav_menu ct-widget-1 users-fot">
              <ul class="clearfix">
                <li>
                  <nuxt-link to="/auth/register">ثبت نام</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/auth/login">ورود</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about">درباره ما</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about">شرایط و قوانین</nuxt-link>
                </li>
              </ul>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-3 -->

          <div class="col-md-4 col-sm-4 col-xs-4">
            <div class="widget widget_nav_menu ct-widget-1 contact">
              <p class="widget-title c-fot">راه های ارتباطی با ما</p>
              <div class="kopa-social-links style-02">
                <ul class="clearfix">
                  <li>
                    <nuxt-link to="/" class="fa fa-facebook"></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/" class="fa fa-twitter"></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/" class="fa fa-instagram"></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/" class="fa fa-rss"></nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-3 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- bottom-sidebar -->
    <footer class="kopa-footer">
      <div class="container">
        <div class="kopa-pull-left">
          <p class="copyright">
            طراحی و توسعه توسط 
            <a href="https://profile.ir/etemad" target="_blank">سارا اعتمادیان</a> - همه قوانین محفوط می‌باشد.
          </p>
        </div>
      </div>
      <!-- container -->
    </footer>

    <nuxt-link to="/" class="scroll-up">
      <span class="ti-arrow-up"></span>
    </nuxt-link>
  </div>
</template>
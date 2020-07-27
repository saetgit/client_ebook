<template>
<html lang="en">
  <!-- Mirrored from dinhvankiem.com/demo/e-reading/html/shop-detail-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Jan 2020 05:13:06 GMT -->
  <!-- Added by HTTrack -->
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <!-- /Added by HTTrack -->
  <body class="woocommerce woocommerce-page">
    <div class="main-container">
      <div id="main-content">
        <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
          <div class="kopa-area-tg-5">
            <span></span>
          </div>

          <div class="container">
            <div class="kopa-breadcrumb">
              <h3>جزئیات محصول</h3>

              <div class="breadcrumb-content">
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <nuxt-link to="/">
                    <span itemprop="title">خانه</span>
                  </nuxt-link>
                </span>
                <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <a itemprop="url" class="current-page">
                    <span itemprop="title">جزئیات محصول</span>
                  </a>
                </span>
              </div>
            </div>
            <!-- kopa-breadcrumb -->
          </div>
          <!-- container -->
        </section>
        <!-- kopa-area-16 -->

        <section class="kopa-area kopa-area-20">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div itemscope itemtype="http://schema.org/Product" class="product">
                  <div class="woocommerce-area-1">
                    <div class="images">
                      <a
                        href="/images/p26/1.jpg"
                        itemprop="image"
                        class="woocommerce-main-image zoom"
                        title
                        data-rel="prettyPhoto[product-gallery]"
                      >
                        <img src="/images/p26/1.jpg" alt />
                      </a>
                      
                    </div>
                    <div class="summary entry-summary">
              
                      <div class="clearfix"></div>
                      <h1 itemprop="name" class="product_title entry-title">{{book.Title}} </h1>
                      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                        <p class="price">
                          <del>
                            <span class="amount">50.000تومان</span>
                          </del>
                          <ins>
                            <span class="amount">40.000تومان</span>
                          </ins>
                        </p>
                      </div>
                      <div itemprop="description">
                        <p
                          class="pa-deta"
                        >{{book.description}}</p>
                      </div>
                      <form class="cart" method="post" action="/cart">
                      
                        <input type="hidden" name="add-to-cart" value="86" />
                        <button
                          type="submit"
                          class="single_add_to_cart_button button alt"
                        >افزودن به سبد خرید</button>
                      </form>
                    </div>
                    <!-- summary -->
                  </div>
                </div>
              </div>
              <!-- col-md-9 -->
            </div>
            <!-- row -->
          </div>
          <!-- container -->
        </section>
        <!-- kopa-area-18 -->
      </div>
      <!-- main-content -->
    </div>
    <!-- main-container -->

    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/superfish.min.js"></script>
    <script src="js/jquery.navgoco.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/jquery.mousewheel.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/masonry.pkgd.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.sliderPro.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/jquery.matchHeight-min.js"></script>
    <script src="js/jquery.wow.js"></script>
    <script src="js/custom.js" charset="utf-8"></script>
  </body>

  <!-- Mirrored from dinhvankiem.com/demo/e-reading/html/shop-detail-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Jan 2020 05:13:06 GMT -->
</html>
</template>

<script>
export default {
  name: "Home",
  head: {
    title: "صفحه اصلی "
  },

 
  data() {
    return {
      books:[],
      btn_loading: false,
      permissionItems: [],
      url: null,
      photo: "",
      photoName: "",
      Title: null,
      description: null,
      auther: null,
      discount: null,
      rate: null,
      price: null,
      colorClass: null
    };
  },

  mounted() {
    this.gteProducts();
  },
  methods: {
    async gteProducts() {
      try {
        let res = await this.$axios.$get("/products/");
        if (res.success) {
          this.books = res.data;
          console.log('===========',this.books);
          
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

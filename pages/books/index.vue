<template>
  <div id="main-content">
    <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-5">
        <span></span>
      </div>

      <div class="container">
        <div class="kopa-breadcrumb">
          <h3>محصولات</h3>

          <div class="breadcrumb-content">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <nuxt-link to="/">
                <span itemprop="title">خانه</span>
              </nuxt-link>
            </span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" class="current-page">
                <span itemprop="title">محصولات</span>
              </a>
            </span>
          </div>
        </div>
        <!-- kopa-breadcrumb -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-16 -->

    <section class="kopa-area kopa-area-20 main-col style-01">
      <div class="container">
        <div class="row"></div>
        <!-- row -->

        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="woocommerce-main-primary">
              <div class="woocommerce-main-content">
                <div class="masonry-container row">
                  <!-- <BookItem v-for="item in books" :key="item.id" :book="item"/> -->
                </div>
              </div>
              <!-- woocommerce-main-content -->
            </div>
            <!-- woocommerce-main-primary -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-18 -->
  </div>
  <!-- main-content -->
</template>
<script>
// import BookItem from "../../components/Books/BookItem";
export default {
  name: "Books",
  head: {
    title: " نمایش همه  "
  },
  components: {
    // BookItem
  },
  data() {
    return {
      books: []
    };
  }
};
</script>
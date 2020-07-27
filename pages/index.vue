<template>
  <div class="main-container">
    <div id="main-content">
      <section class="kopa-area kopa-area-1 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <b-container>
          <b-row>
            <b-col md="12" sm="12" xs="12">
              <b-col class="widget reading-module-promo-1">
                <b-col class="widget-content">
                  <b-col class="promo-text promo-text-1">
                    <h1>فروشگاه کتاب الکترونیکی</h1>
                  </b-col>
                </b-col>
              </b-col>
              <!-- widget -->
            </b-col>
            <!-- col-md-12 -->
          </b-row>
          <!-- row -->

          <b-row>
            <div class="col-md-8 col-sm-12 col-xs-12 m-auto">
              <div class="widget reading-module-search-1">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="widget-content">
                      <h3>اینجا میتونی کتاب مورد نظر را جستجو کنی</h3>
                      <div class="search-box-1">
                        <form action="#" class="search-form-1" method="get">
                          <input
                            type="text"
                            value="عنوان، نویسنده، ناشر و ..."
                            name="s"
                            class="search-text"
                          />
                          <nuxt-link to="/books">
                            <button type="submit" class="search-submit kopa-btn-4">جستجو</button>
                          </nuxt-link>
                        </form>
                      </div>
                      <!--search-box-->
                    </div>
                  </div>
                  <!-- col-md-8 -->
                </div>
                <!-- row -->
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-12 -->
          </b-row>
          <!-- row -->
        </b-container>
      </section>
      <!-- kopa-area-1 -->

      <section class="kopa-area kopa-area-3">
        <div class="kopa-area-tg-2">
          <span></span>
        </div>

        <div class="kopa-area-tg-3">
          <span></span>
        </div>

        <div class="ct-icon-2">
          <span class="ti-microsoft-alt"></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-filter-1">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    آخرین
                    <span>محصولات</span>
                  </h3>
                  <p>با توجه به اینکه کتاب‌ها در دسته‌بندی‌های مختلف قرار داده شده‌اند میتوانید در زیر آنها را با توجه به دسته‌بندی‌ مربوطه فیلتر کنید</p>
                </header>
                <div class="widget-content">
                  

                  <div class="masonry-container row" v-if="books.length">
                    <BookItem v-for="item in books" :key="item.id" :book="item" />
                  </div>
                  <!-- masonry-container -->

                  <div class="text-center">
                    <nuxt-link class="kopa-btn-6" to="books/">نمایش همه</nuxt-link>
                  </div>
                </div>
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-12 -->
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-3 -->

      <!-- kopa-area-7 -->
    </div>
    <!-- main-content -->
  </div>
</template>

<script>
import BookItem from '../components/Books/BookItem';
export default {
  name: "Home",
  head: {
    title: "صفحه اصلی "
  },

  components: {
    BookItem
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
        let res = await this.$axios.$get("/products");
        if (res.success) {
          this.books = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

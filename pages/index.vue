<template>
  <div class="main-container">
    

    <div id="main-content">
      <section class="kopa-area kopa-area-1 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-promo-1">
                <div class="widget-content">
                  <div class="promo-text promo-text-1">
                    <span class="wow fadeInUpBig" data-wow-duration="0.4s" data-wow-delay="0.4s">m</span>
                    <span class="wow fadeInDownBig" data-wow-duration="0.4s" data-wow-delay="0.6s">i</span>
                    <span class="wow fadeInUpBig" data-wow-duration="0.4s" data-wow-delay="0.4s">x</span>
                    <span class="wow fadeInDownBig" data-wow-duration="0.4s" data-wow-delay="0.8s">e</span>
                    <span class="wow fadeInUpBig" data-wow-duration="0.4s" data-wow-delay="0.4s">d</span>
                  </div>
                </div>
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-12 -->
          </div>
          <!-- row -->

          <div class="row">
            <div class="col-md-8 col-sm-12 col-xs-12 m-auto">
              <div class="widget reading-module-search-1">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="widget-content">
                      <h3>اینجا میتونی کتاب مورد نظر را جستجو کنی</h3>
                      <div class="search-box-1">
                        <form action="#" class="search-form-1" method="get">
                          <input type="text" value="عنوان، نویسنده، ناشر و ..." name="s" class="search-text" />
                          <button type="submit" class="search-submit kopa-btn-4">جستجو</button>
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
          </div>
          <!-- row -->
        </div>
      </section>
      <!-- kopa-area-1 -->

      <section class="kopa-area kopa-area-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <!-- widget -->
            </div>
            <!-- col-md-12 -->
          </div>
          <!-- row -->

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-ads-1">
                <div class="widget-content">
                  <h3 class="ct-title-4">
                    Responsive
                    <span>Leaderboard AD Area</span>
                  </h3>
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
      <!-- kopa-area-2 -->

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
                  <header class="masonry-header">
                    <div class="masonry-filter style-01">
                      <a href="#" data-val="*" class="style-01 active">
                        <span></span>همه
                      </a>
                      <a href="#" data-val="1" class="style-02">
                        <span></span>مجله‌ها
                      </a>
                      <a href="#" data-val="2" class="style-03">
                        <span></span>طنز‌ها
                      </a>
                      <a href="#" data-val="3" class="style-04">
                        <span></span>کتاب‌ها
                      </a>
                      <a href="#" data-val="4" class="style-05">
                        <span></span>مقاله‌ها
                      </a>
                    </div>
                    <!-- masonry-filter -->
                    <a href="#" class="kopa-btn-5">نمایش همه</a>
                  </header>

                  <div class="masonry-container row">
                   <BookItem v-for="item in books" :key="item.id" :book="item"/>
                  </div>
                  <!-- masonry-container -->

                  <div class="text-center">
                    <a class="kopa-btn-6" href="#">نمایش همه</a>
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

      <section class="kopa-area kopa-area-7">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-sm-5 col-xs-5">
              <div class="widget reading-module-intro-1">
                <header class="widget-header style-02">
                  <h4 class="widget-sub-title">کتابخانه‌ای</h4>
                  <h3 class="widget-title">برای تمام سنین</h3>
                </header>
                <div class="widget-content">
                  <p>و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.</p>
                  <div class="ct-box-1">
                    <h5>دانلود اپلیکیشن</h5>
                    <p>
                      دانلود رایگان اپلیکیشن
                      <span class="txt-main-color">کتابخانه ‌</span>از طریق لینک‌های زیر:
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/p5/1.png" alt />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/p5/2.png" alt />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-5 -->

            <div class="col-md-7 col-sm-7 col-xs-7">
              <div class="widget reading-module-ads-2">
                <div class="widget-content">
                  <img
                    class="wow fadeInUp"
                    data-wow-duration="0.4s"
                    data-wow-delay="0.4s"
                    src="/images/p6/1.png"
                    alt
                  />
                  <img
                    class="wow fadeInUp"
                    data-wow-duration="0.4s"
                    data-wow-delay="0.6s"
                    src="/images/p6/2.png"
                    alt
                  />
                </div>
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-7 -->
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-7 -->
    </div>
    <!-- main-content -->

    

    
  </div>
</template>

<script>
import BookItem from "../components/Books/BookItem";
export default {
  name: "Home",
  components: {
    BookItem
  },
  data() {
    return {
      books: [
        {
          id: 1,
          img: "images/p2/1.jpg",
          type: "جدید",
          discount: "20%",
          title: "دالان بهشت",
          rate: 2,
          description:
            "این یک توضیحاتی درباره کتاب است",
          auther: "نازی صفوی",
          category: "رمان",
          colorClass: "style-01"
        },
        {
          id: 2,
          img: "images/p2/2.jpg",
          type: "جدید",
          discount: "20%",
          title: " آبنبات هل دار",
          rate: 5,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: " مهرداد صدقی",
          category: "طنز",
          colorClass: "style-02"
        },
        {
          id: 3,
          img: "images/p2/3.jpg",
          type: "پرفروش",
          discount: "$20",
          title: "قورباغه ات را قورت بده",
          rate: 2,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: " hossein bajan",
          category: "مجله",
          colorClass: "style-04"
        },
        {
          id: 4,
          img: "images/p2/4.jpg",
          type: "جدید",
          discount: "$20",
          title: "asar morkab",
          rate: 2,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: " sara etemadian",
          category: "طنز",
          colorClass: "style-03"
        },
        {
          id: 5,
          img: "images/p2/5.jpg",
          type: "پرفروش",
          discount: "$20",
          title: "مردان مریخی زنان ونوسی",
          rate: 3,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: "  جان گری",
          category: "مجله",
          colorClass: "style-02"
        },
        {
          id: 6,
          img: "images/p2/6.jpg",
          type: "جدید",
          discount: "$20",
          title: "برنامه نویسی",
          rate: 4,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: "عادل باژن",
          category: "طنز",
          colorClass: "style-03"
        },
        {
          id: 7,
          img: "images/p2/7.jpg",
          type: "پرفروش",
          discount: "$20",
          title: "مکاترونیک",
          rate: 5,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: " عادل باژن",
          category: "کتاب",
          colorClass: "style-01"
        },
        {
          id: 8,
          img: "images/p2/8.jpg",
          type: "جدید",
          discount: "$20",
          title: "کیف انگلیسی",
          rate: 3,
          description:"این یک توضیحاتی درباره کتاب است",
          auther: " جان دئو",
          category: "کتاب",
          colorClass: "style-04"
        }
      ]
    };
  }
};
</script>
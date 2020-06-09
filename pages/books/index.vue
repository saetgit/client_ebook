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
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                               <nuxt-link to="/">
                    <span itemprop="title">خانه</span>
                  </nuxt-link>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
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

                    <div class="row">
                    
                        
                    
                    </div>
                    <!-- row --> 

                    <div class="row">
                    
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="woocommerce-main-primary">

                                <div class="woocommerce-main-content">

                                    <div class="masonry-container row">
                                        <BookItem v-for="item in books" :key="item.id" :book="item"/>
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
import BookItem from "../../components/Books/BookItem";
export default {
  name: "Books",
  components: {
    BookItem
  },
  data() {
    return {
      books: [
        {
          id: 1,
          img: "../images/p2/1.jpg",
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
          img: "../images/p2/2.jpg",
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
          img: "../images/p2/3.jpg",
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
          img: "../images/p2/4.jpg",
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
          img: "../images/p2/5.jpg",
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
          img: "../images/p2/6.jpg",
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
          img: "../images/p2/7.jpg",
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
          img: "../images/p2/8.jpg",
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
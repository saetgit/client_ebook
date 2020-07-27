<template>
  <div id="main-content">
    <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-5">
        <span></span>
      </div>

      <div class="container">
        <div class="kopa-breadcrumb">
          <h3>سبدخرید</h3>

          <div class="breadcrumb-content">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <nuxt-link to="/">
                <span itemprop="title">خانه</span>
              </nuxt-link>
            </span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" class="current-page">
                <span itemprop="title">سبد خرید</span>
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
        <article class="type-page">
          <header class="entry-header">
            <h1 class="entry-title">سبد خرید</h1>
          </header>
          <!-- .entry-header -->
          <div class="entry-content">
            <div class="woocommerce">
              <form action="#" method="post">
                <table class="shop_table shop_table_responsive cart">
                  <thead class="tr-cart">
                    <tr>
                      <th class="product-thumbnail">&nbsp;</th>
                      <th class="product-name">محصولات</th>
                      <th class="product-auther" style="text-align:right">نویسنده</th>
                      <th class="product-price">قیمت</th>
                      <th class="product-remove">حذف</th>
                    </tr>
                  </thead>
                  <tbody class="tb-cart">
                    <tr v-for="item in cart" :key="item.id" class="cart_item">
                      <td class="product-thumbnail">
                        <a href="#">
                          <img :src="img_url +item.Product.img" class alt />
                        </a>
                      </td>
                      <td class="product-name" data-title="Product">
                        <a href="#">{{item.Product.Title}}</a>
                      </td>
                      <td class="product-name" data-title="Product">
                        <a href="#">{{item.Product.auther}}</a>
                      </td>
                      <td class="product-price" data-title="Price">
                        <span class="amount">{{item.Product.price}}تومان</span>
                      </td>

                      <td class="product-remove">
                        <a @click="destroy(item.Product.id)" class="remove" title>×</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div class="cart-collaterals">
                <div class="cart_totals">
                  <h2>کل سبد خرید</h2>
                  <table class="shop_table shop_table_responsive">
                    <tbody class="total-cart">
                      <th>جمع</th>
                      <tr v-for="item in cart" :key="item.id" class="cart-subtotal">
                        <td data-title="Subtotal">
                          <span class="amount col-lg-12">{{item.Product.price}}تومان</span>
                        </td>
                      </tr>
                      <th>جمع کل</th>
                      <tr class="order-total">
                        <td data-title="Total">
                          <strong>
                            <span>{{sum}}</span>
                            <span class="amount">تومان</span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="wc-proceed-to-checkout">
                    <nuxt-link to="/check-out" class="checkout-button button alt wc-forward">پرداخت</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .entry-content -->
        </article>
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-18 -->
  </div>
  <!-- main-content -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  head: {
    title: " سبد خرید "
  },
  data() {
    return {
      sum: 0,
      img_url: "http://localhost:5005/uploads/"
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      count: "cart/getCount",
      cart: "cart/getCart"
    })
  },
  mounted() {
    this.getCart();
  },
  methods: {
    async getCart() {
      try {
        let res = await this.$axios.$get("/products/myCart");
        if (res.success) {
          this.$store.dispatch("cart/setCart", res.data);
          this.$store.dispatch("cart/setCount", res.data.length);

          for (const item of this.cart) {
            this.sum += parseInt(item.Product.price);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async destroy(id) {
      try {
        let res = await this.$axios.$delete("/products/deleteFromCart/" + id);
        if (res.success) {
          this.$toast.success(res.message, {
            theme: "bubble",
            duration: 5000
          });
          this.getCart();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
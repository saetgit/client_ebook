<template>
  <div id="main-content">
    <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-5">
        <span></span>
      </div>
      <div class="container">
        <div class="kopa-breadcrumb">
          <h3>پیش فاکتور</h3>
          <div class="breadcrumb-content">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <nuxt-link to="/">
                <span itemprop="title">خانه</span>
              </nuxt-link>
            </span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" class="current-page">
                <span itemprop="title">پیش فاکتور</span>
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
            <h1 class="entry-title">فاکتور</h1>
          </header>
          <!-- entry-header -->
          <div class="entry-content">
            <div class="woocommerce">
              <form name="checkout" method="post" class="checkout woocommerce-checkout" action="#">
                <div class="col2-set" id="customer_details">
                  <div class="col-12">
                    <div class="woocommerce-billing-fields">
                      <h3>جزئیات صورتحساب</h3>

                      <p class="form-row form-row-first">
                        <label>نام</label>
                        <input type="text" class="input-text" value v-model="form.name" />
                      </p>
                      <p class="form-row form-row-last">
                        <label>نام خانوادگی</label>
                        <input type="text" class="input-text" value v-model="form.family" />
                      </p>
                      <div class="clear"></div>

                      <p class="form-row form-row-first">
                        <label>ایمیل</label>
                        <input type="email" class="input-text" value v-model="form.email" />
                      </p>
                      <p class="form-row form-row-last">
                        <label>شماره همراه</label>
                        <input type="tel" class="input-text" value v-model="form.mobile" />
                      </p>
                      <div class="clear"></div>

                      <p class="form-row form-row-wide">
                        <label>آدرس</label>
                        <input type="text" class="input-text" value v-model="form.address" />
                      </p>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>

                <h3>سفارش شما</h3>
                <div class="woocommerce-checkout-review-order">
                  <table class="shop_table" v-if="cart.length">
                    <thead>
                      <tr>
                        <th class="product-name">محصول</th>
                        <th class="product-total">جمع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in cart" :key="item.id" class="cart_item">
                        <td class="product-name">{{item.Product.Title}}</td>
                        <td class="product-total">
                          <span class="amount">{{item.Product.price}}تومان</span>
                        </td>
                      </tr>
                    </tbody>

                    <tfoot class="tfoot">
                      <tr class="order-total">
                        <th>جمع کل</th>
                        <td>
                          <strong>
                            <span>{{sum}}</span>
                            <span class="amount">تومان</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div id="payment">
                    <div class="form-row place-order">
                      <a>
                        <input type="button" @click="order()"  class="button alt" id="place_order" value="سفارش" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- entry-content -->
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
    title: " پیش فاکتور "
  },
  data() {
    return {
      form: {
        username: null,
        email: null,
        name: null,
        family: null,
        password: null,
        mobile: null,
        phone: null,
        address: null,
        website: null
      },
      sum: 0
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
    this.form.username = this.$auth.user.username;
    this.form.website = this.$auth.user.website;
    this.form.email = this.$auth.user.email;
    this.form.name = this.$auth.user.name;
    this.form.family = this.$auth.user.family;
    this.form.mobile = this.$auth.user.mobile;
    this.form.phone = this.$auth.user.phone;
    this.form.address = this.$auth.user.address;
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
    async order(){
        try {
        let res = await this.$axios.$get("/products/orderd");
        if (res.success) {
          this.$toast.success(res.message, {
            theme: "bubble",
            duration: 5000
          });
          this.getCart();
          this.$router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
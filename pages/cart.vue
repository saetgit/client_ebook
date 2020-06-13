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
                      <th class="product-price">قیمت</th>
                      <th class="product-quantity">تعداد</th>
                      <th class="product-subtotal">جمع</th>
                      <th class="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody class="tb-cart">
                    <tr class="cart_item">
                      <td class="product-thumbnail">
                        <a href="#">
                          <img src="images/header/1.jpg" class alt />
                        </a>
                      </td>
                      <td class="product-name" data-title="Product">
                        <a href="#">دالان بهشت</a>
                      </td>
                      <td class="product-price" data-title="Price">
                        <span class="amount">50.000تومان</span>
                      </td>
                      <td class="product-quantity" data-title="Quantity">
                        <div class="quantity">
                          <input
                            type="number"
                            step="1"
                            min="0"
                            value="1"
                            class="input-text qty text"
                            size="4"
                          />
                        </div>
                      </td>
                      <td class="product-subtotal" data-title="Total">
                        <span class="amount">50.000تومان</span>
                      </td>
                      <td class="product-remove">
                        <a href="#" class="remove" title>×</a>
                      </td>
                    </tr>

                    <tr>
                      <td colspan="6" class="actions">
                        <div class="coupon">
                          <label for="coupon_code">کد تخفیف:</label>
                          <input
                            type="text"
                            name="coupon_code"
                            class="input-text"
                            id="coupon_code"
                            value
                            placeholder="کد تخفیف خود را وارد کنید."
                            style="float:right"
                          />
                          <nuxt-link to="/cart">
                          <input
                            type="submit"
                            class="button"
                            name="apply_coupon"
                            value="ثبت کد"
                            style="float:left;background-color:#ff4057;margin-right:10px;color:#fff"
                          />
                          </nuxt-link>
                        </div>
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
                      <tr class="cart-subtotal">
                        <th>جمع</th>
                        <td data-title="Subtotal">
                          <span class="amount">50.000تومان</span>
                        </td>
                      </tr>
                      <tr class="order-total">
                        <th>جمع کل</th>
                        <td data-title="Total">
                          <strong>
                            <span class="amount">50.000تومان</span>
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
export default {
    head: {
    title: " سبد خرید "
  },
}
</script>
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
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="/">
                                    <span itemprop="title">خانه</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
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
                                                    <input type="text" class="input-text" value="">
                                                </p>
                                                <p class="form-row form-row-last">
                                                    <label>نام خانوادگی</label>
                                                    <input type="text" class="input-text" value="">
                                                </p>
                                                <div class="clear"></div>

                                                <p class="form-row form-row-wide">
                                                    <label>نام شرکت</label>
                                                    <input type="text" class="input-text" value="">
                                                </p>

                                                <p class="form-row form-row-first">
                                                    <label>ایمیل</label>
                                                    <input type="email" class="input-text" value="">
                                                </p>
                                                <p class="form-row form-row-last">
                                                    <label>شماره همراه</label>
                                                    <input type="tel" class="input-text" value="">
                                                </p>
                                                <div class="clear"></div>

                                                <p class="form-row form-row-wide">
                                                    <label>کشور</label>
                                                    <select>
                                                        <option value="">کشور مورد نظر را اانتخاب منید</option>
                                                        <option value="iran" >ایران </option>
                                                        <option value="iraq">عراق</option>
                                                        <option value="india">هند</option>
                                                        <option value="afq">افغانستان</option>
                                                        <option value="etc">سایر</option>

                                                        </select>
                                                </p>

                                                <p class="form-row form-row-wide">
                                                    <label>آدرس</label>
                                                    <input type="text" class="input-text" value="">
                                                </p>
                                              
                                                <p class="form-row form-row-wide">
                                                    <label> شهر </label>
                                                    <input type="text" class="input-text" value="">
                                                </p>

                                                
                                                <div class="clear"></div>

                                            </div>

                                        </div>
                                    </div>

                                    <h3>سفارش شما</h3>
                                    <div class="woocommerce-checkout-review-order">
                                        <table class="shop_table">
                                            <thead>
                                                <tr>
                                                    <th class="product-name">محصول</th>
                                                    <th class="product-total">جمع</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                                
                                                <tr class="cart_item">
                                                    <td class="product-name">
                                                        دالان بهشت&nbsp;                            
                                                        <strong class="product-quantity">× 1</strong>                                                  
                                                    </td>
                                                    <td class="product-total">
                                                        <span class="amount">50.000تومان</span>                      
                                                    </td>
                                                </tr>

                                            </tbody>

                                            <tfoot class="tfoot">
                                                <tr class="cart-subtotal">
                                                    <th>جمع</th>
                                                    <td><span class="amount">50.000تومان</span></td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>جمع کل</th>
                                                    <td><strong><span class="amount">50.000تومان</span></strong> </td>
                                                </tr>
                                            </tfoot>

                                        </table>
                                        <div id="payment">
                                            <!-- <ul class="payment_methods">
                                                <li>متأسفیم ، به نظر می رسد هیچ روش پرداخت در دسترس برای ایالت شما وجود ندارد. لطفا در صورت نیاز به کمک یا مایل به ایجاد ترتیب های متفاوتی با ما تماس بگیرید.</li>
                                            </ul> -->
                                            <div class="form-row place-order">
                                                <input type="submit" class="button alt"  id="place_order" value="سفارش">   
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
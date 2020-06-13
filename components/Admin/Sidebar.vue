<template>
  <div class="row">
    <div class="col-sm-12">
      <!--left col-->

      <div class="text-center">
        <b-img
          src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="avatar img-circle img-thumbnail"
          alt="avatar"
          width="100"
          height="100"
        ></b-img>
        <b-form-file class="mt-3 text-center center-block file-upload" plain></b-form-file>

        <h3>سارا اعتمادیان</h3>
      </div>
      <hr />
      <br />

      <div class="col-sm-12 m-main" role="tablist">
        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button class="btn-sub-m" block v-b-toggle.accordion-1 variant="info">کاربران</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <nuxt-link to="/admin/">
                  <b-card-text>افزودن لیست</b-card-text>
                </nuxt-link>
                <nuxt-link to="/admin/list">
                  <b-card-text>لیست کاربران</b-card-text>
                </nuxt-link>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button class="btn-sub-m" block v-b-toggle.accordion-2 variant="info">محصولات من</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/products">
                <b-card-text>لیست محصولات</b-card-text>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button class="btn-sub-m" block v-b-toggle.accordion-3 variant="info">سفارشات من</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/orders">
                <b-card-text>لیست سفارشات</b-card-text>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {};
</script>
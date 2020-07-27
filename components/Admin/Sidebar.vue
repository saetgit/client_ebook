<template>
  <div class="row">
    <div class="col-sm-12">
      <!--left col-->

      <div class="text-center">
        <b-img style="width:100px;height:100px"
          :src="$auth.user.avatar"
          class="avatar img-circle img-thumbnail"
          alt="avatar"
          width="100"
          height="100"
        ></b-img>
        <input
          ref="image"
          style="display:none;"
          type="file"
          accept="image/*"
          @change="imageSelected"
        />
        <b-button variant="primary" @click="selectImage" :disabled="btn_loading">
          <btn-loading
            :loading="btn_loading"
            loadingText="لطفا منتظر بمانید"
            buttonText="تغییر تصویر"
            buttonIcon="fa fa-camera"
          />
        </b-button>
        <h3>{{ $auth.user.username}}</h3>
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
                <nuxt-link to="/admin/list">
                  <b-card-text>لیست کاربران</b-card-text>
                </nuxt-link>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button class="btn-sub-m" block v-b-toggle.accordion-5 variant="info">دسته بندی </b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/listcategory">
                <b-card-text>لیست دسته بندی</b-card-text>
              </nuxt-link>
            </b-card-body>
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/addcategory">
                <b-card-text>افزودن دسته بندی</b-card-text>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button class="btn-sub-m" block v-b-toggle.accordion-2 variant="info">محصولات </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/products">
                <b-card-text>لیست محصولات</b-card-text>
              </nuxt-link>
            </b-card-body>
            <b-card-body class="sub-m-body">
              <nuxt-link to="/admin/addproduct">
                <b-card-text>افزودن محصولات</b-card-text>
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
        <b-card no-body class="mb-1 m-sub">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button @click="logout()">
              <i class="fa fa-sign-out"></i>
              <span class="mr-1">خروج</span>
            </b-button>
          </b-card-header>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
   data: () => ({
    loading: true,
    btn_loading: false,
    btn_loading2: false,
    photo: "",
    photoName: ""
  }),
  methods: {
    async logout() {
      try {
        this.$auth.logout();
        this.$toast.success("شما با موفقیت خارج شدید", {
          theme: "bubble",
          duration: 5000
        });
      } catch (e) {}
    },
    selectImage() {
      this.photo = this.$refs.image.click();
    },
    imageSelected(e) {
      this.$emit("input", e.target.files[0]);
      this.photo = this.$refs.image.files[0];
      this.photoName = this.photo.name;
      this.uploadPhoto();
    },
    async uploadPhoto() {
      this.btn_loading = true;
      try {
        let formData = new FormData();
        formData.append("avatar", this.photo);
        let config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };

        let res = await this.$axios.$post("/users/avatar", formData, config);

        if (res.success) {
          this.btn_loading = false;
          this.$auth.fetchUser();
          this.$toast.success("تصویر پروفایل شما با موفقیت بروزرسانی شد!", {
            theme: "bubble",
            duration: 10000
          });
        }
      } catch (error) {
        if (error.response.status === 500) {
          if (
            error.response.data.error === "Only .jpeg or png files are accepted"
          ) {
            this.$toast.error(this.$t("only_jpeg_or_png_files_are_accepted"), {
              theme: "bubble",
              duration: 5000
            });
          } else if (error.response.data.error.message === "File too large") {
            this.$toast.error(this.$t("max_1MB_upload"), {
              theme: "bubble",
              duration: 5000
            });
          }
        }
        this.btn_loading = false;
      }
    },
  },
};
</script>

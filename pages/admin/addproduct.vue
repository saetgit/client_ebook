<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="8">
        <b-card no-body class="card-default">
          <div slot="header">
            <i class="fa fa-user-plus"></i>
            افزودن محصول
          </div>
          <b-card-body>
            <b-form @submit.stop.prevent="onSubmit">
              <b-row>
                <b-col sm="6">
                  <b-form-group
                    :label-cols="4"
                    :horizontal="true"
                    label="نام محصول"
                    label-for="Title"
                  >
                    <b-form-input
                      id="Title"
                      v-model="form.Title"
                      :state="validateState('Title')"
                      aria-describedby="Title-feedback"
                      type="text"
                      :disabled="false"
                    ></b-form-input>
                    <b-form-invalid-feedback id="Title-feedback">این فیلد اجباری است.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group
                    :label-cols="4"
                    :horizontal="true"
                    label="نویسنده "
                    label-for="auther"
                  >
                    <b-form-input
                      id="auther"
                      v-model="form.auther"
                      :state="validateState('auther')"
                      aria-describedby="auther-feedback"
                      type="text"
                      :disabled="false"
                    ></b-form-input>
                    <b-form-invalid-feedback id="auther-feedback">این فیلد اجباری است.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group
                    :label-cols="4"
                    :horizontal="true"
                    label="تخفیف "
                    label-for="discount"
                  >
                    <b-form-input
                      id="discount"
                      v-model="form.discount"
                      :state="validateState('discount')"
                      aria-describedby="discount-feedback"
                      type="text"
                      :disabled="false"
                    ></b-form-input>
                    <b-form-invalid-feedback id="discount-feedback">این فیلد اجباری است.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group :label-cols="4" :horizontal="true" label="امتیاز " label-for="rate">
                    <b-form-input
                      id="rate"
                      v-model="form.rate"
                      :state="validateState('rate')"
                      aria-describedby="rate-feedback"
                      type="text"
                      :disabled="false"
                    ></b-form-input>
                    <b-form-invalid-feedback id="rate-feedback">این فیلد اجباری است.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group :label-cols="4" :horizontal="true" label="قیمت  " label-for="price">
                    <b-form-input
                      id="price"
                      v-model="form.price"
                      :state="validateState('price')"
                      aria-describedby="rate-feedback"
                      type="text"
                      :disabled="false"
                    ></b-form-input>
                    <b-form-invalid-feedback id="rate-feedback">این فیلد اجباری است.</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <!-- <b-form-select v-model="form.colorClass"
                  :options="categoriesItems"></b-form-select>-->
                  <b-form-group
                    :label-cols="4"
                    :horizontal="true"
                    label="دسته بندی"
                    label-for="colorClass"
                  >
                    <b-form-select
                      class="custom-select2"
                      v-model="form.colorClass"
                      :options="categoriesItems"
                      :state="validateState('colorClass')"
                      aria-describedby="colorClass-feedback"
                      value-field="id"
                      text-field="category"
                      return-object
                      id="colorClass"
                    ></b-form-select>
                    <b-form-invalid-feedback id="colorClass-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col sm="12">
                  <b-form-group :horizontal="false" label="توضیحات" label-for="description">
                    <b-form-textarea
                      v-model="form.description"
                      :state="validateState('description')"
                      aria-describedby="description-feedback"
                      id="description"
                      size="sm"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="description-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="2"></b-col>
                <b-col sm="10">
                  <b-button type="submit" variant="primary" :disabled="btn_loading">
                    <btn-loading
                      :loading="btn_loading"
                      loadingText="لطفا صبر کنید"
                      buttonText="ثبت"
                    />
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="4">
        <b-card no-body class="card-default">
          <div slot="header">
            <i class="fa fa-user-circle"></i>
            عکس
          </div>
          <b-card-body>
            <b-row>
              <b-col sm="12">
                <div class="avatar-wrapper">
                  <img v-if="!url" src="~static/img/avatars/no_avatar.jpg" class="img-avatar" />
                  <img v-if="url" :src="url" class="img-avatar" />
                  <input
                    ref="image"
                    style="display:none;"
                    type="file"
                    accept="image/*"
                    @change="imageSelected"
                  />
                  <button @click="selectImage" :disabled="btn_loading">
                    <i class="fa fa-camera"></i>
                  </button>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

 <script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "addProduct",
  middleware: "adminauth",
  layout: "admin",
  components: {
    //     ManageSkill
  },
  head: {
    title: "افزودن کارمند جدید"
  },

  data() {
    return {
      categoriesItems: [],

      btn_loading: false,
      url: null,
      photo: "",
      photoName: "",
      form: {
        Title: null,
        description: null,
        auther: null,
        discount: null,
        rate: null,
        price: null,
        colorClass: null
      }
    };
  },
  validations: {
    form: {
      Title: { required },
      description: { required },
      auther: { required },
      discount: { required },
      rate: { required },
      price: { required },
      colorClass: {}
    }
  },

  mounted() {
    this.category();
  },
  methods: {
    async category() {
      try {
        let res = await this.$axios.$get("/categories");
        if (res.success) {
          this.categoriesItems = res.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    selectImage() {
      this.photo = this.$refs.image.click();
    },
    imageSelected(e) {
      this.$emit("input", e.target.files[0]);
      this.photo = this.$refs.image.files[0];
      this.photoName = this.photo.name;
      // show image in img tag before upload
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    async registerWithImg() {
      this.btn_loading = true;
      try {
        let formData = new FormData();
        formData.append("img", this.photo);
        formData.append("Title", this.form.Title);
        formData.append("description", this.form.description);
        formData.append("auther", this.form.auther);
        formData.append("discount", this.form.discount);
        formData.append("rate", this.form.rate);
        formData.append("price", this.form.price);
        formData.append("colorClass", this.form.colorClass);

        let config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };

        let res = await this.$axios.$post(
          "/products/addProduct",
          formData,
          config
        );

        if (res.success) {
          this.btn_loading = false;
          this.$toast.success("ثبت با موفقیت انجام شد", {
            theme: "bubble",
            duration: 10000
          });

          this.resetForm();
        }
      } catch (error) {
        if (error.response.status === 500) {
          if (
            error.response.data.error === "Only .jpeg or png files are accepted"
          ) {
            this.$toast.error("فقط فایل با پسوند عکس را بار گذاری کنید", {
              theme: "bubble",
              duration: 5000
            });
          } else if (error.response.data.error.message === "File too large") {
            this.$toast.error("بیشتر از1مگ ", {
              theme: "bubble",
              duration: 5000
            });
          }
        }
        this.btn_loading = false;
      }
    },
    async register() {
      this.btn_loading = true;
      try {
        let res = await this.$axios.post("/products/addProduct", this.form);
        if (res.data.success) {
          this.resetForm();
          this.btn_loading = false;

          this.$toast.success("ثبت با موفقیت", {
            theme: "bubble",
            duration: 5000
          });
        }
      } catch (error) {
        this.btn_loading = false;
        if (error.response.status === 422) {
          let details = error.response.data.details;

          for (const msg of details) {
            this.$toast.error(msg.message, {
              theme: "bubble",
              duration: 5000
            });
          }
        } else if (error.response.status === 409) {
          if (
            error.response.data.message === "Error, Username already exist!"
          ) {
            this.$toast.error("کاربر وجود ندارد", {
              theme: "bubble",
              duration: 5000
            });
          } else if (
            error.response.data.message === "Error, Email already exist!"
          ) {
            this.$toast.error("ایمیل نامعتبر است", {
              theme: "bubble",
              duration: 5000
            });
          }
        }
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        Title: null,
        description: null,
        auther: null,
        discount: null,
        rate: null,
        price: null,
        colorClass: null
      };

      this.$nextTick(() => {
        this.$v.form.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.registerWithImg();
      // color class nemikhad vakhted hadar mire, baadesham uno to bayad baste be category khodet ok koni na inja sab koni

      // if (this.photo) {
      //   this.registerWithImg();
      // } else {
      //   this.register();
      // }
    }
  }
};
</script>

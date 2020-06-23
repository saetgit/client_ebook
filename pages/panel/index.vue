<template>
  <div class="animated fadeIn">
    <b-col sm="12" md="12">
      <b-card no-body class="card-default">
        <div slot="header">
          <i class="fa fa-user-plus"></i>
          <span>ویرایش اطلاعات کاربری</span>
        </div>
        <b-card-body>
          <b-form @submit.stop.prevent="onSubmit">
            <b-row>
              <b-col sm="6">
                <b-form-group
                  :label-cols="4"
                  :horizontal="true"
                  label="نام کاربری"
                  label-for="username"
                >
                  <b-form-input
                    id="username"
                    v-model="form.username"
                    :state="validateState('username')"
                    aria-describedby="username-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="username-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group :label-cols="4" :horizontal="true" label="ایمیل" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    :state="validateState('email')"
                    aria-describedby="email-feedback"
                    type="email"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="email-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group :label-cols="4" :horizontal="true" label="نام " label-for="name">
                  <b-form-input
                    id="name"
                    v-model="form.name"
                    :state="validateState('name')"
                    aria-describedby="name-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="name-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group :label-cols="4" :horizontal="true" label="فامیل" label-for="family">
                  <b-form-input
                    id="family"
                    v-model="form.family"
                    :state="validateState('family')"
                    aria-describedby="family-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="family-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <!-- <b-col sm="6">
                <b-form-group
                  :label-cols="4"
                  :horizontal="true"
                  label="رمز عبور"
                  label-for="password"
                >
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    :state="validateState('password')"
                    aria-describedby="password-feedback"
                    type="password"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="password-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>-->
              <b-col sm="6">
                <b-form-group :label-cols="4" :horizontal="true" label="موبایل" label-for="mobile">
                  <b-form-input
                    id="mobile"
                    v-model="form.mobile"
                    :state="validateState('mobile')"
                    aria-describedby="mobile-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="mobile-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group
                  :label-cols="4"
                  :horizontal="true"
                  label="تلفن ثابت"
                  label-for="phone"
                >
                  <b-form-input
                    id="phone"
                    v-model="form.phone"
                    :state="validateState('phone')"
                    aria-describedby="phone-feedback"
                    :class="form.url ? 'text-l' : 'text-r'"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="phone-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group
                  :label-cols="4"
                  :horizontal="true"
                  label="وب سایت"
                  label-for="website"
                >
                  <b-form-input
                    id="website"
                    v-model="form.website"
                    :state="validateState('website')"
                    aria-describedby="website-feedback"
                    :class="form.url ? 'text-l' : 'text-r'"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="website-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col sm="12">
                <b-form-group :label-cols="2" :horizontal="false" label="آدرس" label-for="address">
                  <b-form-textarea
                    id="address"
                    v-model="form.address"
                    :state="validateState('address')"
                    aria-describedby="address-feedback"
                    size="sm"
                  ></b-form-textarea>
                  <b-form-invalid-feedback id="address-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col sm="6"></b-col>
            </b-row>
            <b-row>
              <b-col sm="2"></b-col>
              <b-col sm="10">
                <b-button
                  type="submit"
                  class="single_add_to_cart_button button alt"
                  variant="primary"
                  :disabled="btn_loading"
                >
                  <btn-loading :loading="btn_loading" loadingText="لطفا صبر کنید" buttonText="ثبت" />
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  name: "add-new-user",
  layout: "panel",
  head: {
    title: "اطلاعات شخصی"
  },
  data() {
    return {
      btn_loading: false,
      permissionItems: [],
      url: null,
      photo: "",
      photoName: "",
      skillItems: [],
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
      }
    };
  },
  validations: {
    form: {
      username: { required },
      email: { required, email },
      name: { required },
      family: { required },
      password: { required },
      mobile: {},
      phone: {},
      website: {},
      address: { required }
    }
  },
  mounted() {
    console.log(this.$auth.user);

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
    // selectImage() {
    //   this.photo = this.$refs.image.click();
    // },
    // imageSelected(e) {
    //   this.$emit("input", e.target.files[0]);
    //   this.photo = this.$refs.image.files[0];
    //   this.photoName = this.photo.name;
    //   this.uploadPhoto();
    // },
    // async uploadPhoto() {
    //   this.btn_loading = true;
    //   try {
    //     let formData = new FormData();
    //     formData.append("avatar", this.photo);
    //     let config = {
    //       headers: {
    //         "content-type": "multipart/form-data"
    //       }
    //     };

    //     let res = await this.$axios.$post("/users/avatar", formData, config);

    //     if (res.success) {
    //       this.btn_loading = false;
    //       this.$auth.fetchUser();
    //       this.$toast.success(this.$t("profile_picture_updated"), {
    //         theme: "bubble",
    //         duration: 10000
    //       });
    //     }
    //   } catch (error) {
    //     if (error.response.status === 500) {
    //       if (
    //         error.response.data.error === "Only .jpeg or png files are accepted"
    //       ) {
    //         this.$toast.error(this.$t("only_jpeg_or_png_files_are_accepted"), {
    //           theme: "bubble",
    //           duration: 5000
    //         });
    //       } else if (error.response.data.error.message === "File too large") {
    //         this.$toast.error(this.$t("max_1MB_upload"), {
    //           theme: "bubble",
    //           duration: 5000
    //         });
    //       }
    //     }
    //     this.btn_loading = false;
    //   }
    // },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.updateUser();
    },
    // async updateUser() {
    //   let finalForm = {
    //     name: this.form.name,
    //     family: this.form.family,
    //     mobile: this.form.mobile,
    //     phone: this.form.phone,
    //     website: this.form.website,
    //     address: this.form.address,
    //     about: this.form.about
    //   };

    //   this.btn_loading2 = true;
    //   try {
    //     let res = await this.$axios.$post("/users/update", finalForm);

    //     if (res.success) {
    //       this.btn_loading2 = false;
    //       this.resetForm();
    //       this.$auth.fetchUser();
    //       this.$toast.success("ثبت نام شما با موفقیت انجام شد.", {
    //         theme: "bubble",
    //         duration: 5000
    //       });
    //     }
    //   } catch (error) {
    //     this.$toast.success("ثبت نام شما با موفقیت انجام شد.", {
    //         theme: "bubble",
    //         duration: 5000
    //   }
    // }
  }
};
</script>

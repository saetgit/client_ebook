<template>
  <div class="animated fadeIn">
    <b-col sm="12" md="12">
      <b-card no-body class="card-default">
        <div slot="header">
          <i class="fa fa-plus"></i>
          <span>افزودن دسته بندی جدید</span>
        </div>
        <b-card-body>
          <b-form @submit.stop.prevent="onSubmit">
            <b-row>
              <b-col sm="6">
                <b-form-group
                  :label-cols="4"
                  :horizontal="true"
                  label="نام دسته بندی"
                  label-for="category"
                >
                  <b-form-input
                    id="category"
                    v-model="form.category"
                    :state="validateState('category')"
                    aria-describedby="category-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
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
  middleware: "adminauth",
  name: "add-new-user",
  layout: "admin",
  head: {
    title: "افزودن دسته بندی"
  },
  data() {
    return {
      btn_loading: false,

      form: {
        category: null
      }
    };
  },
  validations: {
    form: {
      category: { required }
    }
  },
  mounted() {},
  methods: {
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
      console.log("==============================>");

      this.addcategory();
    },

    async addcategory() {
      this.btn_loading = true;
      try {
        let res = await this.$axios.post("/categories/addcategory", this.form);
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
  }
};
</script>

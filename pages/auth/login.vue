
<template>
  <div class="row login-reg">
    <div class="col-md-4 mx-auto p-0"></div>
    <div class="col-md-4 p-0 log-regi">
      <div class="card">
        <div class="login-box">
          <div class="login-snip">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">ورود</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">ثبت نام</label>
            <div class="login-space">
              <b-form @submit.stop.prevent="onSubmit">
                <div class="login">
                  <div class="group">
                    <b-col sm="12">
                      <b-form-group
                        :label-cols="4"
                        :horizontal="true"
                        label="نام کاربری"
                        label-for="email"
                      >
                        <b-form-input
                          id="email"
                          v-model="form.email"
                          :state="validateState('email')"
                          aria-describedby="email-feedback"
                          type="text"
                          class="input"
                          :disabled="false"
                        ></b-form-input>
                        <b-form-invalid-feedback id="email-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </div>
                  <div class="group">
                    <b-col sm="12">
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
                          class="input"
                        ></b-form-input>
                        <b-form-invalid-feedback id="password-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </div>

                  <div class="group">
                    <b-row>
                      <b-col sm="2"></b-col>
                      <b-col sm="10">
                        <b-button
                          type="submit"
                          class="single_add_to_cart_button button alt"
                          variant="primary"
                          :disabled="btn_loading"
                        >
                          <btn-loading
                            :loading="btn_loading"
                            loadingText="لطفا صبر کنید"
                            buttonText="ثبت"
                          />
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="hr"></div>
                  <div class="foot">
                    <a href="#">رمز خود را فراموش کرده اید؟</a>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mx-auto p-0"></div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  middleware: "guest",
  name: "Login",
  head: {
    title: "ورود"
  },
  layout: "clean",
  data() {
    return {
      btn_loading: false,
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(3)
      },
      password: {
        required
      }
    }
  },
  methods: {
    async login() {
      this.btn_loading = true;
      try {
        await this.$auth.loginWith("local", { data: this.form });
        if (this.$auth.user.type === "user") this.$router.push("/panel");
        else if (this.$auth.user.type === "admin") this.$router.push("/admin");
      } catch (error) {
        console.log(error);
        return;

        this.btn_loading = false;
        console.log("=================>", error.response);

        if (error.response.status === 500) {
          if (error.response.data.error === "User is inactive!") {
            this.$toast.error(this.$t("account_is_not_active"), {
              theme: "bubble",
              duration: 5000
            });
          } else {
            this.$toast.error(this.$t("email_or_password_incorrect"), {
              theme: "bubble",
              duration: 5000
            });
          }
        } else if (error.response.status === 401) {
          if (error.response.data === "Unauthorized") {
            this.$toast.error(this.$t("email_or_password_incorrect"), {
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
        email: null,
        password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        this.$toast.error(this.$t("email_and_password_required"), {
          theme: "bubble",
          duration: 5000
        });
        return;
      }

      this.login();
    },
    changeLang(lang) {
      if (lang === "fa") {
        this.$router.push("/auth/login");
      } else if (lang === "en") {
        this.$router.push("/en/auth/login");
      }
    }
  }
};
</script>
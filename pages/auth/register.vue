<template>
  <div class="row login-reg">
    <div class="col-md-4 mx-auto p-0"></div>
    <div class="col-md-4 p-0 log-regi">
      <div class="card">
        <div class="login-box">
          <div class="login-snip">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <input id="tab-2" type="radio" name="tab" class="sign-up" checked />
            <label for="tab-2" class="tab">ثبت نام</label>
            <div class="login-space">
              <b-form @submit.stop.prevent="onSubmit">
                <div class="sign-up-form">
                  <div class="group">
                    <b-col sm="12">
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
                          class="input"
                        ></b-form-input>
                        <b-form-invalid-feedback id="username-feedback">این فیلد اجباری است</b-form-invalid-feedback>
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

                  <!-- <div class="group">
                    <b-col sm="12">
                      <b-form-group
                        :label-cols="4"
                        :horizontal="true"
                        label="تکرار رمزعبور"
                        label-for="password"
                      >
                        <b-form-input
                          id="password-rep"
                          v-model="form.passwordrep"
                          :state="validateState('passwordrep')"
                          aria-describedby="password-feedback"
                          type="password"
                          :disabled="false"
                          class="input"
                          data-type="password"
                        ></b-form-input>
                        <b-form-invalid-feedback id="password-feedback">این فیلد اجباری است</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </div>-->
                  <div class="group">
                    <b-col sm="12">
                      <b-form-group
                        :label-cols="4"
                        :horizontal="true"
                        label="ایمیل"
                        label-for="email"
                      >
                        <b-form-input
                          id="email"
                          v-model="form.email"
                          :state="validateState('email')"
                          aria-describedby="email-feedback"
                          type="email"
                          :disabled="false"
                          class="input"
                        ></b-form-input>
                        <b-form-invalid-feedback id="email-feedback">این فیلد اجباری است</b-form-invalid-feedback>
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
                        >ثبت نام</b-button>
                      </b-col>
                    </b-row>
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
  name: "Register",
  head: {
    title: "ثبت نام"
  },
  layout: "clean",
  data() {
    return {
      form: {
        family: "",
        name: "",
        mobile: "",
        email: null,
        username: null,
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
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required
      }
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("/users/signup", this.form);

        await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        });

        if (this.$auth.user.type === "user") this.$router.push("/panel");
        else if (this.$auth.user.type === "admin") this.$router.push("/admin");

        this.$toast.success("ثبت نام شما با موفقیت انجام شد.", {
          theme: "bubble",
          duration: 5000
        });

      } catch (error) {
        console.log(error);
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        // email: null,
        // username: null,
        // password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log(this.form);

      this.register();
    }
  }
};
</script>

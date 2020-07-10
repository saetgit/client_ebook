<template>
  <span>
    <i class="icon-note pointer" v-b-tooltip.hover title="ویرایش اطلاعات کاربر" @click="showModal"></i>

    <!-- Edit user modal -->
    <b-modal size="lg" ref="edituser" hide-footer :title="'ویرایش کارمند'">
      <b-row>
        <b-col md="12">
          <b-form @submit.stop.prevent="onSubmit">
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    id="username"
                    :class="form.username ? 'text-l' : 'text-r'"
                    v-model="form.username"
                    :state="validateState('username')"
                    placeholder="نام کاربری"
                    aria-describedby="username-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="username-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    :class="form.email ? 'text-l' : 'text-r'"
                    placeholder="ایمیل"
                    id="email"
                    v-model="form.email"
                    :state="validateState('email')"
                    aria-describedby="email-feedback"
                    type="email"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="email-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    placeholder="نام"
                    id="name"
                    v-model="form.name"
                    :state="validateState('name')"
                    aria-describedby="name-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="name-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    placeholder="نام خانوادگی"
                    id="family"
                    v-model="form.family"
                    :state="validateState('family')"
                    aria-describedby="family-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="family-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    placeholder="تلفن همراه"
                    id="mobile"
                    :class="form.mobile ? 'text-l' : 'text-r'"
                    v-model="form.mobile"
                    :state="validateState('mobile')"
                    aria-describedby="mobile-feedback"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="mobile-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    placeholder="تلفن ثابت"
                    id="phone"
                    v-model="form.phone"
                    :state="validateState('phone')"
                    aria-describedby="phone-feedback"
                    :class="form.phone ? 'text-l' : 'text-r'"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="phone-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <b-form-input
                    placeholder="وب سایت"
                    id="website"
                    v-model="form.website"
                    :state="validateState('website')"
                    aria-describedby="website-feedback"
                    :class="form.website ? 'text-l' : 'text-r'"
                    type="text"
                    :disabled="false"
                  ></b-form-input>
                  <b-form-invalid-feedback id="website-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <!-- <b-col sm="6">
                <b-form-group>
                  <b-form-select
                    placeholder="مهارت"
                    v-model="form.skill"
                    :state="validateState('skill')"
                    aria-describedby="permission-feedback"
                    id="skill"
                    :options="skillItems"
                  ></b-form-select>
                  <b-form-invalid-feedback id="skill-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>-->
              <b-col sm="12">
                <b-form-group>
                  <b-form-textarea
                    placeholder="آدرس"
                    id="address"
                    v-model="form.address"
                    :state="validateState('address')"
                    aria-describedby="address-feedback"
                    size="sm"
                  ></b-form-textarea>
                  <b-form-invalid-feedback id="address-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col sm="12">
                <b-form-group>
                  <b-form-textarea
                    placeholder="درباره کارمند"
                    id="about"
                    v-model="form.about"
                    :state="validateState('about')"
                    aria-describedby="about-feedback"
                    size="sm"
                  ></b-form-textarea>
                  <b-form-invalid-feedback id="about-feedback">این فیلد اجباری است!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-button type="submit" variant="primary" :disabled="btn_loading">
                  <btn-loading
                    :loading="btn_loading"
                    loadingText="منتظر بمانید ..."
                    buttonText="بروزرسانی"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>
    <!-- End Edit user modal -->
  </span>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "edit-user",
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data: () => {
    return {
      btn_loading: false,
      form: {
        username: null,
        email: null,
        name: null,
        family: null,
        mobile: null,
        phone: null,
        address: null,
        website: null,
        about: null
      }
    };
  },
  validations: {
    form: {
      username: { required },
      email: { required },
      name: { required },
      family: { required },
      mobile: { required },
      phone: { required },
      website: { required },
      //   permission_group_id: { required },
      //   skill: { required },
      address: {},
      about: {}
    }
  },
  methods: {
    async update() {
      this.btn_loading = true;
      try {
        let res = await this.$axios.$put(
          "/users/update/" + this.user.id,
          this.form
        );

        if (res.success) {
          this.btn_loading = false;

          this.$toast.success("کارمند با موفقیت بروزرسانی شد!", {
            theme: "bubble",
            duration: 5000
          });

          this.$emit("updateUser", true);
          this.hideModal();
        }
      } catch (error) {
        console.log(error);
        this.btn_loading = false;
        if (error.response.status === 422) {
          let details = error.response.data.details;

          for (const msg of details) {
            this.$toast.error(msg.message, {
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
        username: null,
        email: null,
        name: null,
        family: null,
        mobile: null,
        phone: null,
        address: null,
        // permission_group_id: null,
        // skill: null,
        website: null,
        about: null
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

      this.update();
    },
    showModal() {
      this.$refs["edituser"].show();
    },
    hideModal() {
      this.$refs["edituser"].hide();
      this.resetForm();
    }
  },
  mounted() {
    this.form.username = this.user.username;
    this.form.email = this.user.email;
    this.form.name = this.user.name;
    this.form.family = this.user.family;
    this.form.mobile = this.user.mobile;
    this.form.phone = this.user.phone;
    this.form.website = this.user.website;
    this.form.address = this.user.address;
    // this.form.about = this.user.about;
    // this.form.skill = this.user.skill;
  }
};
</script>

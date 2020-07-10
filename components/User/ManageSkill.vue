<template>
  <b-card no-body class="card-default">
    <div slot="header">
      <i class="fa fa-cogs"></i>
      {{ $t("manage_skills") }}
    </div>
    <b-card-body>
      <b-tabs
        class="tab-persmission"
        v-model="tabIndex"
        content-class="mt-2"
        align="left"
      >
        <b-tab
          :title="updateId ? $t('edit_skill') : $t('add_new_skill')"
          active
        >
          <div>
            <b-row>
              <b-col md="12" class="mt-3">
                <b-alert show variant="info">{{
                  updateId
                    ? $t("you_in_edit_mode")
                    : $t("if_skill_does_not_exist")
                }}</b-alert>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-form @submit.stop.prevent="onSubmit">
              <b-row>
                <b-col sm="12">
                  <b-form-group>
                    <b-form-input
                      :placeholder="$t('skill')"
                      v-model="form.name"
                      :state="validateState('name')"
                      aria-describedby="name-feedback"
                      type="text"
                      id="name"
                    ></b-form-input>
                    <b-form-invalid-feedback id="name-feedback">{{
                      $t("field_required")
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-button
                    type="submit"
                    variant="primary"
                    :disabled="btn_loading"
                  >
                    <btn-loading
                      :loading="btn_loading"
                      :loadingText="$t('loading')"
                      :buttonText="btn_text"
                    />
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-tab>
        <b-tab :title="$t('list')">
          <div>
            <b-row>
              <b-col lg="12" sm="12">
                <b-form-group>
                  <b-input-group size="sm">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      id="filterInput"
                      :placeholder="$t('search') + ' ...'"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">{{
                        $t("clear")
                      }}</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-table
                  ref="selectableTable"
                  striped
                  hover
                  select-mode="multi"
                  selected-variant="warning"
                  :bordered="true"
                  :items="items"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :filter="filter"
                  :filterIncludedFields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  :fields="fields"
                  :busy="loading"
                  show-empty
                  small
                  :empty-filtered-text="$t('empty_filtered_text')"
                  :empty-text="$t('empty_text')"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(num)="row">{{
                    row.index + 1
                  }}</template>
                  <template v-slot:cell(name)="row">
                    <span>{{ row.item.name }}</span>
                  </template>
                  <template v-slot:cell(code)="row">
                    <div>{{ row.item.code | enNumToFa }}</div>
                  </template>
                  <template v-slot:cell(actions)="row">
                    <span class="m-l-1">
                      <i
                        class="icon-note pointer m-l-1"
                        v-b-tooltip.hover
                        :title="$t('edit')"
                        @click="updateSkill(row.item)"
                      ></i>
                    </span>
                    <span>
                      <i
                        class="icon-trash pointer"
                        @click="deleteConfirm(row.item.id)"
                        v-b-tooltip.hover
                        :title="$t('delete')"
                      ></i>
                    </span>
                  </template>
                  <template v-slot:table-busy>
                    <div class="text-center text-primary my-2">
                      <b-spinner
                        small
                        variant="primary"
                        class="align-middle"
                      ></b-spinner>
                      <strong class="m-r-2">{{ $t("loading") }}</strong>
                    </div>
                  </template>
                </b-table>
              </b-col>
              <b-col sm="12" md="12" class="mb-1">
                <b-form-group
                  :label="$t('per_page')"
                  label-cols-sm="10"
                  label-cols-md="8"
                  label-cols-lg="7"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-0"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="12" md="12">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </b-row>
          </div>
        </b-tab>
      </b-tabs>
    </b-card-body>
  </b-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "manageUserSkill",
  mixins: [validationMixin],
  data() {
    return {
      img_url: process.env.BASE_IMG_URL,
      tabIndex: 1,
      btn_text: this.$t("add"),
      btn_loading: false,
      loading: true,
      updateId: null,
      form: {
        name: null
      },
      nameState: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 40],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      submittedNames: [],
      fields: [
        {
          label: this.$t("skill"),
          key: "name",
          sortable: true,
          tdClass: "text-center"
        },
        {
          //   label: this.$t("actions"),
          label: "",
          key: "actions",
          sortable: false,
          tdClass: "text-center"
        }
      ],
      items: []
    };
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  validations: {
    form: {
      name: { required }
    }
  },
  mounted() {
    this.items = this.skills;
    this.totalRows = this.items.length;
    this.loading = false;
  },
  methods: {
    async destroy(id) {
      try {
        let res = await this.$axios.$delete("/custom/skill/" + id);

        if (res.success) {
          this.loadSkills();
          this.$emit("updateSkill", true);
          this.$toast.success(this.$t("skill_deleted"), {
            theme: "bubble",
            duration: 5000
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteConfirm(id) {
      this.$bvModal
        .msgBoxConfirm(this.$t("you_sure_delete_skill"), {
          title: this.$t("delete_skill_info"),
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: this.$t("ok_delete_it"),
          cancelTitle: this.$t("no"),
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          if (value) {
            this.destroy(id);
          }
        })
        .catch(err => {
          // An error occurred
        });
    },
    async updateSkill(item) {
      try {
        this.form.name = item.name;
        this.tabIndex = 0;

        this.updateId = item.id;
        this.btn_text = this.$t("update");
      } catch (error) {
        console.log(error);
      }
    },
    async updateData() {
      this.btn_loading = true;
      try {
        let res = await this.$axios.$put(
          "/custom/skill/" + this.updateId,
          this.form
        );

        if (res.success) {
          this.loadSkills();
          this.tabIndex = 1;
          this.$emit("updateSkill", true);
          this.resetForm();
          this.updateId = null;
          this.btn_loading = false;
          this.btn_text = this.$t("add");

          this.$toast.success(this.$t("skill_updated"), {
            theme: "bubble",
            duration: 5000
          });
        }
      } catch (error) {
        console.log(error);
        this.btn_loading = false;
      }
    },
    async register() {
      this.btn_loading = true;
      try {
        let res = await this.$axios.$post("/custom/skill/store", this.form);
        if (res.success) {
          this.loadSkills();
          this.$emit("updateSkill", true);
          this.tabIndex = 1;
          this.resetForm();
          this.$toast.success(this.$t("skill_registered"), {
            theme: "bubble",
            duration: 5000
          });
        } else {
          if (res.message === "Skill already exist") {
            this.$toast.error(this.$t("skill_already_exist"), {
              theme: "bubble",
              duration: 5000
            });
          }
        }
        this.btn_loading = false;
      } catch (error) {
        this.btn_loading = false;
        if (error) {
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
      }
    },
    async loadSkills() {
      this.loading = true;
      try {
        let res = await this.$axios.$get("/custom/skills");
        if (res.success) {
          this.items = res.data;
          this.totalRows = this.items.length;
          this.loading = false;
        }
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
        name: null
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
      this.updateId ? this.updateData() : this.register();
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  }
};
</script>

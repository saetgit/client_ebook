<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="12" dir="rtl">
        <b-card no-body class="card-default">
          <div slot="header">
            <i class="fa fa-list"></i> لیست کاربران
          </div>
          <b-card-body>
            <b-row>
              <b-col lg="6" class="my-1">
                <b-form-group
                  label="جستجو"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="filterInput"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      v-model="filter"
                      type="search"
                      id="filterInput"
                      placeholder="اینجا تایپ کنید ..."
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">پاک کن</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col lg="6" class="my-1">
                <b-form-group
                  label="مرتب سازی"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="sortBySelect"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-select
                      v-model="sortBy"
                      id="sortBySelect"
                      :options="sortOptions"
                      class="w-75"
                    >
                      <template v-slot:first>
                        <option value>-- هیچ کدام --</option>
                      </template>
                    </b-form-select>
                    <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                      <option :value="false">صعودی</option>
                      <option :value="true">نزولی</option>
                    </b-form-select>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-table
                  striped
                  hover
                  :bordered="true"
                  :items="items"
                  :fields="fields"
                  show-empty
                  small
                  stacked="md"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filterIncludedFields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  :empty-filtered-text="'هیچ رکوردی مطابق با جستجو شما پیدا نشد!'"
                  :empty-text="'هیچ رکوردی یافت نشد!'"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(num)="data">{{ data.index + 1 }}</template>
                  <template v-slot:cell(actions)="data">
                    
                    <span class="fa fa-trash pointer" @click="deleteProduct(data.item.id)"></span>
                  </template>
                  <template v-slot:cell(fullname)="data">
                    <span>{{data.item.name + ' ' + data.item.family}}</span>
                  </template>
                </b-table>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="5" md="6" class="my-1">
                <b-form-group
                  label="رکوردهای هر صفحه"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
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
              <b-col sm="7" md="6" class="my-1">
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
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>


export default {
  name: "manage-products",
  layout: "admin",
  components: {
    
  },
  head: {
    title: "لیست کاربران"
  },
  data() {
    return {
      email: null,
      name: "",
      nameState: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      submittedNames: [],
      fields: [
        {
          label: "#",
          key: "id",
          tdClass: "text-center"
        },
        {
          label: "نام کاربری",
          key: "username",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "نام و نام خانوادگی",
          key: "fullname",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "نوع کاربری",
          key: "type",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: " تاریخ عضویت",
          key: "createdAt",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "عملیات",
          key: "actions",
          sortable: false,
          tdClass: "text-center"
        }
      ],
      items: []
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    this.users();
    this.totalRows = this.items.length;
  },
  methods: {
    async users() {
      try {
        let res = await this.$axios.$get("/users");
        if (res.success) {
          this.items = res.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    loadAfterUpdate(event) {
      if (event) {
        this.users();
      }
    },
    deleteProduct(id) {
      alert(id);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the id of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    addEmial() {
      console.log(this.email);
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

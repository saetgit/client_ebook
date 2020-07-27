<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="12" dir="rtl">
        <b-card no-body class="card-default">
          <div slot="header">
            <i class="fa fa-clone"></i> لیست محصولات
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
                  <template v-slot:cell(product)="data">
                    <span>{{data.item.Product.Title}}</span>
                  </template>
                  <template v-slot:cell(user)="data">
                    <span>{{data.item.User.username}}</span>
                  </template>
                  <template v-slot:cell(price)="data">
                    <span>{{data.item.Product.price}}</span>
                  </template>
                  <template v-slot:cell(data)="data">
                    <span>{{data.item.Product.createdAt}}</span>
                  </template>
                  <template v-slot:cell(actions)="data">
                    <span class="fa fa-trash pointer" @click="deleteConfirm(data.item.id)"></span>
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
import { mapGetters } from "vuex";

export default {
  name: "user-products",
  layout: "panel",
  head: {
    title: "لیست سفارشات"
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
          label: "محصول",
          key: "product",
          sortable: true,
          tdClass: "text-left"
        },
        {
          label: "کاربر",
          key: "user",
          sortable: true,
          tdClass: "text-left"
        },
        {
          label: "قیمت",
          key: "price",
          sortable: true,
          tdClass: "text-left"
        },
        {
          label: "وضعیت ",
          key: "status",
          sortable: true,
          tdClass: "text-left"
        },
        {
          label: "تاریخ",
          key: "createdAt",
          sortable: true,
          tdClass: "text-left"
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
    ...mapGetters({
      count: "cart/getCount",
      cart: "cart/getCart"
    }),
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
    this.totalRows = this.items.length;
    this.gteProducts();
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the id of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    deleteConfirm(id) {
      let r = confirm("آیا می خواهید حذف کنید؟");
      if (r == true) {
        this.destroy(id);
      } else {
      }
    },
    async destroy(id) {
      try {
        let res = await this.$axios.$delete("/products/deleteFromOrder/"+ id);
        if (res.success) {
          this.gteProducts();
          this.$toast.success("hazf shod", {
            theme: "bubble",
            duration: 5000
          });
        } else{
          this.$toast.error(res.message, {
            theme: "bubble",
            duration: 5000
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async gteProducts() {
      try {
        let res = await this.$axios.$get("/products/ordersProduct");
        if (res.success) {
          this.items = res.data;
          this.totalRows = this.items.length;
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct(id) {
      alert(id);
    }
  }
};
</script>

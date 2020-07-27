<template>
  <div class="ms-item-01 show col-md-3 col-sm-3 col-xs-3" data-val="1">
    <article :class="'entry-item ct-item-1 '">
      <div class="entry-thumb">
        <nuxt-link :to="'/books/'+book.id">
          <img style="height:400px" :src="img_url +book.img" :alt="book.title" />
        </nuxt-link>
        <div class="entry-content">
          <header>
            <h4 class="entry-title">
              <nuxt-link :to="'/books/'+book.id" class="title-book">{{book.Title}}</nuxt-link>
            </h4>
            <div class="kopa-rating">
              <ul>
                <li v-for="(star,j) in book.rate" :key="'start'+j">
                  <span class="fa fa-star"></span>
                </li>

                <li v-for="(star,index) in 5-book.rate" :key="index" class="inactive">
                  <span class="fa fa-star"></span>
                </li>
              </ul>
            </div>
          </header>
          <p>{{book.description}}</p>
          <p class="ct-space-1"></p>
          <div class="ct-icon-1">
            <p>{{book.discount}}%</p>
          </div>
        </div>
      </div>
      <footer>
        <div class="ft-wrap style-01">
          <ul>
            <li>
              <nuxt-link to="/" class="auther-book">
                <i class="fa fa-user"></i>
                {{book.auther}}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <i class="fa fa-folder-o"></i>
                <!-- {{book.category}} -->
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="ft-wrap style-02">
          <ul>
           
            <li>
              <a @click="addToCart(book.id)">
                <i class="ti-shopping-cart"></i>
              </a>
            </li>
            <li>
              <nuxt-link :to="'/books/'+book.id">
                <i class="ti-new-window"></i>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </footer>
    </article>
  </div>
  <!-- masonry-item -->
</template>

<script>
export default {
  name: "book-component",
  data() {
    return {
      img_url: "http://localhost:5005/uploads/"
    };
  },
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {},
  methods: {
    async getCart() {
      try {
        let res = await this.$axios.$get("/products/myCart");
        if (res.success) {
          this.$store.dispatch("cart/setCart", res.data);
           this.$store.dispatch("cart/setCount", res.data.length);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart(id) {
      try {
        let res = await this.$axios.post("/products/cart", {
          product_id: id
        });
        if (res.data.success) {
          this.$toast.success("added to cart", {
            theme: "bubble",
            duration: 5000
          });
          this.getCart();
        }
      } catch (error) {}
    }
  }
};
</script>

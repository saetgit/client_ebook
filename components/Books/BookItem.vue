<template>
  <div class="ms-item-01 show col-md-3 col-sm-3 col-xs-3" data-val="1">
    <article :class="'entry-item ct-item-1 ' + book.colorClass">
      <div class="entry-thumb">
        <nuxt-link to="/books/detail">
          <img :src="book.img" alt />
        </nuxt-link>
        <div class="entry-content">
          <header>
            <h4 class="entry-title">
              <nuxt-link to="/books/detail" class="title-book">
              {{book.title}}</nuxt-link>
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
            <p>
              {{book.discount}}
            </p>
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
              <nuxt-link to="/" >
                <i class="fa fa-folder-o"></i>
                {{book.category}}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="ft-wrap style-02">
          <ul>
            <li>
              <div class="add-to-wishlist">
                <div>
                  <nuxt-link to="/" class="add_to_wishlist">
                    <i class="ti-heart"></i>
                  </nuxt-link>
                </div>
              </div>
            </li>
            <li>
              
              <nuxt-link to="/cart">
                <i class="ti-shopping-cart"></i>
              </nuxt-link>
              
            </li>
            <li>
              <nuxt-link to="/books/detail">
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
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
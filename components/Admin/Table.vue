<template>
  <div class="table-panel">
    <b-table class="table-panel" sticky-header :items="items"  head-variant="light"></b-table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  
  data() {
    return {
      items: [
        {
         ردیف: "1",
          عنوان: "دالان بهشت",
          وضعیت: "درحال بررسی",
          ویرایش:'<i class="glyphicon glyphicon-edit"></i>',
          حذف:'<i class="glyphicon glyphicon-edit"></i>'
        }
        
      ]
    };
  }
};
</script>
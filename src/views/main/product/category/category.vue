<template>
  <div class="category">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="category"
    ></page-content>
  </div>
</template>

<script>
import pageContent from '../../../../components/page-content/page-content.vue'
import PageSearch from '../../../../components/page-search/page-search.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
export default {
  name: 'category',
  components: { pageContent, PageSearch },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
}
</script>

<style scoped></style>

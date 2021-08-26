<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script>
import pageContent from '../../../../components/page-content/page-content.vue'
import PageSearch from '../../../../components/page-search/page-search.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
export default {
  components: { pageContent, PageSearch },
  name: 'role',
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
}
</script>

<style scoped></style>

<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @emitFormData="emitFormData"
      @emitReset="emitReset"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      :queryInfo="queryInfo"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script>
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import PageSearch from '../../../../components/page-search/page-search.vue'
import PageContent from '../../../../components/page-content/page-content.vue'

import { ref, reactive, watch } from 'vue'
export default {
  components: { PageSearch, PageContent },
  name: 'user',
  setup() {
    let queryInfo = ref({})
    const pageContentRef = ref()

    // 搜索查询
    const emitFormData = (formData) => {
      queryInfo = formData
      // 调用子页面的getDataList 请求
      pageContentRef.value.getDataList(queryInfo)
    }

    // 重置
    const emitReset = () => {
      pageContentRef.value.getDataList()
    }

    return {
      searchFormConfig,
      contentTableConfig,
      emitFormData,
      queryInfo,
      pageContentRef,
      emitReset
    }
  }
}
</script>

<style scoped></style>

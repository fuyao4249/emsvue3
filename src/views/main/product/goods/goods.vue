<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @emitFormData="emitFormData"
      @emitReset="emitReset"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
      :queryInfos="queryInfo"
    ></page-content>
  </div>
</template>

<script>
import pageContent from '../../../../components/page-content/page-content.vue'
import PageSearch from '../../../../components/page-search/page-search.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { ref } from 'vue'
export default {
  components: { pageContent, PageSearch },
  name: 'goods',
  setup() {
    // let queryInfo = ref({})
    const pageContentRef = ref()
    let queryInfo = ref()
    // 搜索查询
    const emitFormData = (formData) => {
      // 调用子页面的getDataList 请求
      queryInfo = formData
      pageContentRef.value.getDataList(formData)
    }

    // 重置
    const emitReset = () => {
      pageContentRef.value.getDataList()
    }

    return {
      contentTableConfig,
      searchFormConfig,
      emitFormData,
      emitReset,
      pageContentRef,
      queryInfo
    }
  }
}
</script>

<style scoped></style>

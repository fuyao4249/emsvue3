<template>
  <div>
    <fy-form v-bind="searchFormConfig" v-model="formData">
      <template #foot>
        <div class="btns">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleSearchClick"
            >搜索</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-magic-stick"
            @click="handleResetclick"
            >重置</el-button
          >
        </div>
      </template>
    </fy-form>
  </div>
</template>

<script>
import FyForm from '@/base-ui/form/src/FyForm.vue'
import { nextTick, ref } from 'vue'
export default {
  components: {
    FyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  emits: ['emitFormData', 'emitReset'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig.formItems ?? []
    let formOriginData = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 重置
    const handleResetclick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
      emit('emitReset')
    }

    // 搜索
    const handleSearchClick = () => {
      emit('emitFormData', formData.value)
    }
    return {
      formData,
      handleResetclick,
      handleSearchClick
    }
  }
}
</script>

<style lang="less" scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

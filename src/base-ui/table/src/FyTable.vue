<template>
  <div class="fy-table">
    <el-table :data="listData" border style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index" label="序号" width="80" align="center">
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          v-bind="propItem"
          align="center"
          :show-overflow-tooltip="true"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped></style>

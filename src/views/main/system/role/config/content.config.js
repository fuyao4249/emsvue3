export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '超级管理员', minWidth: '100' },
    { prop: 'intro', label: '角色权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    }
  ]
}

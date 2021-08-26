export const searchFormConfig = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  // colLayout: {
  //   span: 8
  // },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '管理员名称',
      placeholder: '请输入管理员名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限名',
      placeholder: '请输入权限'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}



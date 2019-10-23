<template>
  <div>
    <ele-form ref="ele-form"
              :inline="true"
              v-bind="config" />
  </div>
</template>

<script>
export default {
  data: () => ({
    config: {
      formDesc: {
        name: {
          label: '用户名称',
          type: 'input'
        }
      },
      formData: {}
    }
  })
}
</script>

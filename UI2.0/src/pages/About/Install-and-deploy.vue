<template>
    <div style="width:1600px">
        <q-markdown toc :src="content" show-copy  @data="onToc"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import content from 'assets/personal/doc/安装与部署.md'

export default defineComponent({
    data() {
        return {
            content
        }
    },
    methods: {
    onToc (toc) {
      // add the manual ones
      toc.push({ id: 'QMarkdown-API', label: 'QMarkdown API', level: 1, children: Array(0) })
      toc.push({ id: 'Donate', label: 'Donate', level: 1, children: Array(0) })

      this.toc = toc
    }
  }
})
</script>
    
<style>

</style>
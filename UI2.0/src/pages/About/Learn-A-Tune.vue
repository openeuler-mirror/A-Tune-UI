<template>
    <div style="width:1600px">
        <q-markdown :src="content" show-copy/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'
import content from 'assets/personal/doc/认识A-Tune.md'

export default defineComponent({
    data() {
        return {
            content,
            QMarkdown
        }
    }
})
</script>

<style>

</style>
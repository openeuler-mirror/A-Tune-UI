<template>
    <div style="width:1600px">
        <q-markdown :src="content" show-copy/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import content from 'assets/personal/doc/常见问题与解决方法.md'

export default defineComponent({
    data() {
        return {
            content
        }
    }
})
</script>

<style>

</style>
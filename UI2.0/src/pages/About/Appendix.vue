<template>
    <div style="width:1600px">
        <q-markdown toc :src="content" show-copy/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import content from 'assets/personal/doc/附录.md'

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
import listitem from './listitem'
<template>
    <div>
        <div v-for="(item, index) in items" :key="index"  >
        <listitem
            v-on:itemchanged="$emit('reloadlist')"
            :item="item"
            class="item"
            />
        </div>
    </div>
</template>
<script>
import listitem from './listitem'
export default {
    props: ['items'],
    components: {
        listitem
    }
}
</script>
<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>

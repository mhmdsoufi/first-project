<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <additem-form
                v-on:reloadlist="getlist()"
                />
        </div>
        <listview
        v-on:reloadlist="getlist()"
        :items="items"
        />
    </div>
</template>
<script>
import additemForm from './additemForm'
import listview from './listview'
export default {
    components: {
        additemForm,
        listview,
        },
    data(){
        return {
            items: []
        }
    },
    methods: {
        getlist () {
            axios.get('api/items')
            .then(response => {
                this.items= response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getlist();
    }
}
</script>
<style scoped>
.todoListContainer{
    width: 350px;
    margin: auto;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}
#title{
    text-align: center;

}
</style>

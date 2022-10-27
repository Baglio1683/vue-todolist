const {createApp} = Vue; 

createApp({

    data(){

        return{

        todoList : [ {text: "fare la spesa", done: true}, {text: "stirare", done: false}, {text: "lavare i piatti", done: true}, 
        {text: "lavare i vestiti", done: false}]

        }

    }, 

    methods : {

        delete_item(indexItem){
             
             this.todoList.splice(indexItem,1)

            }

        }


}).mount("#app")
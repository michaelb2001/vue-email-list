let vm = new Vue({
    el:'#app',
    data:{
        mails: []
    },
    mounted  : function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                console.log(risposta);
            })
            .catch(function (error){
                console.log(error);
            });
        }
});
let vm = new Vue({
    el:'#app',
    data:{
        mails: [],
        numeroMailDaGenerare : 10
    },
    methods:{
        aggiungiEmail:function(){
            for(let i=0; i < this.numeroMailDaGenerare; i++){
                this.mails=[];
                let mail ="";
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    console.log(risposta);
                    mail = risposta.data.response;
                    this.mails.push(mail);
                })
                .catch(function (error){
                    console.log(error);
                });
                
            }
 
  
        }
    },
    mounted  : function() {

        }
});
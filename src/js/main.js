new Vue({
    el:'#app',
    data:{
        state:true,
        inputName:'',
        names:[],
        showError:false,
        result:'',
    },
    methods:{
        addNameToList(){
            if(this.validate(this.inputName)){
                console.log('Valid')
                this.names.push(this.inputName)
                this.inputName = ''
                this.showError = false
            }else{
                console.log('Not Valid')
                this.showError = true
            }
        },
        removeName(index){
            this.names.splice(index, 1)
        },
        validate(value){
            if(value !== ''){
                return true
            }else{
                return false
            }
        },
        showResults(){
            let rand = this.names[Math.floor(Math.random() * this.names.length)]
            this.result = rand
            this.state = false
        },
        resetApp(){
            this.state = true
            this.names = []
            this.result = ''
        }
    }
})
console.log('JS-OK');

/*
dato un array di immagini

assegno v-show alle immagini

assegno con un valore booleano (v-show) la classe attiva ad una immagine presente nell'arrray andandola a puntare [0]

let counter = 0
@click button(){
    if(counter < array.lenght){

        counter++


    }else{
        counter = 0
    }

    indexActive = array[counter]

} 


quando clicco su un bottone questa classe attiva cambierà quella corrente e quella successiva o precedente

il bottone avrà un contatore che andrà ad aumentare il valore fino al <array.lenght
*/


//è stato creato l'array e con un ciclo v-for le immagini vengono stampate
const app = new Vue (
    {
        el: '#root',
        data: {
            imagesArray: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
            activeImage: 0,
            invertDirection: true,
            previousInterval: '',
            nextInterval:'',
            //disabled: undefined
            // visibleClass: '',
        },

        //EUREKA!!! xD

        mounted(){
            console.log('mounted')
        },

        methods: {

            // nextImage: function(){
            //     this.disabled = 'disabled'
            //     const nextInterval = setInterval(() =>{
            //     if(this.activeImage < this.imagesArray.length - 1){

            //     this.activeImage++
            //     }
            //     else{
            //     this.activeImage = 0
            //     }
            // }, 3000);
            // },

            inverseDirectionImage: function(){
                if (this.invertDirection === false){

                    this.invertDirection = true

                    clearInterval(this.nextInterval)

                    this.previousInterval = setInterval(() =>{    
                        

                        if(this.activeImage > 0){

                            this.activeImage--
                        
                        }
                        
                        else{

                            this.activeImage = this.imagesArray.length - 1

                        }



                    }, 3000);

                    console.log(this.previousInterval)

                }
                else{

                    this.invertDirection = false

                    clearInterval(this.previousInterval)

                    this.nextInterval = setInterval(() =>{

                
                        if(this.activeImage < this.imagesArray.length - 1){
    
                            this.activeImage++
                    
                        }
                            
                        else{
                            
                            this.activeImage = 0
                            
                        }
                
                    }, 3000);

                    console.log(this.nextInterval)

                }
            },

            // isVisibleThumb: function(){

            //     if(this.imagesArray.findIndex(this.imagesArray[this.activeImage]) === this.activeImage){

            //     this.visibleClass = 'ae-active'

            //     }                    

            // }   
            
            selectThumbImage(index){

                this.activeImage = index

            }
        },
    }
)

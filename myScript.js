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
            imagesArray: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg']


        }
    }
)
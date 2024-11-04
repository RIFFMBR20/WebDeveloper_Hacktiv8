const cart ={
    name : 'fiat',
    model : '500',
    weight : '850',
    color : 'white',
    // method
    start : () => {
        console.log('start car')
    },
    // method
    drive : () => {
        console.log('drive car')
    },
    // method
    brake : () => {
        console.log('brake car')
    },
    // method
    stop : () => {
        console.log('stop car')
    }
}

class car {
    brake(){
        console.log('brake car')
    }
}

cart.start()




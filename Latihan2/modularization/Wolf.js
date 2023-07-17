class Wolf {
    constructor() {
        this.strenght = Math.floor(Math.random() * 100);
    }
    
    growl(){
       console.log('wooof');
    }
}

module.exports = Wolf;

class HelloWorld {

    constructor(message) {
        this.message = message
    }

    getMessage(){
        return `Hello world!! ${this.message}`
    }
}

module.exports = HelloWorld;
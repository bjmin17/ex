
class testJs {
    constructor() {
        this.init();
    }

    init() {
        console.log('testJs loaded')
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    new testJs();
});
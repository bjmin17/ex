class index {
    constructor() {
        this.init();
    }

    init() {
        console.log('index loaded')
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    new index();
});
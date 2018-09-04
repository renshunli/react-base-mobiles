
class ListLight {

    constructor(){
        this.init();
    }

    init(){
        this.addEventLight();
    }

    addEventLight(){
        document.body.addEventListener('touchstart',(e) => {
            var ev = e || window.event;
            var target = ev.target || ev.srcElement;
            if(target.className.indexOf('rsl-list-light') !== -1){
                if(target.className.indexOf('rsl-list-light-active') === -1){
                    target.classList.add('rsl-list-light-active');
                }
            }
        });
        document.body.addEventListener('touchend',(e) => {
            var ev = e || window.event;
            var target = ev.target || ev.srcElement;
            if(target.className.indexOf('rsl-list-light') !== -1){
                if(target.className.indexOf('rsl-list-light-active') > -1){
                    target.classList.remove('rsl-list-light-active');
                }
            }
        });
        document.body.addEventListener('touchcancel',(e) => {
            var ev = e || window.event;
            var target = ev.target || ev.srcElement;
            if(target.className.indexOf('rsl-list-light') !== -1){
                if(target.className.indexOf('rsl-list-light-active') > -1){
                    target.classList.remove('rsl-list-light-active');
                }
            }
        });
    }
}

export default new ListLight();

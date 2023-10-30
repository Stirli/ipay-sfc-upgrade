import $ from "jquery";
export class MenuSelector{
    async onLoadAsync() {
        
    }

    async onPageSelected({name, caption}){
        $("#menu_selector_block").remove();
        if(name==="Ведомость" || name ==="ДОП питание"){
            await this.onOrderPageSelected();
            console.log("onPageSelected");
            
        }
        else{
            console.log("anotherSelected");
        }
    }

    async onOrderPageSelected(){
        $(".page-content > .container > .row > .col-25").prepend("<div id='menu_selector_block' class='content'></div>");
    }
}
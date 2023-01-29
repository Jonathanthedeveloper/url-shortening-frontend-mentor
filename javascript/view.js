
class NavbarView{
    _parentElement = document.querySelector('.navbar');



    toggleNavbar(){
        this._parentElement.addEventListener('click', function(){
            console.log(this)
        })
    }
}

export default new NavbarView;
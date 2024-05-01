(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import MobileNavigation from "./modules/mobile-navigation.mjs";
// import ApiCall from "./modules/ApiCall.mjs";

const MobileNavigation = require('./modules/mobile-navigation.mjs')
const ApiCall = require('./modules/ApiCall.mjs')


},{"./modules/ApiCall.mjs":2,"./modules/mobile-navigation.mjs":3}],2:[function(require,module,exports){
class ApiCall{
  constructor(){
    this.url = "https://cleanuri.com/api/v1/shorten"
    // this.url = "http://localhost:8010/proxy/api/v1/shorten" //? local dev url to bypass cors issue - api call works with this line un-commented
    this.request = new Request(this.url)
    this.submitBtn = document.querySelector("#submit")
    this.events()
  }
  events(){
    this.submitBtn.addEventListener('click', e => this.submit(e))
  }
  async submit(e){
    e.preventDefault()
    let data = `url=${e.target.form[0].value}`
    try{
      let headersList = {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }
      let response = await fetch(this.url, {
        method: "POST",
        body: new URLSearchParams(data),
        headers: headersList
      });
      
      let result = await response.text();
      console.log(response)
      if(response.ok){
        return result
      }
    }catch(e){
      console.log(e)
    }
  }
}
new ApiCall()

},{}],3:[function(require,module,exports){
class MobileNavigation {
  constructor(){
    this.hamburger = document.querySelector('#mobile-menu')
    this.icon = document.querySelector('.header-links__mobile-menu')
    this.iconMiddle = document.querySelector('.header-links__mobile-icon__middle')
    this.linkList = document.querySelector('.header-links__list')
    this.events()
  }
  events(){
    this.hamburger.addEventListener('click', () => this.openMobileNav())
  }
  openMobileNav(){
    this.icon.classList.toggle('header-links__mobile-icon--active')
    this.linkList.classList.toggle('header-links-visible')
    // this.iconMiddle.classList.toggle('header-links__mobile--active')
  }
}

new MobileNavigation()
// export default MobileNavigation
},{}]},{},[1]);

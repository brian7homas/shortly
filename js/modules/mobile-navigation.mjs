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

export default MobileNavigation
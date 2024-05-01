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

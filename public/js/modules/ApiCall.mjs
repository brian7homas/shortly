class ApiCall{
  constructor(){
    this.url = "https://cleanuri.com/api/v1/shorten"
    // this.url = "http://localhost:8010/proxy/api/v1/shorten"
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
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/x-www-form-urlencoded"
       }
       
       
       let response = await fetch("https://cleanuri.com/api/v1/shorten", { 
         method: "POST",
         body: data,
         headers: headersList
       });
       
       let result = await response.text();
    }catch(e){
      console.log(e)
    }
  }
}
new ApiCall()

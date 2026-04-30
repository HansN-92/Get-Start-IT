function setName(){
    model.viewState.person.navn = this.value
}

function setAge(){
    model.viewState.person.alder = this.value
}

function register(){
    model.data.person.push({...model.viewState.person})
    console.log(model.data.person)
}
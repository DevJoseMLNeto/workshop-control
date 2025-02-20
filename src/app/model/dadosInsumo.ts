export class DadosInsumo {
    _nome: string = ""
    _desc: string = ""
    _peso: string = ""
    _marca: string = ""
    _valor: string = ""
    _id: string = ""
    _disponibilidade: boolean = true
    
    construtor(){

    }
    setId(){
        this._id = "I" + new Date().getTime().toString() 
      }
       get Id() : string {
        return this._id
      }
}
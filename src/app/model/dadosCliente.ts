export class DadosC {
    _nome: string = ""
    _contato: string = ""
    _endereco: string = ""
    _bike: string = ""
    _ultServico: string = ""
    _data: string = ""
    _retorno: string = ""
    _valor: string = ""
    _maisInfo: string = ""
    _id: string = ""

    constructor(){}

      get Id(): string{
        return this._id
      }  
      get Nome(): string {
        return this._nome
      } 
      get Contato(): string {
        return this._contato
      } 
      get Endereco(): string {
        return this._endereco
      } 
      get  Bike(): string {
        return this._bike
      } 
      get UltServico(): string {
        return this._ultServico
      }
      get Data(): string {
        return this._data
      } 
      get Retorno(): string {
        return this._retorno
      } 
      get Valor(): string {
        return this._valor
      } 
      get MaisInfo(): string {
        return this._maisInfo
      } 

      setId(){
        this._id = new Date().getTime().toString() 
      }
      set _Nome(nome: string){
         this._nome = nome
      } 
      set _Contato(contato: string){
        this._contato = contato
      } 
      set _Endereco(endereco: string){
        this._endereco = endereco
      }
      set _Bike(bike: string){
        this._bike = bike
      }
      set _UltServico(ultServico: string){
        this._ultServico = ultServico
      }
      set _Data(data: string){
        this._data = data
      }
      set _Retorno(retorno: string){
        this._retorno = retorno
      }
      set _Valo(retorno: string){
        this._retorno = retorno
      }
      set _MaisInfo(maisInfo: string){
        this._maisInfo = maisInfo
      }


}
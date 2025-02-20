export class DadosC {
    _nome: string = ""
    _contato: string = ""
    _endereco: string = ""
    _bike: string = ""
    _id :string = ""
    _ultServico: any[] = [ 
      {
        _data: '',
        _servico:  '',
        _valor:  '',
        _maisInfo:  '',
        _index: false

      }
    ]
    index: number = this._ultServico.length -1
    constructor(){}
      setId(){
        this._id = "C" + new Date().getTime().toString() 
      }
       get Id() : string {
        return this._id
      }
      

}


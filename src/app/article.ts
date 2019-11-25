export class Article
{ 
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value:number){
        this._prix=value;
    }
  
    constructor(private _id: number,private _prix:number, private _libelle: string)
    {    
    }
}
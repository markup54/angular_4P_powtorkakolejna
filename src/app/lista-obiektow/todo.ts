export class Todo{
    nazwa:string;
    termin:Date;
    priorytet:number;
    zrobione:boolean;

    constructor(n:string,t:Date,p:number){
        this.nazwa = n;
        this.priorytet = p;
        this.termin = t;
        this.zrobione = false;
    }
}
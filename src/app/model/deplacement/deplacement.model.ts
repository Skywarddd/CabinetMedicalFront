export class Deplacement {
    public id!: string;
    public cout!: number;
    public date!: string;

    public constructor(cout: number = 0){
        this.cout = cout;
    }
}
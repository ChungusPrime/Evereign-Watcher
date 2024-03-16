export default abstract class Panel {

    abstract Title: string;
    abstract Data: any;

    constructor () {
        console.log(`creating panel`);
    }

}
import {Link} from "./Link";

export class Resource{
    name: string;
    link: Link;

    constructor(name: string, link: Link){
        this.name = name;
        this.link = link;
    }

}
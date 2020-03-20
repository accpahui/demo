import React,{Component} from 'react';

export interface Lprops{
    onAll:(id:number)=>void;
}

export default class BookBtn extends Component<Lprops>{
    constructor(list:Lprops){
        super(list);
        this.btnAll=this.btnAll.bind(this);
        this.btnFalse=this.btnFalse.bind(this);
        this.btnTrue=this.btnTrue.bind(this);
    }

    btnAll(){
        this.props.onAll(1);
    }
    btnFalse(){
        this.props.onAll(2);
    }
    btnTrue(){
        this.props.onAll(3);
    }
    
    render(){
        return(
        <div>
            <button onClick={this.btnAll}>所有</button>
            <button onClick={this.btnFalse}>未完成</button>
            <button onClick={this.btnTrue}>已完成</button>
        </div>

        );
    }
 
}
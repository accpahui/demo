import React,{Component} from 'react';
import { string } from 'prop-types';

export interface AddProps{
  onCha:(todos : TodoItem)=>void;

}

export interface TodoItem{
  id:number;
  title:string;
  finshed:boolean;
}

export interface AddState{
    value:string;
    todos:TodoItem[];
}

export default class BookHerd extends Component<AddProps,AddState>{

  constructor(list:AddProps){
    super(list);
    this.state={
      value:'',
      todos:[]

    }
    
    this.onChangVlaue=this.onChangVlaue.bind(this);
    this.addNewText=this.addNewText.bind(this);
  }

 addNewText(){
  
      let {value,todos} =this.state;
      const{onCha}=this.props;
      const item:TodoItem ={
          id:todos.length+1,
          title:value, 
          finshed:false,
      }
      todos=todos.concat(item);
      onCha&&onCha(todos[0]);
      this.setState({todos:[],value:''});
      
  }
  onChangVlaue(e:any){
    this.setState({
      value:e.target.value
    })
  }


  render(){
    return(
      <div>
        <input value={this.state.value} onChange={this.onChangVlaue}/>
        <button onClick={this.addNewText}>添加</button>
      </div>

    );
  }
}
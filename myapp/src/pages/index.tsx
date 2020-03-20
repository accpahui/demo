import React,{Component} from 'react';
import BookList from './BookList';
import BookHerd from './BookHerd';
import BookBtn from './BookBtn';
import { number } from 'prop-types';



export interface ListProps{
  todo:TodoItem[]
}
export interface ListState{
  todos:TodoItem[]
  todo:TodoItem[]
}

export interface TodoItem{
  id:number;
  title:string;
  finshed:boolean;
}
export default class App extends Component<ListProps,ListState> {


  constructor(list:ListProps){
    super(list);
    let arr:TodoItem[]=[
      {id:1,title:"123",finshed:false},
      {id:2,title:"123",finshed:false},
      {id:3,title:"123",finshed:true}
      ];
    this.state={
      todos:arr,
      todo:arr
      
    }
    this.add=this.add.bind(this);
    this.del=this.del.bind(this);
    this.change=this.change.bind(this);
    this.all=this.all.bind(this);
    this.upBelow=this.upBelow.bind(this);
  }

  add(lTodo:TodoItem){
      let arr = this.state.todo.slice();
      if(arr.length>0){
        lTodo.id=arr[arr.length-1].id+1;
      }
      arr.push(lTodo);
			this.setState({ 
        todo:arr,
        todos:arr
			});

  }

  del(id:number){
    
    let arr = this.state.todo.slice();
		let index = arr.findIndex(function(value){
				return value.id===id;
		});
		arr.splice(index,1);
		this.setState({
      todo:arr,
      todos:arr
				
		});
  }

  change(item:TodoItem){
    let arr = this.state.todo.slice();
    let to:any = arr.find(function(value){
      return item.id === value.id;
    });
    to.finshed=!item.finshed;
    this.setState({
      todo:arr,
      todos:arr
    });

  }

  all(id:number){
    let arr:TodoItem[]=[];
    let arr2=this.state.todo.slice();
    if(id===1){
      this.setState({
        todos:arr2
      })
    }else if(id===2){
        for(let i:number =0;i<arr2.length;i++){
          if(!arr2[i].finshed){
            arr.push(arr2[i]);
          }
        }
        this.setState({
          todos:arr
        })

    }else if(id===3){
      for(let i:number =0;i<arr2.length;i++){
        if(arr2[i].finshed){
          arr.push(arr2[i]);
        }
      }
      this.setState({
        todos:arr
      })
    }
  }

  upBelow(item:TodoItem,id:number){
    let arr = this.state.todo.slice();
    let index = arr.findIndex(function(value){
      return value.id===item.id;
    });
    let title ="";
				let fin=false;
    if(id===1){
			if(index!=0){
				
				
				title=arr[index-1].title;
				fin=arr[index-1].finshed;

				arr[index-1].title=item.title;
				arr[index-1].finshed=item.finshed;
        item.title=title;
        item.finshed=fin;
        this.setState({
          todo:arr
        });

			}
    }else if(id===2){
      if(index<this.state.todo.length-1){

				title=arr[index+1].title;
				fin=arr[index+1].finshed;

				arr[index+1].title=item.title;
				arr[index+1].finshed=item.finshed;
        item.title=title;
        item.finshed=fin;
        this.setState({
          todo:arr
        });

			}
    }
   
  }

  render(){
    return (
      <div>
        <BookHerd onCha={this.add}></BookHerd>
        <BookList todos={this.state.todos} ondel={this.del} onchange={this.change} onUpBelow={this.upBelow}></BookList>
        <BookBtn onAll={this.all}></BookBtn>
      </div>
    );
  }
  
}

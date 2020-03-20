import React,{Component} from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';







export interface LiProps{
    todos:TodoItem[];
    ondel:(id:number)=>void;
    onchange:(item:TodoItem)=>void;
    onUpBelow:(item:TodoItem,id:number)=>void;


}
export interface TodoItem{
    id:number;
    title:string;
    finshed:boolean;
}
export interface LiState{
    todos:TodoItem[]
}

export default class BookHerd extends Component<LiProps,LiState>{
   
    ontLremove(id:number){
       this.props.ondel(id);
    }

    ontLChange(item:TodoItem){
        this.props.onchange(item);
    }
    
    onUp(item:TodoItem){
        this.props.onUpBelow(item,1);
    }

    onBelow(item:TodoItem){
        this.props.onUpBelow(item,2);
    }
   

   



    render(){
        let dq=this;
        
        return(
            <table>
				<thead><tr><th>完成</th><th>待办事项</th><th>删除</th></tr></thead>
					<tbody>
					{this.props.todos.map(function(item){
						return (
							<tr key={item.id}>
								<td><input type="checkbox" checked={item.finshed} onChange={()=>dq.ontLChange(item)}/></td> 
								<td><input className={item.finshed ? style.finished:''}value={item.title}/></td>
								<td><button onClick={()=>dq.ontLremove(item.id)}>删除</button></td>
								<td><button onClick={()=>dq.onUp(item)}>上</button></td>
								<td><button onClick={()=>dq.onBelow(item)}>下</button></td>
                                <td><Link to={{ pathname: 'Detailed', state: { item:item} }}><button>详细</button></Link></td>
							</tr>
							)
						}
					)}
					</tbody>
				
				</table>


        );

    }


}
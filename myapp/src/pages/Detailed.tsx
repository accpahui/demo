import React,{Component} from 'react';


export default class Detall extends Component{
    
    
    render(){
        //let todo:any =this.props.location.state.item;
        return(
        <div>
             {/* <p>{todo.id}</p>
             <input value={todo.title} /> */}
            <td><button>修改</button></td>
        </div>

        );
    }
 
}
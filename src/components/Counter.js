import React from 'react';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            accountBalance:300 ,
      
        };
    }
increment=()=>{
this.setState({
    accountBalance: this.state.accountBalance+1
  
});

}
render(){
    return(
        <div>
<h3>Account Balance: ${this.state.accountBalance}</h3>,
<button 
onClick={this.increment}>Add Cash:{this.accountBalance}</button>

</div>
);
}
}

export default Counter;
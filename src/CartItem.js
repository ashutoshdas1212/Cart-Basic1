import React from 'react';

//for class component to be react component we have to give method render
class CartItem extends React.Component{

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }

    }
    // testing(){
    //     const promise= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
        
    //     promise.then(()=>{
    //         this.setState({qty:100});
    //         console.log('state',this.state);
    //     })
    // }
    increaseQuantity=()=>{
        // this.setState({
        //     qty:this.state.qty+1
        // })
        
        // this.setState({
        //     qty:this.state.qty+1
        // })
        
        // this.setState({
        //     qty:this.state.qty+1
        // })
        //Batching,passed an object 
        //setState form 2
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        }
        // ,()=>{
        //     console.log('this.state',this.state)
        // }
        );
        // this.setState((prevState)=>{
        //     return {
        //         qty:prevState.qty+1
        //     }
        // });
        // this.setState((prevState)=>{
        //     return {
        //         qty:prevState.qty+1
        //     }
        // });
    }
    decreaseQuantity=()=>{
      
        const{qty}=this.state;
        
        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        });
    }
    
    render()
    {
         console.log('this.props',this.props)
        const{price,title,qty}=this.props;
        
        return(
          
            <div className="cart-item" >
            <div className="left-block">
                    <img style={styles.image} src={this.state.img} />
            </div>    
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                    <div style={{ color:'#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                
                    <div className="cart-item-actions">
                        <img alt="increase" onClick={this.increaseQuantity.bind(this)} className="action-icons" src="data:image/png;base64,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"/>
                        <img alt="decrease" onClick={this.decreaseQuantity.bind(this)}  className="action-icons" src="data:image/png;base64,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"/>
                        <img alt="delete"  className="action-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAA+Pj7i4uJ0dHTo6OjCwsK7u7t9fX2enp4wMDCGhobu7u4eHh60tLRKSkr09PSrq6ulpaWTk5PS0tL4+PgjIyPX19cVFRVtbW3W1tZVVVU3NzdiYmIrKytdXV1ERETIyMgNDQ2Ojo6EhIRhgHT0AAAFGklEQVR4nO2d7XqiMBBGpVatVgsU0bbqSj/u/xq3uz67cYIGZoDMuPuev5Awp5SoyZAZjQZienhJ2vNymA4VyEAsK4beiSrTDppD9oMtmCSLUjtsBq8CwSS51w67PWORYJKMtQNvzVxoONcOvDWPQsNH7cBbA0MY2geGMLTP/2b4FDjzCYZGgaEDhlaBoQOGVoGhA4ZWgaHjVg0/SdyzwJkzcuZntAh9ymlxvFu0h65YbAJnbsiZL4xr3B2LWU/rAGXOX4OIRfXUfSWgLD60NcIUHR2nkiWWuGxCz3kjD9rht0K+olOm2rG3JBUOOZndEcZHuLq6046bQSoRvNeOmoXgWZw192oK9ohabpo7NcWG+7lYaEfMpuAJZtrxCuCNp7l2uAJyluGd3/yYbyeW2OZHP8SKI+j/k67WrL9PHNZ+Whnn39T7qFjZTMhaeoqcDwz6Iz15GyzIbqxpmJwpAvqF7ThYiF2hz+KO0XJBWoamknShE1kLRkv6hcZuuhlNoNswWq5Iy+VgEXZlSQdERksYWgGG14GhFWB4HRhaAYbXgaEVYHgdGFpBbkh/H1qchjpBpzE4vw/pZCJzNjkidGb+jtHSe7tusAi7QsN8ZbR8pk0fBguxG94iPGfS25umM/p/6q8escYLr22S2psyfatlGbCa15MwfhzuLXGop8HwnqW3Wnv7bFmGN5WmcIIz4/0Lf6yxD/t7yW2lYkiSMUrtkJkIEvi22jGzYA4zJ24po0a4PPbU3LMRxOt/79qRt+RdKjgaTW4h/zKdyAW/yTn76GjwwkujuUA5t5zhtpn3sqlNLX3IDJxf9e0N86kmeQTDbs91VyYRDHUzM8YwFAHDmMBQBgxjAkMZMIwJDGXAMCYwlAHDmMBQBgxjAkMZMIwJDGXAMCYwlME0XOfP+bWTtt/Hri25j7+PNaaMGDCcnRbjdpdOW+9/H9tf8hifcpQ2DZU89A1dvmB96dmtG9XX3ad/j4XLB6gbnic3+ItU52lW/l08X1IKph1oG2bnKfD+K+D7QGjnaXTBXUq0DWkKDs3xp+mOdLihOfehnQO0DemGiXTQoJnVz+TYlBwLbZ+obUgTb+m9oIVL6HhC730oFRaGMmDogCEMYQhDKTB0wBCGMIShFBg6YAhDGMJQCgwdMIQhDGEoBYYOGMIQhjCUAkMHDGEIQxhKgaEDhjCEIQylwNABQxjCEIZSYOiAIQxhCEMpMHT8+4b0zR/6bhN984e+MUR3ZaZvDFG0Dcm+jX7JENKLd4zskRrae1LbcPR19TbRG+zfpvMbHHqxS99w5DYerteudZVP6tVEXH3eNNi/vuHf3eovPUx/NC4V7v1zhxtKqRgwHI0fd+lxfrmC0qTYpbvicg/Z/JjuPpv2VrdgOCwwlAHDmMBQBgxjAkMZMIwJDGXAMCYwlAHDmMBQBgxjAkMZ/75hRXoVVRrsDTr/X/XUKy0v17nOWSdoRavw7HF7DqTXQ0+9WorFqw6tWd7Zq1PcVzVtui6WrLKe+uVD9mVM6os/4n5pt8lCa7DZLrxIevtb18oDvr7Hv4/Ze61EcdVb51ZLrooLrNawWv24l/qVJ4rmqynQ10j6i9JiLdLgXrVsLNZ3Dm1VK8BeqXV+MfUG9s3XjMq+b8FR5n/a6rIY4AN5WTVfNxrV5UyIjpSvzVeOxKHXYfSMvPnaURjwJ2r20Hz5wXkY9jvxpNAdVPdFhJrSk/wrXX1Ed/tYpV9X62YE+AlhA3PW5EX6UQAAAABJRU5ErkJggg=="/>
                </div>
                
            </div>    
            </div>
            
        );
    }
    
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;
import { Component } from "react";
class Api extends Component{
    constructor(props){
        super(props)
        this.state={
            obj:[],
            filterd:[]
        }
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products").then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({
                obj:data,
                filterd:data
            })

        })
    }
    mens=()=>{
        var res1=this.state.obj.filter((val)=>{
            return val.category=="men's clothing"
            
        })
        this.setState({
            filterd:res1
        })
    }
    women=()=>{
        var res1=this.state.obj.filter((val)=>{
            return val.category=="women's clothing"
        })
        this.setState({
            filterd:res1
        })
    }
    jewelery=()=>{
        var res1=this.state.obj.filter((val)=>{
            return val.category=="jewelery"
        })
        this.setState({
            filterd:res1
        })
    }
    electronics=()=>{
        var res1=this.state.obj.filter((val)=>{
            return val.category=="electronics"
        })
        this.setState({
            filterd:res1
        })
    }
    render(){
        console.log(this.state.obj)
        var res=this.state.filterd.map((val,ind,arr)=>{
            return (<>
            <tr>
                <td>{val["id"]}</td>
                <td>{val["title"]}</td>
                <td>{val["description"]}</td>
                <td>{val["category"]}</td>
                <td><img src={val["image"]} alt="" width={200} /></td>
            </tr>
            </>)
        })
        return (<>
        <h1>this api page</h1>
        <button onClick={this.mens}>men's clothing</button>
        <button onClick={this.women}>women's clothing</button>
        <button onClick={this.jewelery}>jewelery</button>
        <button onClick={this.electronics}>electronics</button>
        <table border={2}>
            <th>{"id"}</th>
            <th>{"title"}</th>
            <th>{"description"}</th>
            <th>{"category"}</th>
            <th>{"image"}</th>
            {res}</table>
        
        </>)
    }
}
export default Api;
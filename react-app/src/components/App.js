import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import '../assets/css/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            List: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeletItem = this.handleDeletItem.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

    }
    render() {
        return (
            <Fragment>
                <label htmlFor="inserArea" className="labelInput">请输入内容</label>
                <div className="input-group">
                    <input
                        id="inserArea"
                           type="text"
                           className="form-control"
                           placeholder="Recipient's username"
                           onChange= {this.handleInputChange}
                        value = {this.state.inputValue}
                    />
                        <span
                            className="input-group-addon"
                            onClick={this.handleBtnClick}>
                            提交
                        </span>
                </div>
                <div className="panel panel-default panelContent">
                    <div className="panel-heading">Panel heading</div>
                    <ul className="list-group">
                        {
                            this.getTodoItem()
                        }
                    </ul>
                </div>
            </Fragment>
        );
    }
    getTodoItem() {
        return this.state.List.map((item, index) => {
            return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleDeletItem}
                    />
            )
        })
    }
    handleInputChange(e) {
        let value = e.target.value;
        this.setState(()=> {
            return{
                inputValue: value
            }
        })
    }
    handleBtnClick() {
        this.setState((prevState) =>{
            // prevState === this.state
            return{
                List: [...prevState.List, prevState.inputValue],
                    inputValue: ''
            }
        })
    }

    handleDeletItem(index) {
        // immutable
        // state 不允许我们做任何的改变
      this.setState((prevState)=>{
          let list = [...prevState.List];
          list.splice(index, 1);
          return {
              List: list
          }
      })
    }
}


export default App;

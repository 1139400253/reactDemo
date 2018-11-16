import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/style.css';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={

        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const {content, test} = this.props;
        return (
                <li className="list-group-item ListItem" onClick={this.handleClick} >
                    {/*dangerouslySetInnerHTML={{__html: content }}将HTML字符串解析为html样式显示*/}
                    <span className="ListName">{test} - {content}</span>
                    <span className="glyphicon glyphicon-trash delBtn" aria-hidden="true"></span>
                </li>
        )
    }
    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,//PropTypes.string.isRequired表示必须要要从父组件传一个string类型的值
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'II'
}
export default TodoItem;
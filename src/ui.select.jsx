import React, {Component} from 'react';
import {UISelectItem} from './ui.select.item';
import './sass/dropdown.css';

class UISelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownVisible: false,
            selectedItem: this.props.options[0], // default item state,
            options:[]
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    componentWillMount(){
        this.setState({
            options:this.props.options
        })
    }
    componentDidMount() {
        document.addEventListener("keydown", () => this.show());
    }

    // show dropdown and add event listener for click and keydown
    show() {
        this.setState({dropDownVisible: true});
        document.addEventListener("click", this.hide);
        document.addEventListener("keydown", (e) => this.navigateItem(e));
    }

    navigateItem(e) {
        switch (e.keyCode) {
            case 40:
                console.log('go down');
                break;
            case 38:
                console.log('go up');
                break;
            default:
                console.log('none');
        }
    }

    // hide dropdown and remove event listener
    hide() {
        this.setState({dropDownVisible: false});
        document.removeEventListener("click", this.hide);
        document.removeEventListener("keydown", this.hide);
    }

    //handle the click on list item and select the current item
    handleClick(item) {
        this.setState({selectedItem: item}, () => {
            console.log(this.state.selectedItem)
        });
    }
    renderListItem() {
        let {options} = this.state;
        return options.map(item => {
            return (
                <UISelectItem
                    key={item.id}
                    item={item}
                    handleClick={this.handleClick.bind(this, item)}
                />
            )
        })
    }

    render() {
        return (
            <div className={`dropdown-wrapper ${this.state.dropDownVisible ? "open" : ""}`}>
                <div className={`dropdown-display ${this.state.dropDownVisible ? "open" : ""}`} onClick={this.show}>
                    <span>{this.state.selectedItem.name}</span>
                </div>
                <div className="dropdown-list">
                    <div>
                        {this.renderListItem()}
                    </div>
                </div>
            </div>
        )
    }
}

export default UISelect
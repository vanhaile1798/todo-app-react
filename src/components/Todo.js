import React, {Component} from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterState: 'all', // all, active, completed
      newInput: '',
      items: [
        { id: 1, text: "Learn JavaScript", done: false },
        { id: 2, text: "Learn React", done: false },
        { id: 3, text: "Play around in JSFiddle", done: true },
        { id: 4, text: "Build something awesome", done: true }
      ]
    }
    this.onChangeState = this.onChangeState.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterItem = this.filterItem.bind(this);
  }
  
  onKeyUp(event) {
    let text = event.target.value;
    let ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      text = text.trim();
      if (!text) {
      return;
      }
      this.setState({
      newInput: '',
      items: [
        {text: text, done: false},
        ...this.state.items
      ]
      });
    }
  }
  
  onChange(event) {
    this.setState({
    newInput: event.target.value
    });
  }
  
  onChangeState(item) {
    const done = item.done;
    const {items} = this.state;
    const index = items.indexOf(item);
    this.setState({
      items: [
        ...items.slice(0, index),
        { 
          id: item.id,
          text: item.text,
          done: !done
          
        },
        ...items.slice(index + 1)
      ]
    });
  }
  
  delItem(item) {
    const {items} = this.state;
    let index = items.indexOf(item);
    this.setState({
      items: [
        ...items.slice(0, index),
        ...items.slice(index + 1)
      ]
    });
  }
  
  filterItem(event) {
    let filter = event.target.innerHTML.toLowerCase();
    this.setState({
      filterState: filter
    });
  }

  
  render() {
    let del = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 224 224" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,224v-224h224v224z" fill="none" /><g fill="#ff5483"><g id="surface1"><path d="M64.54,58.24l-6.3,6.3l47.6,47.46l-47.6,47.46l6.3,6.3l47.74,-47.46l47.6,47.46l6.3,-6.3l-47.6,-47.46l47.6,-47.46l-6.3,-6.3l-47.6,47.46z" /></g></g></g></svg>;
    let isComplete = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 224 224" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,224v-224h224v224z" fill="none" /><g fill="#02b3e4"><path d="M112,13.44c-54.38012,0 -98.56,44.17988 -98.56,98.56c0,54.38012 44.17988,98.56 98.56,98.56c54.38012,0 98.56,-44.17988 98.56,-98.56c0,-54.38012 -44.17988,-98.56 -98.56,-98.56zM112,22.4c49.53778,0 89.6,40.06222 89.6,89.6c0,49.53778 -40.06222,89.6 -89.6,89.6c-49.53778,0 -89.6,-40.06222 -89.6,-89.6c0,-49.53778 40.06222,-89.6 89.6,-89.6zM156.7475,67.1475c-1.47795,0.02913 -2.84642,0.78539 -3.6575,2.02125l-45.70125,67.36625l-32.66375,-30.31c-1.16787,-1.12377 -2.85159,-1.52923 -4.403,-1.06028c-1.55141,0.46895 -2.72862,1.73918 -3.07845,3.32171c-0.34983,1.58253 0.18226,3.23062 1.39144,4.30981l40.3025,37.3975l51.5725,-76.0025c0.96456,-1.3821 1.07191,-3.18857 0.27782,-4.67517c-0.79409,-1.4866 -2.35525,-2.40182 -4.04032,-2.36858z" /></g></g></svg>;
    let isNotComplete = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 224 224" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,224v-224h224v224z" fill="none" /><g fill="#000000"><path d="M112,13.44c-54.38012,0 -98.56,44.17988 -98.56,98.56c0,54.38012 44.17988,98.56 98.56,98.56c54.38012,0 98.56,-44.17988 98.56,-98.56c0,-54.38012 -44.17988,-98.56 -98.56,-98.56zM112,22.4c49.53778,0 89.6,40.06222 89.6,89.6c0,49.53778 -40.06222,89.6 -89.6,89.6c-49.53778,0 -89.6,-40.06222 -89.6,-89.6c0,-49.53778 40.06222,-89.6 89.6,-89.6zM156.7475,67.1475c-1.47795,0.02913 -2.84642,0.78539 -3.6575,2.02125l-45.70125,67.36625l-32.66375,-30.31c-1.16787,-1.12377 -2.85159,-1.52923 -4.403,-1.06028c-1.55141,0.46895 -2.72862,1.73918 -3.07845,3.32171c-0.34983,1.58253 0.18226,3.23062 1.39144,4.30981l40.3025,37.3975l51.5725,-76.0025c0.96456,-1.3821 1.07191,-3.18857 0.27782,-4.67517c-0.79409,-1.4866 -2.35525,-2.40182 -4.04032,-2.36858z" /></g></g></svg>
;

  let items = this.state.items;
  if (this.state.filterState === 'all') {
    items = this.state.items;
  } else if (this.state.filterState === 'active') {
    items = items.filter((item) => item.done === false);
  } else {
    items = items.filter((item) => item.done);
  }
  
    
    return (
      <div>
        <h2>Todos:</h2>
        <input 
        type="text" 
        className="custom-input" 
        value={this.state.newInput}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}/>
        <ol>
        <button className={this.state.filterState === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={this.filterItem}>All</button>
        <button className={this.state.filterState === 'active' ? 'filter-btn active' : 'filter-btn'} onClick={this.filterItem}>Active</button>
        <button className={this.state.filterState === 'completed' ? 'filter-btn active' : 'filter-btn'} onClick={this.filterItem}>Completed</button>
        { 
        items.map((item, index) => (
          <li key={index}>
            <div className="check-btn" onClick={() => this.onChangeState(item)}>
              {item.done ? isComplete : isNotComplete}
            </div>
            
              <span className={item.done ? "done" : ""}>{item.text}</span>
              <div onClick={() => this.delItem(item)} className="delete-btn">
                {del}
              </div>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

export default TodoApp;
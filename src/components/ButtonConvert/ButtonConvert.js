/**
 * Created by Charlie on 13/09/2016.
 *
 *  Class to create a button to convert code from a textArea to another
 */
import React, { Component } from 'react';

class ButtonConvert extends Component {

  /*  The constructor of the class */
  constructor() {
    super();
    this.state = {
      clicked: false,
      value : "Insérer les données ICS",
      resultJSON : "Coming soon"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /* The handler to the click */
  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  handleChange() {
    this.setState({value: this.refs.textareaICS.value});
  }

  /* Parser ICS to JSON */
  icsToJson(){
    var icsText = this.state.value;
    var allEvent = icsText.split("\n");
    var myEvents = [];
    for(var i = 0; i < allEvent.length ; i++){
      alert(allEvent[i]);
      //this.eventToJson(elem);
    };
  }

  /* The display of what the button does*/
  render() {
    if (this.state.clicked)
        this.icsToJson();
    return (
    <div class="container">
      <legend> Convertir un fichier ICS en un tableau JSON</legend>
      <form onSubmit={this.handleClick}>
        <label>Données ICS à convertir</label>
        <textarea  onChange={this.handleChange}
                   ref="textareaICS"
                   value={this.state.value} />
        <br/>
        <button>Convertir !</button>
      </form>
      <br/>
      <label>Résultats JSON de la conversion</label>
      <textarea ref="textareaJSON" value={this.state.resultJSON}/>
      <br />
    </div>
    );
  }
}

export default ButtonConvert;

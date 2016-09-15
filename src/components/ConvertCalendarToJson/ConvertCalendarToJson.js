/**
 * Created by Charlie on 13/09/2016.
 *
 *  Class to create a button to convert code from a textArea to another
 */
import React, { Component } from 'react';
import s from './ConvertCalendarToJson.scss';


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
  handleClick(e) {
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  }

  handleChange() {
    this.setState({value: this.refs.textareaICS.value});
  }

  /* Parser ICS to JSON */
  icsToJson(){
    var icsText = this.state.value;
    var myEvents = [];
    var elements = icsText.split("BEGIN:VEVENT");
    for(var i=1; i< elements.length; i++){
      var allEvent = elements[i].split("\n");
      var jsonData = {};
      for(var j = 0; j < allEvent.length ; j++){
        var elem = allEvent[j].split(":");
        if(elem[1] != undefined && elem[0] != "END")
          jsonData[""+elem[0]+""] = ""+elem[1]+"";
      };
      alert(JSON.stringify(jsonData));
      myEvents.push(jsonData);
    };
    return myEvents;
  }

  /* The display of what the button does*/
  render() {
    if (this.state.clicked)
        this.setState({resultJSON: JSON.stringify(this.icsToJson())});
    return (
    <div className={s.container}>
      <legend> Convertir un fichier ICS en un tableau JSON</legend>
      <form onSubmit={this.handleClick}>
        <label>Données ICS à convertir</label>
        <br />
        <textarea  onChange={this.handleChange}
                   ref="textareaICS"
                   defaultValue={this.state.value}
                   value={this.state.value}
                   rows="15"/>
        <br/>
        <button>Convertir !</button>
      </form>
      <hr/>
      <label>Résultats JSON de la conversion</label>
      <br />
      <textarea ref="textareaJSON"
                defaultValue={this.state.resultJSON}
                value={this.state.resultJSON}
                rows="15"/>
      <br />
    </div>
    );
  }
}

export default ButtonConvert;

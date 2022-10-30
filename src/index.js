import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";

function FirstRow(props) { 
    return (
         <>
         <div className="label_margin">
             Номер:
         </div>
             <input name='number' type='textbox' className="input_number_and_date"/>
             <div className="text_field_start">
             <label className="label_required">
                 Дата:
             </label>
             <input name='date' type='date' className={`input_number_and_date_req${props.date_isEmpty?" invalid":""}`} onChange={props.onChange}/> {/*#FFFFE0*/}
             </div>
         <div className="text_field_end">
             <label>
              Дата проводки:
              <input
                 type='date' className="input_number_and_date"/>
             </label>
         </div>
         </>
     );
}

function SecondRow (props) {
  return (
      <>
      <div className="label_margin">
          <label className="label_required">
                  Счет отправителя:
          </label>
      </div>
          <input
              id="numbers"
              type="text"
              list="account_numbers"
              className={`input_number_and_date_req${props.caccount1_isEmpty?" invalid":""}`}
              onChange={props.onChange}
          />
          <datalist id="account_numbers">
              <option value="4564534235456434"/>
              <option value="1234567890123"/>
              <option value="9876543210987"/>
              <option value="12345678900987654321"/>
          </datalist>
              <input type="text" className="input" />
      </>
    );
}

class ThirdRow extends React.Component {
  render() {
      return (
          <>
          <div className="label_margin">
              Корреспонодент:
          </div>
                  <input type="text" className="input" />
          </>
          );
  }
}

class FourthRow extends React.Component {
  render() {
      return (
          <>
          <div className="label_margin">
              Наим. дохода:
          </div>
              <input type="text" className="input"/>
          </>
      );
  }
}

class Table extends React.Component {
  render() {
      return (
          <div className="fixTableHead">
              <div className="border_table">
              <table className="table_transfer">
                  <thead>
                      <tr><th>☰</th><th>Сумма</th><th>Счет получателя</th><th>Дт</th><th>Кт</th></tr>
                  </thead>
                  <tbody>
                          <tr><td>1</td><td>0,00</td><td></td><td></td><td>9876543547654356</td></tr>
                          <tr><td>1</td><td>0,00</td><td></td><td></td><td>9876543547654356</td></tr>
                          <tr><td>1</td><td>0,00</td><td></td><td></td><td>9876543547654356</td></tr>   
                  </tbody>
                  </table>
              </div>
          </div>
          );
  }
}

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          number: null,
          date: null,
          date_isEmpty: false,
          date_exec: null,

          caccount1: null,
          caccount1_isEmpty: false,

      };

      this.hundle_date_input_Change = this.hundle_date_input_Change.bind(this);
      this.hundle_caccount1_input_Change = this.hundle_caccount1_input_Change.bind(this);
      this.hundleSubmit = this.hundleSubmit.bind(this);
  };

  hundle_date_input_Change(e) {
    if(e.target.value != null)
    {
        this.setState({
            date: e.target.value,
            date_isEmpty: false
        });
    }else{
        this.setState({
            date: e.target.value
        });
    }
  }

  hundle_caccount1_input_Change(e){
    if(e.target.value != null)
    {
        this.setState({
            caccount1: e.target.value,
            caccount1_isEmpty: false
        });
    }else{
        this.setState({
            caccount1: e.target.value
        });
    }
  }

  hundleSubmit(e) {
    e.preventDefault();

    if(this.state.date == null)
    {
        this.setState({
            date_isEmpty: true
        });
    }
    
    if(this.state.caccount1 == null){
        this.setState({
            caccount1_isEmpty: true
        });
    }
  }

  renderFirstRow() {
      return (
          <FirstRow date_isEmpty={this.state.date_isEmpty} 
            onChange={this.hundle_date_input_Change}/>
          );
  }

  renderSecondRow() {
      return (
          <SecondRow caccount1_isEmpty={this.state.caccount1_isEmpty} 
            onChange={this.hundle_caccount1_input_Change}/>
          );
  }

  renderThirdRow() {
      return (
          <ThirdRow/>
          );
  }

  renderFourthRow() {
      return (
          <FourthRow />
          );
  }

  renderTable() {
      return (
          <Table />
          );
  }

  render() {
      return (
          <form onSubmit={this.hundleSubmit}>
              <div>
                  <div className="text_field__div">
                      {this.renderFirstRow()}
                  </div>
                  <div className="text_field__div">
                      {this.renderSecondRow()}
                  </div>
                  <div className="text_field__div">
                      {this.renderThirdRow()}
                  </div>
                  <div className="text_field__div">
                      {this.renderFourthRow()}
                  </div>
                  <div>
                      {this.renderTable()}
                  </div>
                  <div className="div_button" >
                      <button type="submit">Провести платеж</button>
                  </div>
              </div>
          </form>
          );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Form />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

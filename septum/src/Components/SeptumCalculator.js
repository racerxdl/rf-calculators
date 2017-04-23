/**
 * Created by Lucas Teske on 22/04/17.
 */

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Calculator } from '../Tools';
import septum from './septum.png';

const calculatorBlockStyle = {
  width: 1000,
  overflow: 'hidden',
  margin: "auto"
};

const headCalcStyle = {
  width: 1000,
  height: 80,
  margin: "auto"
};

const rowStyle = {
  height: 20
};

const tableStyle = {
  width: 240
};

const paramColumnStyle = {
  width: 40,
  textAlign: "center"
};

const calcParamsStyle = {
  float: 'left',
  width: 600,
  fontSize: 12,
};

const credtDivStyle = {
  float: 'left',
  width: 400
};

const tableDivStyle = {
  float: "left",
  width: 300
};

const imageDivStyle = {
  float: "left",
  width: 400
};

export default class SeptumCalculator extends Component {

  constructor() {
    super();
    this.state = {
      frequency: 1296,
      selectedFrequency: 1296,
      results: {},
      tableData0: [],
      tableData1: [],
      tableData2: []
    };
    this.calculate();
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    const results = Calculator.SeptumCalculate(this.state.frequency);
    const tableData = Object.keys(results.params).map((key) => {
      return {
        key: key,
        value: results.params[key],
        unit: "mm"
      };
    });

    const tableData0 = [];
    const tableData1 = [];
    const tableData2 = [];

    tableData.forEach((val, i) => {
      if (i < 6) {
        tableData0.push(val);
      } else if (i < 12) {
        tableData1.push(val);
      } else {
        tableData2.push(val);
      }
    });

    this.state.results = results;
    this.state.tableData = tableData;
    this.state.tableData0= tableData0;
    this.state.tableData1= tableData1;
    this.state.tableData2= tableData2;
  }

  handleFrequencyChange(event) {
    this.setState({
      frequency: parseFloat(event.target.value)
    });
  }

  render() {
    this.calculate();
    return (
      <div className="SeptumCalculator">
        <div style={headCalcStyle}>
          <div style={calcParamsStyle}>
            <div>
              Frequency: <TextField id="frequency" onChange={this.handleFrequencyChange} hintText={this.state.frequency}/> MHz
            </div>
            <div>
              Wave Length: <TextField id="wavelength" value={this.state.results.waveLength}/> mm
            </div>
          </div>
          <div style={credtDivStyle}>
            <p>WebUI made by <a href="https://twitter.com/lucasteske">Lucas Teske</a></p>
            <p>Based on <a href="http://www.ok1dfc.com/eme/emeweb.htm">OK1DFC Spreadsheet Formulas</a></p>
          </div>
        </div>
        <p/>
        <div id="calculatorBlock" style={calculatorBlockStyle}>
          <div id="table0" style={tableDivStyle}>
            <Table selectable={false} style={tableStyle}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn style={paramColumnStyle}>Parameter</TableHeaderColumn>
                  <TableHeaderColumn>Value</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} >
                {this.state.tableData0.map((row, index) => (
                    <TableRow key={index} style={rowStyle}>
                      <TableRowColumn  style={paramColumnStyle}>{row.key}</TableRowColumn>
                      <TableRowColumn>{row.value} {row.unit}</TableRowColumn>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
          <div id="table1" style={tableDivStyle}>
            <Table selectable={false} style={tableStyle}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn style={paramColumnStyle}>Parameter</TableHeaderColumn>
                  <TableHeaderColumn>Value</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} >
                {this.state.tableData1.map((row, index) => (
                    <TableRow key={index} style={rowStyle}>
                      <TableRowColumn style={paramColumnStyle}>{row.key}</TableRowColumn>
                      <TableRowColumn>{row.value} {row.unit}</TableRowColumn>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
          <div id="imageBlock" className="imageBlock" style={imageDivStyle}>
            <img src={septum} width="400"/>
            <div style={{textAlign: 'left', fontSize: 10}}>
              <p>Probe Length:  <b>{this.state.results.feedSize} mm</b></p>
              <p>Septum Thickness: {this.state.results.septumThickness} mm <i>(Not Critical)</i></p>
              <p>K = Distance from Feed Output to Septum</p>
              <p>L = Distance from Probe to Rear Wall</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
import React ,{Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    //tuple
    let aTuple : [string,number,number] = ["Manny", 32,3];

    enum Codes {first=1, second=2 };
    //any
    let firstName: any = 'Manny';
    let secondName: string = 'boaz';
    let third: number = 5.34;
    let fourth: number[] = [2,3,5];
    let fifth: boolean = false;
    let sixth:Array<string> = ['2','shoes','cars'];
    const warning = ():void=>{console.log('warning'); }

    return (
        <div className="App">
          <p className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>The value {firstName} is of {typeof firstName} type!.</p>
            <p>The value {secondName} is of {typeof secondName} type!.</p>
            <p>The value {third} is of {typeof third} type!.</p>
            <p>The value {fourth} is of {typeof fourth} type!.</p>
            <p>The value {fifth} is of {typeof fifth} type!.</p>
            <p>The value {sixth} is of {typeof sixth} type!.</p>
          </p>
        </div>
    );
  }

}

export default App;

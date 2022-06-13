import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Github} from "./Github";

export type FilterType='all'| 'dollar'|'ruble'

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    // const[filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    // if (filter === 'dollar') {
    //     currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar');
    // }
    // if (filter === 'ruble') {
    //     currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble');
    // }

    // const onClickFilterHandler = (nameButton: FilterType) => {
    //     setFilter(nameButton)
    // }

    return (
        <>
            {/*<NewComponent currentMoney={currentMoney} money={money}/>*/}
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span> {objFromMoneyArr.banknote}</span>*/}
            {/*                <span> {objFromMoneyArr.nominal}</span>*/}
            {/*                <span> {objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('all')}>all</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>*/}
            {/*    <button onClick={() => onClickFilterHandler("dollar")}>dollars</button>*/}
            {/*</div>*/}
            <Github/>
        </>


    );
}

export default App;


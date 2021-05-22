import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is react?',
        content: 'library'
    },
    {
        title: 'Why user react?',
        content: 'Marlabs requirement'
    },
    {
        title: 'How to use react?',
        content: 'To create components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;

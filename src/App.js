import React from 'react';
import ReactDOM from 'react-dom';
import seriesData from './SeariesData';
import Card from './Card';

const cardMap = (items, index, arr) => {
    console.log('map array items', items);
    console.log('map array index', index);
    console.log('actual array', arr);
    return (
        <Card
            key={index + 1}//to overcome warnig of unique key for each element
            imgsrc={items.imgsrc}
            title={items.title}
            name={items.name}
            link={items.link}
        />
    );
};

function App() {
    return (
        <React.Fragment>
            <h1 className="heading_style"> List Of Top 5 Netflix Series In 2020 </h1>
            <div class="row">
                {seriesData.map(cardMap)};
            </div>
        </React.Fragment>
    );
}

export default App;

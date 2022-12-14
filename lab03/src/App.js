import './App.css';
import {List} from 'react-virtualized';
import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import {Image} from './Image';

function App() {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(
            "https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((list) => {
                setList(list.filter(item => item.title.split(' ').length <= 7));
                setIsLoaded(true);
            });
    }, []);

    function rowRenderer(props) {
        const {index, key} = props;

        return (
            <div key={key}>
                <div>
                    <p>id: {list[index].id}<br/>
                        albumId: {list[index].albumId}<br/>
                        title: {list[index].title}
                    </p>
                </div>
                <Popup trigger={<button>Open</button>} modal nested>
                    {close => (
                        <div>
                            <Image title={list[index].title} url={list[index].thumbnailUrl}/>
                            <button className="close-photo" onClick={close}> &times;</button>
                        </div>)}
                </Popup>
            </div>
        )
    }

    return (
        (isLoaded &&
            <>
                <List
                    width={1500}
                    height={900}
                    rowHeight={120}
                    rowRenderer={rowRenderer}
                    rowCount={list.length}/>
            </>
        )
    );
}

export default App;

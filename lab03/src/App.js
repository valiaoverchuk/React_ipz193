import './App.css';
import {List} from 'react-virtualized';
import {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import Image from './Image';

function App() {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const maxWordsCount = 7;

    useEffect(() => {
        fetch(
            "https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((json) => {
                setList(json.filter(item => item.title.split(' ').length <= maxWordsCount));
                setIsLoaded(true);
            });
    }, []);

    function renderRow({index, key, style}) {
        return (
            <div key={key} style={style}>
                <p>id: {list[index].id}<br/>
                    albumId: {list[index].albumId}<br/>
                    title: {list[index].title}
                </p>
                <Popup trigger={<button className="button">Open</button>} modal nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times;</button>
                            <Image title={list[index].title} url={list[index].thumbnailUrl}/>
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
                    rowRenderer={renderRow}
                    rowCount={list.length}/>
            </>
        )
    );
}

export default App;

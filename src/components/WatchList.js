import React, {useState} from 'react';
import Form from './Form';
import Title from './Title';
import RenderList from './RenderList';

function WatchList() {
    const [titles, setTitles] = useState([]
    )

    const addTitle = title => {
        if(!title.text || /^\s*$/.test(title.text)) {
            return;
        }
        const newTitles = [title, ...titles]

        setTitles(newTitles);
    };

    const updateTitle = (titleId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTitles(prev => prev.map(item => (item.id === titleId ? newValue : item))
        );
    };

  
    const watchedTitle = watched => {
        let updateTitle = titles.map(title => {
            if(titles.watched === true) {
                alert('hi')
                title.isWatched = !title.isWatched
            } 
        return title;
        });
        setTitles(updateTitle);
    }
 
    

    const removeTitle = id => {
        const removeArr = [...titles].filter(title => title.id !== id);

        setTitles(removeArr);
      };

    const removeAll = id => {
        const removeArr = [];

        setTitles(removeArr);
      };

    return (
        <div className="container">
        <div className="watch-list-container">
            <h1>WATCH LIST</h1>
            <Form onSubmit={addTitle}/>
            
            <RenderList className="title-container" titles={titles}
            updateTitle={updateTitle}
            watchedTitle={watchedTitle}
            removeTitle={removeTitle}/>

            <Title  className="title-container" titles={titles}
            updateTitle={updateTitle}
            watchedTitle={watchedTitle}
            removeTitle={removeTitle} />
        </div>
       
        
        <button>Remove All Watched</button>
        <button onClick={removeAll}>Remove All</button>

        </div>
    )
}

export default WatchList

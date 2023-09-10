import { useState } from 'react';
import styles from './Films.module.css'
import Films from './Films'

export default function SearchForm() {
    const
        [value, setValue] = useState(''),
        [films, setFilms] = useState([]),
        [error, setError] = useState(null);

    async function getFilms(text) {
        try {
            setError(null);
            
            if (text == '') throw new Error('Вы не ввели название фильма!');

            const response = await fetch('http://www.omdbapi.com/?apikey=53ce0bd4&s=' + text);
            if (!response.ok) throw new Error('fetch ' + response.status);
            let rezult = await response.json();
            setFilms(rezult.Search);
            console.log(films);

        } catch (err) {
            setError(err);
        }
    };

    return <>
        <div >
            <input
                type="search"
                className={styles.searchInput}
                value={value}
                onInput={evt => setValue(evt.target.value)}
                placeholder='Введите название фильма для поиска...'
            ></input>
            <button
                className={styles.searchButton}
                onClick={() => getFilms(value)}
            >Найти</button>
        </div>
        <Films films={films} error={error} />
    </>
}
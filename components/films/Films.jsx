

import styles from './Films.module.css'

export default function Films({ films, error }) {
   
    if (error)
        return <><span className={styles.error}> Error = {error.message}</span></>;

    if (!films)   
        return <span className={styles.nofilm}>Фильм с таким названием не найден!</span>

    return<>
        <div className={styles.films}>
            {films.map(film =>
                <a 
                  href={'https://www.imdb.com/title/' + film.imdbID} 
                  className={styles.film} 
                  key={film.imdbID}
                  >
                    <h2>{film.Title} {film.Year}</h2>
                    <img src={film.Poster} />
                </a>)
            }
        </div>
    </>

}



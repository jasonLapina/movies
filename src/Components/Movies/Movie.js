import { useState } from 'react';
import classes from './Movie.module.scss';
import Modal from '../UI/Modal';

const Movie = (props) => {
  const [maxChar, setMaxChar] = useState(150);
  const [showModal, setShowModal] = useState(false);
  let overview = props.overview.slice(0, maxChar);
  if (overview[overview.length - 1] !== '.') {
    overview = `${props.overview.slice(0, maxChar)}...`;
  }

  const rating = `${props.rating * 10}%`;
  const multiplier = String(props.raters).length - 1;
  const raters =
    props.raters > 100
      ? `${Number(String(props.raters)[0]) * 10 ** multiplier}+`
      : props.raters;

  let ratingStyle;
  if (props.rating >= 8) {
    ratingStyle = classes['high-rating'];
  }
  if (props.rating > 4 && props.rating < 8) {
    ratingStyle = classes['mid-rating'];
  }
  if (props.rating <= 4) {
    ratingStyle = classes['low-rating'];
  }

  return (
    <div className={classes.movie}>
      {showModal && (
        <Modal
          onHideModal={() => {
            setShowModal(false);
          }}
        >
          <div className={classes['full-overview']}>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <p>
              Rating:{' '}
              <span className={`${classes['rating--modal']} ${ratingStyle}`}>
                {props.rating}
              </span>{' '}
              (<span>{props.raters}</span>)
            </p>
          </div>
        </Modal>
      )}
      <span className={`${classes.rating} ${ratingStyle}`}>
        {rating} <span className={classes.raters}>({raters})</span>
      </span>
      <a
        className={classes['btn--play']}
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
        rel='noopener noreferrer'
      >
        <ion-icon name='play-sharp'></ion-icon>
      </a>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.img}`}
        alt='movie thumbnail'
      />
      <p
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
        className={classes.overview}
      >{`${overview}`}</p>
    </div>
  );
};
export default Movie;

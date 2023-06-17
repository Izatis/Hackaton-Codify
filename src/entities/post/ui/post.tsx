import { FC } from 'react';
import s from './post.module.scss'

const Post: FC = () => {
  return (
    <div
      className={s.card}
    >
      <div className={s.card__supcontent}>
        <span className={s.card__supcontent_up}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <h3
              className={s.card__supcontent_name}
              style={{ marginRight: '20px' }}
            >
              Name
            </h3>
            <p
              className={s.card__supcontent_rating}
            >rating</p>
          </div>
          <p>...</p>
        </span>
        <span className={s.card__supcontent_bottom}>
          <h2
            className={s.card__supcontent_title}
          >
            Загаловок
          </h2>
          <p
            className={s.card__supcontent_status}
          >status</p>
        </span>
      </div>
      <img
        className={s.card__img}
        src="data:image/jpeg;base64,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" alt="" />
      <div className={s.card__subcontent}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <p
            style={{ marginRight: '20px' }}
          >Тазалык</p>
          <p>Октябрьский район</p>
        </span>
        <span>
          #hashtag
        </span>
        <p>repost</p>
        <div>
          <p>name</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
        <p>Показать следующие комментарии</p>
      </div>
    </div>
  );
};

export default Post;
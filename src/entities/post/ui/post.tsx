import { FC } from "react";
import s from "./post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsDown,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import picked from "shared/image/Vector.svg";
import { IPost } from "widgets/post-list/ui/post-list";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  return (
    <div className={s.card}>
      <div className={s.card__supcontent}>
        <span className={s.card__supcontent_up}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3
              className={s.card__supcontent_name}
              style={{ marginRight: "20px" }}
            >
              {post.author}
              <img src={picked} alt="author" />
            </h3>
            <p className={s.card__supcontent_rating}>Рейтинг: 10 баллов</p>
          </div>
        </span>
        <span className={s.card__supcontent_bottom}>
          <h2 className={s.card__supcontent_title}>{post.title}</h2>
          <p className={s.card__supcontent_status}>Проблема актуальна</p>
        </span>
      </div>
      <img className={s.card__img} src={post.file} alt="image" />
      <div className={s.card__subcontent}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "20px" }}>{post.custom_user}</p>
          <p>{post.address}</p>
        </span>
        <span>#hashtag</span>
        <span>
          <FontAwesomeIcon icon={faVolumeHigh} />
          <span>
            <FontAwesomeIcon icon={faThumbsDown} />
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </span>
        <div>
          <p>{post.author}</p>
          <p>{post.text}</p>
          <p>{post.created_at}</p>
        </div>
        <p>Показать следующие комментарии</p>
      </div>
    </div>
  );
};

export default Post;

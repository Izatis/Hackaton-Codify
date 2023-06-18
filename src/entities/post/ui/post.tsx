import { FC, useState } from "react";
import s from "./post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faThumbsDown,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import picked from "shared/image/Vector.svg";
import { IPost } from "widgets/post-list/ui/post-list";
import { DislikeOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useAddCommentMutation } from "../api/post-api";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {

  const [isShow, setIsShow] = useState(true)
  const [setComment, { data }] = useAddCommentMutation()

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
            // style={{ marginRight: "20px" }}
            >
              {/* {post.author} */}
              {/* <img src={picked} alt="author" /> */}
            </h3>
            <p className={s.card__supcontent_rating}>Рейтинг : 10 баллов</p>
          </div>
          <FontAwesomeIcon icon={faEllipsis} />
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
          <p style={{ marginRight: '20px' }}>Address:</p>
          <p>{post.address}</p>
        </span>
        <span style={{ fontWeight: 700 }}>#hashtag #hashtag #hashtag #hashtag #hashtag</span>
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FontAwesomeIcon icon={faVolumeHigh} />
          <span>
            <DislikeOutlined style={{ marginRight: '20px' }} />
            <HeartOutlined />
          </span>
        </span>
        <hr />
        <p style={{ marginTop: '10px' }}>Name</p>
        <p style={{ marginTop: '5px', marginBottom: '5px' }}>{post.text}</p>
        <div>
          {/* <p>{post.author}</p> */}
          <p style={{
            borderBottom: '1px solid #000',
            width: '40%', cursor: 'pointer'
          }}
            onClick={() => setIsShow(false)}
          >
            Показать следующие комментарии
          </p>
        </div>
        <div
          style={{ marginTop: '15px', marginBottom: '15px' }}
          hidden={isShow}
        >
          <div style={{ border: '1px solid #000', borderRadius: '8px', padding: '5px 12px', width: '60%' }}>
            {post.comments.map((el: any) => (
              <>
                <p key={el.text}>{el.text}</p>
                <p key={el.id} style={{ color: 'grey', cursor: 'pointer' }}>
                  ответить ...
                </p>
              </>
            ))}
          </div>
          <div style={{display: 'flex', marginTop: '15px'}}>
            <Input
            placeholder="введите текст"
            >
              
            </Input>
            <Button
              style={{marginLeft: '15px', background: '#7329c2', color: 'white'}}
              
            >
              отправить
            </Button>
          </div>
        </div>
        <p style={{ textAlign: 'right', marginBottom: '10px' }}>{post.created_at}</p>
      </div>
    </div>
  );
};

export default Post;

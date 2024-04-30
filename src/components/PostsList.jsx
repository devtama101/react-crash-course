import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Tama" body="Lorem ipsum" />
        <Post author="Topik" body="Dolor sit amet" />
      </ul>
    </>
  );
}

export default PostsList;

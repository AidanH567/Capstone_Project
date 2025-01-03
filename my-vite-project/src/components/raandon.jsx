<div className="single">
  <div className="content">
    <img src={`../upload/${post?.img}`} alt="" />
    <div className="user">
      {post.userImg && <img src={post.userImg} alt="" />}
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
      </div>
      {currentUser.username === post.username && (
        <div className="edit">
          <Link to={`/write?edit=2`} state={post}>
            <img src={Edit} alt="" />
          </Link>
          <img onClick={handleDelete} src={Delete} alt="" />
        </div>
      )}
    </div>
    <h1>{post.title}</h1>
    <p
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(post.desc),
      }}
    ></p>{" "}
  </div>
  <Menu cat={post.cat} />
</div>;

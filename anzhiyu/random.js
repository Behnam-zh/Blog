var posts=["2024/07/20/hello-world/","2024/07/21/解决github访问速度慢的问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
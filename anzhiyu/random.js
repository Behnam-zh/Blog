var posts=["2024/07/22/Attention-is-all-you-need/","2024/07/12/C-编译后运行慢问题/","2024/07/13/Anaconda基本配置/","2024/07/21/前缀统计/","2024/07/11/解决github访问速度慢的问题/","2024/07/14/图中点的层次/","2024/07/19/区间合并/","2024/07/17/图中的环/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
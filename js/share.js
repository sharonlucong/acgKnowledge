function sharePost(type) {
  var link = encodeURI(window.location.href);
  var title = document.getElementsByClassName("title") && document.getElementsByClassName("title")[0].textContent.trim();

  if (type == "sina") {
    window.open(
      "http://v.t.sina.com.cn/share/share.php?url=" + link  + "&title=" + title
    );
  }
  if (type == "qzone") {
    window.open(
      "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
        link +
        "&title=" +
        title
    );
  }
  if (type == "douban") {
    window.open(
      "http://www.douban.com/recommend/?url=" + link + "&title=" + title
    );
  }

  return false;
}

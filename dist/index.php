<?php
  //如果用户只输入域名，默认配置路径到网站主页    test
  //$path = "/views/index";
  header('Content-Type: text/html; charset=utf-8');  

  //判断地址栏信息是否存在域名后的部分，存在即把默认的部分替代掉
  $path='';
  //$_SERVER拿到的是类似js中location拿到的内容
  if (array_key_exists("PATH_INFO", $_SERVER)) {
      $path = $_SERVER["PATH_INFO"];
  }

  //explode(爆炸)方法用‘/’将字符串转换成数组
  //substr(str,index)字符串方法，将获取到的路径第一个‘/’截掉，否则explode转换后的数组第一个会是空字符串
  $pathArr = explode("/", substr($path, 1));

  //判断如果数组有两项，则用户传入了目录和文件名两项
  if (strlen($pathArr[0])==0) {
      $filename = 'index';
  } elseif (count($pathArr) == 1) {
      //判断如果数组只有一项，则用户只传入了主页目录，没有传主页文件名，默认补全
      $filename = $pathArr[0];
  }
   
//   var_dump($pathArr);
  include ('views/'.$filename.'.html');

?>







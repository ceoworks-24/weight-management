const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// public 폴더 내의 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
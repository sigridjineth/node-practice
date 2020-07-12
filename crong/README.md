# Starting Express.js
* https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d

## nodemon

- typescript는 ts-node-dev가 좋음

## control-z

## -g 옵션

## \_\_dirname 을 명시해주면 최상위 절대 경로를 표현할 수 있다.

## path.join

- https://stackoverflow.com/questions/7083045/fs-how-do-i-locate-a-parent-folder

## static 파일 디렉토리 설정

`app.use(express.static("public"));`

## body-parser

- POST일 때 사용함

## ejs template engine

## Can't find module TypeScript
* ```npm link typescript```

## mysql2
* mysql2를 사용해야 8버전을 지원한다.

## router
* ```express.Router()```
* https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
* https://helloinyong.tistory.com/124

## Response와 Request의 타입은 express.Response, express.Request
* https://stackoverflow.com/questions/27676884/explicitly-specifying-types-for-express-application-request-response

## WebStorm debugger 설정
* https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003518240-debugging-a-TypeScript-script-with-NodeJS

## TypeError: Router.use() requires a middleware function but got a Object
* ```module.exports = router;``` 가 명시되어 있는 지 확인
* 만약에도 문제가 있으면 컴파일된 자바스크립트 파일을 지우고 다시 실행해본다.

## 컴파일된 자바스크립트 파일 모두 지우는 방법
* https://stackoverflow.com/questions/34565872/how-to-delete-compiled-js-files-from-previous-typescript-ts-files
* ```tsc --build --clean```

## body-parser
* 설치해야 제대로 가능
* ```const urlencodedParser = bodyParser.urlencoded({ extended: true })```
* https://stackoverflow.com/questions/11625519/how-to-access-the-request-body-when-posting-using-node-js-and-express

## 나 같으면 무조건 global로 설치...
* global install과 local install에 대해 알아보자.
* package.json은 무슨 역할을 하나?
* dependencies와 dev-dependencies는 무슨 차이인가?

# response.sendFile is not a function
* 다음과 같이 request와 response를 다 명시해야 한다.
```
router.get('/', function (request: express.Request, response: express.Response) {
```
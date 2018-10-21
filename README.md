# Boiled Egg
> Backend
### Pre Requirements
```
node: 10.9.0
sqlite: 10.9.0
```

### DBMS
* production
    * postgresql
* devel
    * postgresql
* local
    * sqlite3


#### style guide
* [airbnb](https://github.com/airbnb/javascript)
    * [style guide setup](https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6)
* `.eslintrc.js`, `.jshintrc` 파일 참조
* 추가하고 싶은 가이드는 slack으로 공유 :D
    * 가이드 추가한 사람이 고쳐주기
#### test
* test framework : mocha
* 테스트 수행 : `NODE_ENV=test npm test --config=config/db.json`
* 테스트 파일 위치 : &lt;Document Root&gt;/test/
* 테스트 파일 prefix : XXX.spec.js

# 개발 플로우
1. 무슨 모델을 만들지, 생각을 한다.
1. 모델에 대한 행동들을 정의 해보고, 모델에 변경사항을 반영한다.
1. 모델을 코드로 옮긴다. (models 폴더에...)
1. 모델에 대한 행동을 테스트로 만든다. (test 폴더에...)
1. 모델에 대한 행동을 테스트를 성공시킨다.
    1. 모델에 대한 행동을 서비스 객체에 풀어낸다. (service 폴더에...)
1. 모델을 핸들링 할 수 있는 REST API 만든다. (routes/api/v1/ 폴더에....)

#### env
node : 10.9.0

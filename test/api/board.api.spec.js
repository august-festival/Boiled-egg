const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app.js");
// const sut = require("../../routes/api/v1/board");
const should = chai.should();

const baseApi = "/api/v1/";

chai.use(chaiHttp);

/* 테스트 주안점
 * controller 는 service의 외부 진입점이므로,
 * 파라미터, 응답값 등이 제대로 들어가는지 확인한다.
 */


let _token = "";
describe("board controller", () => {
    before((done) => {
        chai.request(server)
            .get(baseApi+"user/login/hgd@daum.com")
            .end((err, res) => {
                // console.log(res);
                _token = res.body.token;
                done();
            });
    });

    it("현재 로그인 한 사용자의 보드 목록을 가져올 때, 반환값은 array 로 나오고, 0보다 크거나 같아야 함", done => {
        chai.request(server)
            .get(baseApi+"boards")
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.gte(0);
                done();
            });
    });
    it("PRIVATE 한 다른 사용자의 보드는 조회할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
        chai.request(server)
            .get(baseApi+"boards/3") // test용 보드
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(403);
                done();
            })
    });
    it("PRIVATE 한 다른 사용자의 보드는 수정할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
        chai.request(server)
            .put(baseApi+"boards/3") // test용 보드
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(403);
                done();
            })
    });
    it("PRIVATE 한 다른 사용자의 보드는 삭제할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
        chai.request(server)
            .del(baseApi+"boards/3") // test용 보드
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(403);
                done();
            })
    });

    it("PUBLIC 한 다른 사용자의 보드는 조회할 수 있음, 반환값은 {} 형태로 나와야 함", done => {
        chai.request(server)
            .del(baseApi+"boards/4") // test용 보드
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.gte(0);
                done();
            })
    });
    it("PRIVATE 한 다른 사용자의 보드는 수정할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
        //?
    });
    it("PRIVATE 한 다른 사용자의 보드는 삭제할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
        //?
    });

    it("요청에 ?type=all 을 주면 내가 볼 수 있는 모든 보드를 조회함, 반환값은 [] 형태로 나와야 함", done => {
        
    });
    it("요청에 ?type=my 을 주면 내 소유의 public, private 보드만, 반환값은 [] 형태로 나와야 함", done => {
    });
    it("요청에 ?type=team 을 주면 내 팀들의 public, private 보드만, 반환값은 [] 형태로 나와야 함", done => {
    });

    it("내 소유의 보드는 boardId 를 명시하여 보드의 이름을 바꿀 수 있음, 반환값은 {}, 수정된 board 정보가 내려오면 됨", done => {
    });

    it("내 소유의 보드는 boardId 를 명시하여 보드의 visibility을 바꿀 수 있음, 반환값은 {}, 수정된 board 정보가 내려오면 됨", done => {
    });

    it("내 소유의 보드는 boardId 를 명시하여 보드를 삭제 할 수 있음, 반환값은 {}형태, status code 200", done => {
        /*
        chai.request(server)
            .del(baseApi+"boards/2")
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.gte(0);
                done();
            })
            */
    });

    it("post method 로 board 를 생성 할 수 있음, 반환값은 생성한 보드의 정보를 주면 됨", done => {
        chai.request(server)
            .post(baseApi+"boards")
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.gte(0);
                done();
            })
    });


    // it("보드 목록을 정상적으로 조회하면 200으로 array", async () => {
    //     // given
    //     // when
    //     // then
    // });
});

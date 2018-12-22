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
            .get("/api/v1/user/login/hgd@daum.com")
            .end((err, res) => {
                // console.log(res);
                _token = res.body.token;
                done();
            });
    });

    it("현재 로그인 한 사용자의 보드 목록을 가져올 때, 반환값은 array 로 나오고, 0보다 크거나 같아야 함", done => {
        chai.request(server)
            .get("/api/v1/boards")
            .set('token', _token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.gte(0);
                done();
            });
    });
    it("PRIVATE 한 다른 사용자의 보드는 조회할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
    });
    it("PRIVATE 한 다른 사용자의 보드는 수정할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
    });
    it("PRIVATE 한 다른 사용자의 보드는 삭제할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
    });

    it("PRIVATE 한 다른 사용자의 보드는 조회할 수 있음, 반환값은 {} 형태로 나와야 함", done => {
    });
    it("PRIVATE 한 다른 사용자의 보드는 수정할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
    });
    it("PRIVATE 한 다른 사용자의 보드는 삭제할 수 없음, status 값이 403, 이후 서버 로직은 타면 안됨", done => {
    });

    // it("보드 목록을 정상적으로 조회하면 200으로 array", async () => {
    //     // given
    //     // when
    //     // then
    // });
});

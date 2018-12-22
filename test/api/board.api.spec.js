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

    it("controller test", done => {
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

    // it("보드 목록을 정상적으로 조회하면 200으로 array", async () => {
    //     // given
    //     // when
    //     // then
    // });
});

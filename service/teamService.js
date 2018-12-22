/**
 * 팀 관련 서비스
 */

const Team = require("../models").team;
const Team_member = require("../models").team_member;

const team = {
    // 팀생
    create(options) {
        return Team.create({
            name: options.name,
            visibilityType: 'PRIVATE'
        }).then(rs => {
            Team_member.create({
                teamIdx: rs.teamIdx,
                userIdx :options.userIdx,
                roleType: 'ADMIN'
            });
        });
    },
    // 사용자가 속한 팀리스트 조회
    async findByUserIdx(userIdx) {
        const teamIdxArr = await Team_member.findAll({
            where: {
                userIdx
            }
        });
        const rs = await Team.findAll({
            where: {
                teamIdx: teamIdxArr.map(it => it.dataValues.teamIdx)
            }
        });
        return rs;
    }
}

module.exports = team;
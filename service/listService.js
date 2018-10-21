/**
 * 리스트에 대한 일들은 이놈이 다할 거임
 */

const List = require("../models").list;

const list = {
    create(userIdx) {
        return List.create({ userIdx });
    },
    findByUser(userIdx) {
        // user 말고 다른 애들로도 찾을 수 있을 듯.... 일단 유저로... 나중에 수정할 때 추상화 ㄲㄲ
        return List.findAll({
            where: {
                userIdx,
            },
        });
    },
    findByBoardIdx(boardIdx) {
        // board의 idx를 이용하여 찾을 수 있음
        // 유니크 하니까 하나만 나와야함 findAll 말고 find있으면 좋을것 같음.
        // list 아님 유일
        return List.findOne({
            where: {
                listIdx,
            },
        });
    },
    modify(boardIdx, res) {
        // res에 바꿀 내용 다 들어있음
        const targetList = this.findByBoardIdx(listIdx);
        // 이름만 우선
        targetList.name = res.name;

        return targetList;
    },
    delete(boardIdx) {
        const targetList = this.findByBoardIdx(listIdx);
        targetList.delflag = true;

        return targetList;
    }
};

module.exports = list;

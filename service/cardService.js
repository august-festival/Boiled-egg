/**
 * 카드에 대한 일들은 이놈이 다할 거임
 */

const Card = require("../models").card;

const card = {
    create(listIdx) {
        return Card.create({ listIdx });
    },
    findByList(listIdx) {
        // 리스트로 찾을수 있음
        return Card.findAll({
            where: {
                listIdx,
            },
        });
    },
    findByCardId(cardIdx) {
        // card의 idx를 이용하여 찾을 수 있음
        // 유니크 하니까 하나만 나와야함 findAll 말고 find있으면 좋을것 같음.
        // list 아님 유일
        return Board.findOne({
            where: {
                cardIdx,
            },
        });
    },
    modify(cardIdx, res) {
        // FIXME : 여기 대충만 적어놨어여

        // res에 바꿀 내용 다 들어있음
        const targetCard = this.findByCardId(cardIdx);
        // 이름만 우선
        targetCard.name = res.name;

        return targetCard;
    },
    delete(boardIdx) {
        const targetCard = this.findByCardId(cardIdx);
        targetCard.delflag = true;

        return targetCard;
    },
    all() {
        // 카드 다 갖고오기
        return Card.all();
    }
};

module.exports = card;

import { DAT_CUOC, PLAY_AGAIN, PLAY_GAME } from "../types/GameBauCuaType";

const datCuoc = (quanCuoc, value) => ({
    type: DAT_CUOC,
    quanCuoc,
    value,
});

const playGame = (end) => ({
    type: PLAY_GAME,
    end,
});

const playAgain = () => ({
    type: PLAY_AGAIN,

});

export {
    datCuoc,
    playGame,
    playAgain,
}
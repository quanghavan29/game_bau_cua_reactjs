import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from '../redux/actions/GameBauCuaAction';

export default function DiemCuoc(props) {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem);

    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <p style={{ color: "green" }} className="display-4 p-3">GAME BẦU CUA</p>
            <div className="mt-3">
                <span className="text-white bg-danger p-3" style={{fontSize: '20px', borderRadius: '5%'}}>
                    Tiền thưởng: <span>{tongDiem.toLocaleString()}$</span>
                </span>
            </div>
            <div className="mt-5">
                <button className="btn btn-success" style={{fontSize: 18}} onClick={() => {dispatch(playAgain())}}>Chơi lại</button>
            </div>
        </div>
    )
}

import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './BaiTapGameBauCua.css';

export default function GameBuaCua(props) {
    return (
        <div className="container-fluid" id="BaiTapGameBauCua">
            <DiemCuoc />
            <div className="row">
                <div className="col-8" style={{paddingLeft: '8%'}}>
                    <DanhSachCuoc />
                </div>
                <div className="col-4 pl-5">
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}

import React, { Component } from 'react'
import "../../style/style.css"
import DanhSachGhe from './DanhSachGhe'
import ChiTiet from './ChiTiet'


export default class BaiTapDatGhe extends Component {
  render() {
    return (
      <div className=" background">
      <div className='overlay'></div>
      <div className='homepage'>
          <div className="col-8 text-center" >
              <h1 className='text-warning'>BOOKING MOVIE TICKET</h1>
              <h5 className='headTable text-light'>screen</h5>
              <div className='screen'></div>
              <DanhSachGhe />
          </div>
          <div className="col-4">
              <h1>SELECTED LIST</h1>
              <div className='m-2'>
                  <div className='d-flex'>
                      <button className="chair mb-2 gheDuocChon"></button>
                      <span className='textBtn ml-2'>Ghế đã chọn</span>
                  </div>
                  <div className='d-flex'>
                      <button className="chair mb-2 gheDangChon"></button>
                      <span className='textBtn ml-2'>Ghế đang chọn</span>
                  </div>
                  <div className='d-flex'>
                      <button className="chair"></button>
                      <span className='textBtn ml-2'>Ghế chưa đặt</span>
                  </div>
              </div>
              <ChiTiet />



          </div>
      </div>

  </div >
    )
  }
}

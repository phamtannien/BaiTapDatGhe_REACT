import React, { Component } from 'react'
import Ghe from './Ghe'
import { connect } from 'react-redux'

class DanhSachGhe extends Component {
    renderContent = () => {
        return this.props.danhSachGhe.map((element) => {
            return <Ghe key={element.hang} element={element} />
        });
    };
    render() {
        return (

            <table className="tableLeft">
                <thead>
                    <tr className='color'>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        {this.renderContent()}
                    
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGhe: state.datGheReducer.danhSachGhe,
    };
};
export default connect(mapStateToProps)(DanhSachGhe);






    


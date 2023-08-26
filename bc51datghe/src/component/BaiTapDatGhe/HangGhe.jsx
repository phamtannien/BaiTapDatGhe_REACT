import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ghe from "./Ghe"
import { chonGheAction } from '../../store/actions/datGheAction';
 class HangGhe extends Component {
 
  render() {
    
    const { soGhe, dangChon, daDat } = this.props.element;
    return (

        <td>
            <button onClick={() => this.props.dispatch(chonGheAction(this.props.element))
            }
                className={`chair ${dangChon && "gheDangChon"} ${daDat && "gheDuocChon"}`} disabled={daDat}>{soGhe}</button>
        </td>

    )
}
}



export default connect()(HangGhe)



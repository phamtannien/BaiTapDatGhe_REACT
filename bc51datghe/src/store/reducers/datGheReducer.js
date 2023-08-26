import { act } from "react-dom/test-utils";
import data from "../../data/danhSachGhe.json"


const DEFAULT_STATE = {
    danhSachGhe: data,
    danhSach: [],
}

export const datGheReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "CHON_GHE": {
            const data = JSON.parse(JSON.stringify(state.danhSachGhe));
            const index = data[action.payload.soHang].danhSachGhe.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            );

            data[action.payload.soHang].danhSachGhe[index].dangChon = !data[action.payload.soHang].danhSachGhe[index].dangChon;
            const index1 = state.danhSach.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            )
            if (index1 !== -1) {

            } else {
                state.danhSach.push(data[action.payload.soHang].danhSachGhe[index]);
            }

            state.danhSachGhe = data;

            break;
        }
        case "XOA_GHE": {
            const data1 = JSON.parse(JSON.stringify(state.danhSach));
            const index1 = data1.findIndex((element) => {
                return element.soGhe === action.payload.soGhe;
            })
            data1.splice(index1, 1);

            const data = JSON.parse(JSON.stringify(state.danhSachGhe));
            const index = data[action.payload.soHang].danhSachGhe.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            );

            data[action.payload.soHang].danhSachGhe[index].dangChon = !data[action.payload.soHang].danhSachGhe[index].dangChon;


            state.danhSach = data1;
            state.danhSachGhe = data;

            break;
        }
       

    }


    return { ...state };
};
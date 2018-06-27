import MemberShipType from "../enums/MemberShipType";
import { ActionTypes } from "../action/memberShipAction";
// import 

const initialState = MemberShipType.GUEST

function memberShipReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.CHANGE_MEMBERSHIP: 
            return action.memberShipType;
        case ActionTypes.UNREGISTER:
            return MemberShipType.GUEST
    }
    return state;
}

export default memberShipReducer;
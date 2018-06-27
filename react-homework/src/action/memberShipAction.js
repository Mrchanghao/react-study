export const ActionTypes = {
    CHANGE_MEMBERSHIP: 'CHANGE_MEMBERSHIP',
    UNREGISTER: 'UNREGISTER'
}


export function changeMembership(memberShip) {
    return {
        type: 'CHANGE_MEMBERSHIP',
        memberShip
    }
}

export function unRegister() {
    return {
        type: ActionTypes.UNREGISTER
    }
}
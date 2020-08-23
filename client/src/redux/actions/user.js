import {
    SIGNIN
} from '../../constants/action.type'

const signin = user => {
    return {
        type: SIGNIN,
        payload: user
    }
}


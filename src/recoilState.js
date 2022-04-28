import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const tokenState = atom({
    key: 'tokenState', // unique ID (with respect to other atoms/selectors)
    default:undefined,
    effects_UNSTABLE:[persistAtom]
  });

  export const passwordState = atom({
    key: 'passwordState', // unique ID (with respect to other atoms/selectors)
    default:undefined,
    effects_UNSTABLE:[persistAtom]
  });
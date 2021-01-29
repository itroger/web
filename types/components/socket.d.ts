import {BaseType} from 'base'

export interface SocketType extends BaseType {

}

export interface TimeProps extends BaseType {

}

export interface LoginProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  setNickName: (nickName: string) => void
}

export interface ChatProps {
  visible: boolean,
  nickName: string
}

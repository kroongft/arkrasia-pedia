import { ArmoriesKeyType } from '@/@types/armories'
import axiosInstance from './axiosInstance'

export const getArmories = (characterName: string, key?: ArmoriesKeyType) => {
  let keyValue = '' as string
  if (key) {
    keyValue = `/${key}`
  }
  return axiosInstance.get(`/armories/characters/${characterName}${keyValue}`)
}

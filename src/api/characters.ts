import axiosInstance from './axiosInstance'

export const getCharacters = (characterName: string) => {
  return axiosInstance.get(`/characters/${characterName}/siblings`)
}

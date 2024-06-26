export type ArmoriesKeyType =
  | 'profiles'
  | 'equipment'
  | 'avatars'
  | 'combat-skills'
  | 'engravings'
  | 'cards'
  | 'gems'
  | 'colosseums'
  | 'collectibles'

export interface Armory {
  CharacterImage: string
  ExpeditionLevel: number
  PvpGradeName: string
  TownLevel: number
  TownName: string
  Title: string
  GuildMemberGrade: string
  GuildName: string
  UsingSkillPoint: number
  TotalSkillPoint: number
  Stats: Stat[]
  Tendencies: Tendency[]
  ServerName: string
  CharacterName: string
  CharacterLevel: number
  CharacterClassName: string
  ItemAvgLevel: string
  ItemMaxLevel: string
}

export interface Stat {
  Type: string
  Value: string
  Tooltip: string[]
}

export interface Tendency {
  Type: string
  Point: number
  MaxPoint: number
}

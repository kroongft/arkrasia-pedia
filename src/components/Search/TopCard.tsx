import { ArmoryProfile } from '@/@types/armories'
import { Card, Image, Chip } from '@nextui-org/react'
import React from 'react'

interface TopCardProps {
  profile: ArmoryProfile
}

function TopCard(props: TopCardProps) {
  const { profile } = props
  return (
    <Card className="w-full h-[300px] bg-[#15181d] relative flex flex-row">
      <Image
        alt={profile.CharacterName}
        removeWrapper
        className="z-0 h-full object-cover absolute left-[100px] top-[100px] scale-[2]"
        src={profile.CharacterImage}
      />
      <div className="absolute left-[400px] h-full flex flex-col text-white p-5 justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 text-small">
            <Chip
              size="sm"
              variant="flat"
              classNames={{
                content: 'text-white',
              }}
            >
              {profile.ServerName}
            </Chip>
            <Chip
              size="sm"
              variant="flat"
              classNames={{
                content: 'text-white',
              }}
            >
              {profile.CharacterClassName}
            </Chip>
          </div>
          <div className="text-sm mt-1 font-light">{profile.Title}</div>
          <div className="text-xl">{profile.CharacterName}</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex align-middle gap-2">
            <div className="flex justify-end w-[47px]">
              <Chip size="sm" color="primary" variant="flat">
                아이템
              </Chip>
            </div>
            <div>{profile.ItemMaxLevel}</div>
          </div>
          <div className="flex align-middle gap-2">
            <div className="flex justify-end w-[47px]">
              <Chip size="sm" color="success" variant="flat">
                전투
              </Chip>
            </div>
            <div>Lv.{profile.CharacterLevel}</div>
          </div>
          <div className="flex align-middle gap-2">
            <div className="flex justify-end w-[47px]">
              <Chip size="sm" color="warning" variant="flat">
                원정대
              </Chip>
            </div>
            <div>Lv.{profile.ExpeditionLevel}</div>
          </div>
        </div>
      </div>
      <div className="z-3 w-[250px] absolute top-20 right-[-15px] rotate-[14deg] opacity-10">
        <img
          alt={profile.CharacterClassName}
          src={`/images/class/${profile.CharacterClassName}.svg`}
        />
      </div>
    </Card>
  )
}

export default TopCard

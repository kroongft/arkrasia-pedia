import { ArmoryEngraving, ArmoryProfile } from '@/@types/armories'
import { Card, Chip, Image } from '@nextui-org/react'
import React from 'react'

interface LeftSecctionProps {
  profile: ArmoryProfile
  engraving: ArmoryEngraving | null
}

function LeftSection(props: LeftSecctionProps) {
  const { profile, engraving } = props
  return (
    <div className="flex flex-col gap-4 shrink-0">
      <Card radius="lg" className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex align-middle gap-2">
            <div className="flex justify-end">
              <Chip size="sm" variant="flat">
                길드
              </Chip>
            </div>
            <div className="text-sm">{profile.GuildName}</div>
          </div>
          <div className="flex align-middle gap-2">
            <div className="flex justify-end">
              <Chip size="sm" variant="flat">
                영지
              </Chip>
            </div>
            <div className="text-sm">{profile.TownName}</div>
          </div>
          <div className="flex align-middle gap-2">
            <div className="flex justify-end">
              <Chip size="sm" variant="flat">
                PVP
              </Chip>
            </div>
            <div className="text-sm">{profile.PvpGradeName}</div>
          </div>
        </div>
      </Card>
      <Card radius="lg" className="p-4">
        <div className="flex flex-col gap-1">
          {engraving?.Effects.map((effect) => (
            <div className="flex gap-1 items-center" key={effect.Name}>
              <Image
                radius="sm"
                width={40}
                className=""
                alt={effect.Name}
                src={effect.Icon}
              />
              <div className="text-sm">{effect.Name}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default LeftSection

import { Armory } from '@/@types/armories'
import { IParams } from '@/@types/interface'
import { getArmories } from '@/api/armories'
import { Card, Chip, Image } from '@nextui-org/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

function CharacterPage({
  armories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(armories)

  const {
    ArmoryAvatars,
    ArmoryCard,
    ArmoryProfile,
    ArmoryEngraving,
    ArmoryEquipment,
    ArmoryGem,
    ArmorySkills,
    Collectibles,
    ColosseumInfo,
  } = armories
  return (
    <div className="flex">
      <div className="w-full">
        <Card className="w-full h-[300px] bg-[#15181d] relative flex flex-row">
          <Image
            alt={ArmoryProfile.CharacterName}
            removeWrapper
            className="z-0 h-full object-cover absolute left-[100px] top-[100px] scale-[2]"
            src={ArmoryProfile.CharacterImage}
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
                  {ArmoryProfile.ServerName}
                </Chip>
                <Chip
                  size="sm"
                  variant="flat"
                  classNames={{
                    content: 'text-white',
                  }}
                >
                  {ArmoryProfile.CharacterClassName}
                </Chip>
              </div>
              <div className="text-sm mt-1 font-light">
                {ArmoryProfile.Title}
              </div>
              <div className="text-xl">{ArmoryProfile.CharacterName}</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex align-middle gap-2">
                <div className="flex justify-end w-[47px]">
                  <Chip size="sm" color="primary" variant="flat">
                    아이템
                  </Chip>
                </div>
                <div>{ArmoryProfile.ItemMaxLevel}</div>
              </div>
              <div className="flex align-middle gap-2">
                <div className="flex justify-end w-[47px]">
                  <Chip size="sm" color="success" variant="flat">
                    전투
                  </Chip>
                </div>
                <div>Lv.{ArmoryProfile.CharacterLevel}</div>
              </div>
              <div className="flex align-middle gap-2">
                <div className="flex justify-end w-[47px]">
                  <Chip size="sm" color="warning" variant="flat">
                    원정대
                  </Chip>
                </div>
                <div>Lv.{ArmoryProfile.ExpeditionLevel}</div>
              </div>
            </div>
          </div>
          <div className="z-3 w-[250px] absolute top-20 right-[-15px] rotate-[14deg] opacity-10">
            <img
              alt={ArmoryProfile.CharacterClassName}
              src={`/images/class/${ArmoryProfile.CharacterClassName}.svg`}
            />
          </div>
        </Card>
        <div className="flex flex-row mt-4 gap-4">
          <div className="flex flex-col gap-4 shrink-0">
            <Card radius="lg" className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex align-middle gap-2">
                  <div className="flex justify-end">
                    <Chip size="sm" variant="flat">
                      길드
                    </Chip>
                  </div>
                  <div className="text-sm">{ArmoryProfile.GuildName}</div>
                </div>
                <div className="flex align-middle gap-2">
                  <div className="flex justify-end">
                    <Chip size="sm" variant="flat">
                      영지
                    </Chip>
                  </div>
                  <div className="text-sm">{ArmoryProfile.TownName}</div>
                </div>
                <div className="flex align-middle gap-2">
                  <div className="flex justify-end">
                    <Chip size="sm" variant="flat">
                      PVP
                    </Chip>
                  </div>
                  <div className="text-sm">{ArmoryProfile.PvpGradeName}</div>
                </div>
              </div>
            </Card>
            <Card radius="lg" className="p-4">
              <div className="flex flex-col gap-1">
                {ArmoryEngraving.Effects.map((effect) => (
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
          <div className="w-full">
            <Card className="w-full p-4" radius="lg">
              <div className="text-lg font-bold">장비</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  armories: Armory
}> = async (context) => {
  const { name } = context.params as IParams

  let armories = null

  if (name) {
    try {
      armories = (await getArmories(name)).data
    } catch (e) {
      console.error(e)
    }
  }

  return {
    props: { armories },
  }
}

export default CharacterPage

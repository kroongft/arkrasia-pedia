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
  return (
    <div className="flex">
      <div className="w-full">
        <Card className="w-full h-[300px] bg-[#15181d] relative flex flex-row">
          <Image
            alt={armories.CharacterName}
            removeWrapper
            className="z-0 h-full object-cover absolute left-[100px] top-[100px] scale-[2]"
            src={armories.CharacterImage}
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
                  {armories.ServerName}
                </Chip>
                <Chip
                  size="sm"
                  variant="flat"
                  classNames={{
                    content: 'text-white',
                  }}
                >
                  {armories.CharacterClassName}
                </Chip>
              </div>
              <div className="text-sm mt-1 font-light">{armories.Title}</div>
              <div className="text-xl">{armories.CharacterName}</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="text-xs">
                  <Chip size="sm" color="primary" variant="flat">
                    아이템
                  </Chip>
                </div>
                <div>{armories.ItemMaxLevel}</div>
              </div>
              <div className="flex gap-2">
                <div className="text-xs">
                  <Chip size="sm" color="success" variant="flat">
                    전투
                  </Chip>
                </div>
                <div>Lv.{armories.CharacterLevel}</div>
              </div>
              <div className="flex gap-2">
                <div className="text-xs">
                  <Chip size="sm" color="warning" variant="flat">
                    원정대
                  </Chip>
                </div>
                <div>Lv.{armories.ExpeditionLevel}</div>
              </div>
            </div>
          </div>
          <div className="z-3 w-[250px] absolute top-10 right-[-15px] rotate-[14deg] opacity-10">
            <img
              alt={armories.CharacterClassName}
              src={`/images/class/${armories.CharacterClassName}.svg`}
            />
          </div>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="p-2 border-none bg-white/30 blur-2"
        >
          <div className="flex">
            {armories.GuildName}
            <br />
            {armories.TownName}
            <br />
            {armories.PvpGradeName}
          </div>
        </Card>
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
      armories = (await getArmories(name, 'profiles')).data
    } catch (e) {
      console.error(e)
    }
  }

  return {
    props: { armories },
  }
}

export default CharacterPage

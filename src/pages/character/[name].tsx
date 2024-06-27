import { Armory } from '@/@types/armories'
import { IParams } from '@/@types/interface'
import { getArmories } from '@/api/armories'
import LeftSection from '@/components/Search/LeftSection'
import TopCard from '@/components/Search/TopCard'
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
        <TopCard profile={ArmoryProfile} />
        <div className="flex flex-row mt-4 gap-4">
          <LeftSection profile={ArmoryProfile} engraving={ArmoryEngraving} />
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

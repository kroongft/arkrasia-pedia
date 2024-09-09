import { Armory } from '@/@types/armories'
import { IParams } from '@/@types/interface'
import { getArmories } from '@/api/armories'
import LeftSection from '@/components/Search/LeftSection'
import RightSection from '@/components/Search/RightSection'
import TopCard from '@/components/Search/TopCard'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

function CharacterPage({
  armories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { ArmoryProfile, ArmoryEngraving, ArmoryEquipment } = armories
  return (
    <div className="flex">
      <div className="w-full">
        <TopCard profile={ArmoryProfile} />
        <div className="flex flex-row mt-4 gap-4">
          <LeftSection profile={ArmoryProfile} engraving={ArmoryEngraving} />
          <div className="w-full">
            <RightSection equipments={ArmoryEquipment} />
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

import { Equipment } from '@/@types/armories'
import { GradeColor } from '@/constants/Color'
import { Card, Image } from '@nextui-org/react'
import { isEmpty } from 'lodash'
import React, { useMemo } from 'react'

interface RightSectionProps {
  equipments: Equipment[]
}

function RightSection(props: RightSectionProps) {
  const { equipments } = props

  const tempEquipment = useMemo(() => {
    let result = {} as { equipment: Equipment[]; accessory: Equipment[] }
    if (!isEmpty(equipments)) {
      result = {
        equipment: equipments.slice(0, 6),
        accessory: equipments.slice(6, 12),
      }
    }
    return result
  }, [equipments])

  return (
    <Card className="w-full p-4" radius="lg">
      <div className="text-lg font-bold">장비</div>
      <div className="mt-4 flex gap-6">
        <div className="flex flex-col gap-2">
          {tempEquipment.equipment.map((item) => (
            <div className="flex gap-1 items-center" key={item.Name}>
              <div
                className={`w-[40px] h-[40px] rounded-lg ${GradeColor[item.Grade]}`}
              >
                <Image className="" alt={item.Name} src={item.Icon} />
              </div>
              <div className="text-sm">{item.Name}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {tempEquipment.accessory.map((item) => {
            return (
              <div className="flex gap-1 items-center" key={item.Name}>
                <div
                  className={`w-[40px] h-[40px] rounded-lg ${GradeColor[item.Grade]}`}
                >
                  <Image
                    radius="sm"
                    width={40}
                    className=""
                    alt={item.Name}
                    src={item.Icon}
                  />
                </div>
                <div className="text-sm">{item.Name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

export default RightSection

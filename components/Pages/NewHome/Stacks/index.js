import NewCard from '@/components/Card/NewCard'
import React, { useState } from 'react'
import StacksCard from './StacksCard'
import NewChip from '@/components/Common/NewChip'
import ComponentHeader from '../ComponentHeader'

const STACKS = [
  [
    {
      name: 'Java',
      image: '/img/stacks/java-icon.svg',
    },
    {
      name: 'Flutter',
      image: '/img/stacks/flutter-icon.svg',
    },
    {
      name: 'Android Native',
      image: '/img/stacks/android-icon.svg',
    },
 
  ],
  [
    {
      name: 'Javascript',
      image: '/img/stacks/javascript-original.svg',
    },
    {
      name: 'Mysql',
      image: '/img/stacks/mysql-original-wordmark.svg',
    },
    {
      name: 'Python',
      image: '/img/stacks/python-original.svg',
    },
  ],
  [
    {
      name: 'Linux',
      image: '/img/stacks/linux-original.svg',
    },
  
    {
      name: 'Dart',
      image: '/img/stacks/dart-icon.svg',
    },
    {
      name: 'Firebase',
      image: '/img/stacks/firebase-icon.svg',
    }
  ],
]

export default function Stacks() {
  const getAllData = () => {
    setStack(STACKS)
  }

  const [stack, setStack] = useState(STACKS.filter((data, index) => index < 2))
  return (
    <NewCard className="px-0" id="stacks" data-name="Stacks">
      <div className="px-9">
        <ComponentHeader
          title="Stack"
          description="Software and resources I use on a regular basis."
        />
      </div>

      <div className="mt-10">
        <div className=" border-t border-primary-1 dark:border-darkmode-border">
          {stack.map((stackGroup, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 border-b border-primary-1 px-9 py-9 dark:border-darkmode-border max-sm:grid-cols-2 max-sm:gap-8 max-xs:grid-cols-1"
            >
              {stackGroup.map((stack, index) => (
                <StacksCard
                  className="justify-self-start border-primary-1 dark:border-darkmode-border max-sm:justify-self-start"
                  key={index}
                  data={stack}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <NewChip
        className="button ml-11 mt-9 inline-block px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link"
        as="button"
        onClick={getAllData}
      >
        View All Stack
      </NewChip>
    </NewCard>
  )
}

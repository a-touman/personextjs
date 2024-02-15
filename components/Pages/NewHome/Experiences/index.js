import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import ExperienceCard from './ExperiencesCard'
import ComponentHeader from '../ComponentHeader'
import classNames from 'classnames'

const EXPERIENCES = [
  {
    company: 'Fabrikod',
    description:
      'Working mainly as a Flutter Developer maintaining Kindertrack, Kinderway, Sleepybaby and other applications.',
    date: '07/2022',
    position: 'Software Engineer',
  },
  {
    company: 'UniToni',
    description:
      'One of the early founders and the main developer for the Mobile App.',
    date: '06/2022 - 07/2023',
    position: 'Software Development Professional',
  },
]

export default function Experiences() {
  return (
    <NewCard className="px-0" id="experiences" data-name="Experiences">
      <div className="px-9">
        <ComponentHeader
          title="Experience"
          description="Coordination, and problem-solving abilities"
        />
      </div>

      <div className="mt-10 flex flex-col">
        {EXPERIENCES.map((experience, index, array) => (
          <ExperienceCard
            data={experience}
            key={index}
            className={classNames(index === array.length - 1 && 'border-b')}
          />
        ))}
      </div>

      <NewChip
        as="a"
        href="/abdallah-touman-cv.pdf"
        className="button ml-11 mt-9 inline-block px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link"
      >
        Download Resume
      </NewChip>
    </NewCard>
  )
}

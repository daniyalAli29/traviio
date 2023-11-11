import React, { PropsWithChildren } from 'react'

interface PropsType {
  className?: string
  id?: string
}

function Container(props: PropsWithChildren<PropsType>) {
  return (
    <section id={props.id} className={'mx-auto max-w-[1312px] px-4 ' + props.className}>
      {props.children}
    </section>
  )
}

export default Container

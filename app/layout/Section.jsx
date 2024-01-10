import React from 'react'
import { paddingContent } from '../CONST/global'

const Section = ({children,padding,bg,style}) => {
  return (
    <div style={style} className={`${padding && paddingContent} ${bg && bg} mb-2 py-4` }>
        {children}
    </div>
  )
}

export default Section
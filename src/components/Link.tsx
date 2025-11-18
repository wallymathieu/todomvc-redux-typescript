import React from 'react'
import classnames from 'classnames'

const Link:React.FunctionComponent<LinkProps> = ({ active, children, setFilter }:LinkProps) =>
  (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )

export interface LinkProps{
  active:boolean;
  children:string;
  setFilter:{():void};
}

export default Link

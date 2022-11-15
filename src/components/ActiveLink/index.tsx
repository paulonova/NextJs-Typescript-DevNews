import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  //children: ReactElement
  activeClassName: string
  pageName: string
}

const ActiveLink = ({
  pageName,
  activeClassName,
  ...otherProps
}: ActiveLinkProps) => {
  const { asPath } = useRouter()
  const className = asPath === otherProps.href ? activeClassName : ''
  return (
    <Link className={className} {...otherProps}>
      {pageName}
    </Link>
  )
}

export default ActiveLink

/**
 * LinkProps => Have all attributes from Link/Next
 *
 * ** To set any attribute to a children, ex: a className, but children is an element
 * and not a component! How to do?
 *
 * <Link {...otherProps}>{children}</Link>
 *
 * USE: cloneElement() from Next
 *
 * <Link {...otherProps}>{cloneElement(children, {className})}</Link>
 * cloneelement recieve two parameters, 1. the element, 2. the attribute..
 *
 */

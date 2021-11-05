import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { WithRequiredChildren } from '~/common/typeUtils'

export const ActiveLink = ({
    children,
    href,
    ...props
}: WithRequiredChildren<{ href: string } & LinkProps>) => {
    const router = useRouter()
    const style = useMemo(
        () => ({
            // fontSize: '18px',
            color: 'rgb(53,64,82,0.75)',
            _hover: {
                bg: 'gray.200',
            },
            // _active: {
            // bg: 'gray.300',
            // boxShadow: '0 0 3px rgb(100,100,100)',
            // },
            _focus: {
                boxShadow: ['', '0 0 0 3px rgb(200,200,200)'],
                // bg: 'gray.300',
            },
            ...(router.pathname === href
                ? {
                      bg: 'gray.100',
                  }
                : {}),
        }),
        []
    )

    return (
        <NextLink href={href} passHref shallow>
            <Link {...style} {...props}>
                {children}
            </Link>
        </NextLink>
    )
}

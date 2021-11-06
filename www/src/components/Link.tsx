import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { UrlObject } from 'url'
import NextLink from 'next/link'
import { WithRequiredChildren } from '~/common/typeUtils'

export type Url = string | UrlObject

export const Link = ({ children, href, ...props }: WithRequiredChildren<{ href: Url }>) => {
    const style = useMemo(
        () => ({
            _hover: {
                transform: 'scale(1.07)',
            },
        }),
        []
    )

    return (
        <NextLink href={href} passHref shallow>
            <ChakraLink {...style} {...props}>
                {children}
            </ChakraLink>
        </NextLink>
    )
}

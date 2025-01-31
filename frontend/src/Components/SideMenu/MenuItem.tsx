import React from 'react'
import styled from 'styled-components'
import { chevron_down, chevron_right, IconData } from '@equinor/eds-icons'
import { Icon, Typography } from '@equinor/eds-core-react'
import { tokens } from '@equinor/eds-tokens'

const NameDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    user-select: none;
    padding: 0.5rem 0.5rem;
`

const StyledIcon = styled(Icon)`
    color: ${tokens.colors.text.static_icons__secondary.rgba};
    margin-right: 0.5rem;
`

interface Props {
    title: string
    isSelected: boolean
    icon?: IconData
    isOpen?: boolean
    onClick?: () => void
    style?: object
}

const MenuItem = ({ title, isSelected, icon, isOpen, onClick, style }: Props) => {
    const selectedColor = tokens.colors.infographic.primary__moss_green_100.rgba

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...style }} onClick={onClick}>
            <NameDiv>
                {icon && <StyledIcon data={icon} color={isSelected ? selectedColor : ''}></StyledIcon>}
                <Typography color={isSelected ? selectedColor : ''}>{title}</Typography>
            </NameDiv>
            {onClick !== undefined && <StyledIcon data={isOpen ? chevron_down : chevron_right}></StyledIcon>}
        </div>
    )
}

export default MenuItem

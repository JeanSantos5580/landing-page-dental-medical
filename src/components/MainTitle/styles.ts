import styled from 'styled-components'

const TEXT_ALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const

type MainTitleContainerProps = {
  align: keyof typeof TEXT_ALIGN
}

export const MainTitleContainer = styled.div<MainTitleContainerProps>`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'General Sans', sans-serif;
    font-weight: 600;
    line-height: 125%;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.dark_blue};
    text-align: ${(props) => TEXT_ALIGN[props.align]};
  }

  small {
    font-family: 'General Sans', sans-serif;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.27px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.body_text};
  }
`

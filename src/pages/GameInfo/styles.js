import styled from 'styled-components'
import reddit from '../../assets/images/reddit.png'

export const BoxResume = styled.div`
  margin: 50px auto;
  padding: 52px 48px;
  width: 1024px;
  min-height: 800px;
  border-radius: 50px;
`

export const BoxZ = styled.div`  
  z-index:5;
`

export const BoxResumeBackImage = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.15;
  margin: 50px auto;
  padding: 52px 48px;
  width: 1024px;
  min-height: 800px;
  border-radius: 50px;
  background: ${({ image }) => `url(${image})`} no-repeat center;
  background-size: cover;
  z-index:-5;
`;

export const Row = styled.div`
  display:flex;
  margin: 19px 0px;
  justify-content:space-between;
  align-items:center;
`

export const Title = styled.span`
  font-family:'Noto Sans';
  font-size:36px;
  color:white;
`

export const DateBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 126px;
  height: 24px;
  background: #333333;
  border-radius: 5px;
`

export const DateRelese = styled.span`
  font-family:'Noto Sans';
  font-size:16px;
  color:white;
  font-weight:300;
  line-height:21.79px;
`

export const PlatformsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PlatformIcon = styled.div`
  margin-right: 20px;
`

export const AboutText = styled.span`
  font-family:'Noto Sans';
  font-size:18px;
  color:white;
`

export const GamePublishers= styled.div`
  margin-right: 5px;
`

export const Playtime = styled.div`
  font-family: 'Noto Sans';
  width: 110px;
  height: 22px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`

export const AboutResume = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`

export const Resume = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`

export const ResumeBox = styled.div`
  display: block;
  width: 456px;
  height: 198px;
  cursor: pointer;
  overflow-y:hidden;
`
export const StoreWraper = styled.div`
  width: 456px;
  height: 280px;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  margin-top: 30px;
`
export const DivTeste = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  align-self: flex-end;
`
export const LinkOfficial = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: white;
  cursor: pointer;
  margin-bottom:5px;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const RedditIcon = styled.span`
  background-image:url(${reddit});
  width: 20px;
  height: 20px;
  color:white;
  background-position: center;
  background-size: cover;
  cursor:pointer;
`

export const LinkReddit = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: white;
  cursor:pointer;
  margin-left:8px;
`

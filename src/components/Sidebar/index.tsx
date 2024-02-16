import { FaTimes } from 'react-icons/fa'
import { IoHomeOutline, IoInformationCircleOutline } from 'react-icons/io5'
import { LiaBlogSolid } from 'react-icons/lia'
import { MdOutlineContactPhone, MdOutlineMedicalServices } from 'react-icons/md'
import { SidebarItem } from './SidebarItem'
import { Content, SidebarContainer } from './styles'
type Props = {
  active: (isOpen: boolean) => void
}
export function Sidebar({ active }: Props) {
  const handleCloseSidebar = () => {
    active(false)
  }
  return (
    <SidebarContainer>
      <FaTimes onClick={handleCloseSidebar} />
      <Content>
        <SidebarItem icon={<IoHomeOutline />} title="Home" />
        <SidebarItem icon={<MdOutlineMedicalServices />} title="Services" />
        <SidebarItem icon={<LiaBlogSolid />} title="Blogs" />
        <SidebarItem icon={<IoInformationCircleOutline />} title="About" />
        <SidebarItem icon={<MdOutlineContactPhone />} title="Contact" />
      </Content>
    </SidebarContainer>
  )
}

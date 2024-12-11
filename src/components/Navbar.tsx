import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '@/assets/logo.webp'
import ColorModeSwitcher from './ColorModeSwitcher'

const Navbar = () => {
  return (
    <HStack>
        <Image src={Logo} width={50} height={50} />
        <ColorModeSwitcher />
    </HStack>
  )
}

export default Navbar
import { Switch } from "@/components/ui/switch"
import { useColorMode } from './ui/color-mode'

const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return <Switch checked={colorMode === 'dark'} onChange={toggleColorMode} >Dark Mode</Switch>
}

export default ColorModeSwitcher
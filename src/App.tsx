import { Menu } from '@ark-ui/react'

function App() {
  return (
    <>
       <Menu.Root onSelect={console.log}>
        <Menu.Trigger>
          Open menu
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="react">React</Menu.Item>
            <Menu.Item value="solid">Solid</Menu.Item>
            <Menu.Item value="vue">Vue</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}

export default App

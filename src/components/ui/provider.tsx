"use client"

import { ChakraProvider, defaultSystem, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: { value: "Comfortaa Variable" },
          body: { value: "Comfortaa Variable" },
        },
      },
    },
  })

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}


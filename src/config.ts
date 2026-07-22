// Company: Leader Electronics of Europe
// License: MIT
// Created by: Ed Smith 
// Date: 13/05/2026
// Load, create and delete user presets on LeaderPhabrix LPX500 waveform monitor using Companion/ streamdeck buttons. 
// Requires Rest API to be enabled on LPX500 device and to be connected to same network as Companion
// User preset buttons are automatically generated when module has connected 

import { type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
  host: string
  port: number
  refreshMs: number
}

export function getConfigFields(): SomeCompanionConfigField[] {
  return [
    {
      type: 'textinput',
      id: 'host',
      label: 'Device Host/IP',
      width: 12,
      default: '127.0.0.1',
    },
    {
      type: 'number',
      id: 'port',
      label: 'Port',
      width: 6,
      default: 8080,
      min: 1,
      max: 65535,
    },
    {
      type: 'number',
      id: 'refreshMs',
      label: 'Refresh interval (ms)',
      width: 6,
      default: 5000,
      min: 1000,
      max: 60000,
    },
  ]
}

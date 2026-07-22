// Company: Leader Electronics of Europe
// License: MIT
// Created by: Ed Smith 
// Date: 13/05/2026
// Load, create and delete user presets on LeaderPhabrix LPX500 waveform monitor using Companion/ streamdeck buttons. 
// Requires Rest API to be enabled on LPX500 device and to be connected to same network as Companion
// User preset buttons are automatically generated when module has connected 

import type { CompanionStaticUpgradeScript } from '@companion-module/base'
import type { ModuleConfig } from './config.js'

export const UpgradeScripts: CompanionStaticUpgradeScript<ModuleConfig>[] = []

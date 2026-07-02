// Company: Leader Electronics of Europe
// License: MIT
// Created by: Ed Smith 
// Date: 13/05/2026
// Load, create and delete user presets on LeaderPhabrix LPX500 waveform monitor using Companion/ streamdeck buttons. 
// Requires Rest API to be enabled on LPX500 device and to be connected to same network as Companion
// User preset buttons are automatically genereated when module has connected 


import { runEntrypoint } from '@companion-module/base'
import { DynamicLoaderInstance } from './main.js'
import { UpgradeScripts } from './upgrades.js'

runEntrypoint(DynamicLoaderInstance, UpgradeScripts)

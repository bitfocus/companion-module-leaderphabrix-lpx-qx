## LPX500 & Qx/ QxL/ QxP Preset loader

Loads, Creates, & Deletes user presets on a LeaderPhabrix LPX500 Waveform Monitor (tested with firmware 1.2.0 Jan 2026) or Phabrix Qx 5.4 / QxL 6.2/ QxP 6.2 .
Ideal to quickly switch between user presets from a touch of a button.
Requires REST API to be enabled on device - See Network and Automation Tool.

- Connect to device using IP address or hostname.
- Companion will get all the currently saved user presets which have been created on the device using .../presets/userPresets device end point
- From the button panel open up module presets and select the connected device you have setup, to view the pre-made buttons.
- Drag user preset button to the Button panel.
- Open button panel and press the button - User Preset gets loaded on the device if successful, if not button will turn Red/ Amber.
- Create Preset button (wait at least 30seconds after making last change on device before creating preset) and Delete preset button also available. 
- Hold Delete button for 5 seconds to delete last loaded preset (It will not clear the screen instruments but the preset will be deleted) - USE WITH CAUTION, preset can not be recovered if deleted.
- Status buttons for last created, last loaded and last deleted user presets are also available if required
- Last created status button when pressed will load the last created preset
- About device (software version, device type etc) end point variables also available (basic support). NOTE: SerialNumber variable may not be populated depending on software version used

NOTE: Status buttons only provide the last status when actioned from the button panel. 

NOTE: If the user selects, creates, updates or deletes a preset using the devices preset menu these will not be reflected in the status/ buttons. 

NOTE: User preset buttons can not be loaded automatically into the button panel.

NOTE: Currently there is an issue when creating a new preset, where it may return a warning due to the preset name not being returned correctly by the device, 
subsequently this will produce a warning, however the preset has been made on the unit. 
If you press the create button again (and subsequently) a new preset will be created and returned correctly via the API. 

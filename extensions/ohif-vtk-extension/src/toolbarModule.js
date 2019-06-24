const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
};

const definitions = [
  {
    id: 'Crosshairs',
    label: 'Crosshairs',
    icon: 'crosshairs',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableCrosshairsTool',
    commandOptions: {},
  },
  {
    id: 'WWWC',
    label: 'WWWC',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableLevelTool',
    commandOptions: {},
  },
  {
    id: 'Rotate',
    label: 'Rotate',
    icon: '3d-rotate',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableRotateTool',
    commandOptions: {},
  },
  {
    id: 'MPR',
    label: 'MPR',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'enableCompositeBlend',
    commandOptions: {},
  },
  {
    id: 'enableMIP',
    label: 'MIP',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'enableMIP',
    commandOptions: {},
  },
  {
    id: 'enableMinIP',
    label: 'MinIP',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'enableMinIP',
    commandOptions: {},
  },
  {
    id: 'enableAverageIP',
    label: 'AverageIP',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'enableAverageIP',
    commandOptions: {},
  },
  {
    id: 'Slab5',
    label: 'Slab 5',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'setSlabWidthTo5',
    commandOptions: {},
  },

  {
    id: 'Slab25',
    label: 'Slab 25',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'setSlabWidthTo25',
    commandOptions: {},
  },

  {
    id: 'Slab50',
    label: 'Slab 50',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'setSlabWidthTo50',
    commandOptions: {},
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::VTK',
};
